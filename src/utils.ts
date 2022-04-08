import {OutgoingHttpHeaders} from 'http';
import type {Blob} from 'node-fetch';
import {fetch} from 'cross-fetch';
import {getServerAddr} from './addr';
import {FormDataType, IEndpointParamsBase, IEndpointResultBase} from './types';
import {isString, omit, isBoolean} from 'lodash';
import FilesConfig, {IConfig} from './config';
import {CredentialsNotProvidedError} from './errors';
import {IAppError} from './definitions/system';

const toAppError = (err: Error | IAppError | string): IAppError => {
  const error = isString(err) ? new Error(err) : err;
  return {
    name: error.name,
    message: error.message,
    action: (error as any).action,
    field: (error as any).field,
  };
};

export const toAppErrorsArray = (err: any) => {
  if (!err) {
    return [];
  } else if (Array.isArray(err)) {
    return err.map(error => toAppError(error));
  } else {
    return [toAppError(err)];
  }
};

export const HTTP_HEADER_CONTENT_TYPE = 'Content-Type';
export const HTTP_HEADER_AUTHORIZATION = 'Authorization';
export const CONTENT_TYPE_APPLICATION_JSON = 'application/json';
export const CONTENT_TYPE_MULTIPART_FORMDATA = 'multipart/form-data';

export interface IInvokeEndpointParams {
  data?: any;
  path: string;
  headers?: OutgoingHttpHeaders;
  method?: 'GET' | 'POST';

  // To allow the fetch function set the header when
  // the body is multipart/form-data
  omitContentTypeHeader?: boolean;
  returnFetchResponse?: boolean;

  // Defaults to true
  throwOnBodyError?: boolean;
}

export async function invokeEndpoint<T extends any = any>(
  props: IInvokeEndpointParams
): Promise<T> {
  const {data, path, omitContentTypeHeader} = props;
  const method = props.method || 'POST';
  const incomingHeaders = props.headers || {};
  const contentType = !omitContentTypeHeader
    ? incomingHeaders[HTTP_HEADER_CONTENT_TYPE] || CONTENT_TYPE_APPLICATION_JSON
    : undefined;

  const contentBody =
    contentType === CONTENT_TYPE_APPLICATION_JSON
      ? JSON.stringify(omit(data, 'authToken'))
      : data;

  if (!omitContentTypeHeader) {
    incomingHeaders[HTTP_HEADER_CONTENT_TYPE] = contentType;
  }

  try {
    const result = await fetch(getServerAddr() + path, {
      method,
      headers: incomingHeaders as HeadersInit,
      body: contentBody,
      mode: 'cors',
    });

    if (result.ok) {
      if (props.returnFetchResponse) {
        return result as T;
      } else {
        const body = (await result.json()) as T;
        const throwOnBodyError = isBoolean(props.throwOnBodyError)
          ? props.throwOnBodyError
          : true;

        if ((body as IEndpointResultBase)?.errors && throwOnBodyError) {
          throw (body as IEndpointResultBase).errors;
        }
      }
    }

    const isResultJSON = result.headers
      .get(HTTP_HEADER_CONTENT_TYPE)
      ?.includes(CONTENT_TYPE_APPLICATION_JSON);

    if (isResultJSON) {
      const body = (await result.json()) as IEndpointResultBase | undefined;

      if (body?.errors) {
        throw (body as IEndpointResultBase).errors;
      }
    }

    throw new Error(result.statusText);
  } catch (error) {
    const errors = toAppErrorsArray(error);
    throw errors;
  }
}

export interface IInvokeEndpointWithAuthParams extends IInvokeEndpointParams {
  token?: string;
}

export async function invokeEndpointWithAuth<T extends any = any>(
  props: IInvokeEndpointWithAuthParams
) {
  const requestToken = props.token || FilesConfig.getConfig().authToken;

  if (!requestToken) {
    throw new CredentialsNotProvidedError();
  }

  return invokeEndpoint<T>({
    ...props,
    headers: {
      [HTTP_HEADER_AUTHORIZATION]: `Bearer ${requestToken}`,
      ...props.headers,
    },
  });
}

export function setEndpointFormData(
  formData: FormDataType,
  name: string,
  data?: string | Blob
) {
  if (data) {
    formData.set(name, data);
  }
}

export function setEndpointParam(
  params: URLSearchParams,
  name: string,
  data: any
) {
  if (data) {
    params.set(name, data);
  }
}

export class EndpointsBase {
  private config: IConfig = {};

  constructor(config?: IConfig) {
    if (config) {
      this.config = config;
    }
  }

  protected getAuthToken(params?: IEndpointParamsBase) {
    return (
      params?.authToken ||
      this.config.authToken ||
      FilesConfig.getConfig().authToken
    );
  }
}