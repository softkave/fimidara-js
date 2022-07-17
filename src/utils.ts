import {fetch} from 'cross-fetch';
import {OutgoingHttpHeaders} from 'http';
import {isBoolean, isString, omit} from 'lodash';
import {getServerAddr} from './addr';
import FimidaraConfig, {IConfig} from './config';
import {IAppError} from './definitions/system';
import {IEndpointParamsBase, IEndpointResultBase} from './definitions/types';
import {CredentialsNotProvidedError} from './errors';

const toAppError = (err: Error | IAppError | string): IAppError => {
  const error = isString(err) ? new Error(err) : err;
  return {
    name: error.name,
    message: error.message,
    // action: (error as any).action,
    field: (error as IAppError).field,
    stack: error.stack,
  };
};

export const toAppErrorsArray = (err: Error | IAppError | string) => {
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
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';

  // To allow the fetch function set the header when
  // the body is multipart/form-data
  omitContentTypeHeader?: boolean;
  returnFetchResponse?: boolean;

  // Defaults to true
  throwOnBodyError?: boolean;

  // Defaults to false
  omitServerAddr?: boolean;
}

export async function invokeEndpoint<T extends any = any>(
  props: IInvokeEndpointParams
): Promise<T> {
  const {data, path, omitContentTypeHeader} = props;
  const serverAddr = getServerAddr();
  const method = props.method || 'POST';
  const incomingHeaders = props.headers || {};
  const contentType = !omitContentTypeHeader
    ? incomingHeaders[HTTP_HEADER_CONTENT_TYPE] || CONTENT_TYPE_APPLICATION_JSON
    : undefined;

  const contentBody =
    method === 'GET'
      ? undefined
      : contentType === CONTENT_TYPE_APPLICATION_JSON
      ? JSON.stringify(omit(data, 'authToken'))
      : data;

  if (!omitContentTypeHeader) {
    incomingHeaders[HTTP_HEADER_CONTENT_TYPE] = contentType;
  }

  try {
    const endpointAddr = props.omitServerAddr ? path : serverAddr + path;
    const result = await fetch(endpointAddr, {
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

        return body;
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
  } catch (error: any) {
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
  const requestToken = props.token || FimidaraConfig.getConfig().authToken;
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
  formData: FormData,
  name: string,
  data?: any
) {
  if (data) {
    formData.append(name, data);
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
      FimidaraConfig.getConfig().authToken
    );
  }
}

export function cast<T>(value: any) {
  return value as T;
}

export function getFilepath(filepath: string[]) {
  return filepath.join('/');
}
