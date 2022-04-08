import type {Blob, Response} from 'node-fetch';
import FilesConfig from '../config';
import {
  IFile,
  IFileMatcher,
  IImageTransformationParams,
  IUpdateFileDetailsInput,
  UploadFilePublicAccessActions,
} from '../definitions/file';
import {CredentialsNotProvidedError} from '../errors';
import {
  FormDataType,
  GetEndpointResult,
  IEndpointParamsBase,
  IEndpointResultBase,
} from '../types';
import {
  invokeEndpoint,
  invokeEndpointWithAuth,
  setEndpointFormData,
  HTTP_HEADER_AUTHORIZATION,
  setEndpointParam,
  EndpointsBase,
} from '../utils';

const URLSearchParams =
  require('core-js/features/url-search-params') as typeof globalThis['URLSearchParams'];

const baseURL = '/files';
const deleteFileURL = `${baseURL}/deleteFile`;
const getFileDetailsURL = `${baseURL}/getFileDetails`;
const updateFileDetailsURL = `${baseURL}/updateFileDetails`;
const uploadFileURL = `${baseURL}/uploadFile`;
const getFileURL = `${baseURL}/getFile`;

const UPLOAD_FILE_BLOB_FORMDATA_KEY = 'data';
const PATH_QUERY_PARAMS_KEY = 'p';
const ORG_ID_QUERY_PARAMS_KEY = 'orgId';
const IMAGE_WIDTH_QUERY_PARAMS_KEY = 'w';
const IMAGE_HEIGHT_QUERY_PARAMS_KEY = 'h';

function getFetchImagePath(
  orgId: string,
  filepath: string,
  width: number,
  height: number
) {
  const params = new URLSearchParams();
  params.append(ORG_ID_QUERY_PARAMS_KEY, orgId);
  params.append(PATH_QUERY_PARAMS_KEY, filepath);
  setEndpointParam(params, IMAGE_WIDTH_QUERY_PARAMS_KEY, width);
  setEndpointParam(params, IMAGE_HEIGHT_QUERY_PARAMS_KEY, height);
  return getFileURL + `?${params.toString()}`;
}

function getUploadFilePath(orgId: string, filepath: string) {
  const params = new URLSearchParams();
  params.append(ORG_ID_QUERY_PARAMS_KEY, orgId);
  params.append(PATH_QUERY_PARAMS_KEY, filepath);
  return uploadFileURL + `?${params.toString()}`;
}

export interface IGetFileDetailsEndpointParams
  extends IFileMatcher,
    IEndpointParamsBase {}

export type IGetFileDetailsEndpointResult = GetEndpointResult<{
  file: IFile;
}>;

export interface IDeleteFileEndpointParams
  extends IFileMatcher,
    IEndpointParamsBase {}

export interface IGetFileEndpointParams
  extends IFileMatcher,
    IEndpointParamsBase {
  imageTranformation?: IImageTransformationParams;
}

export type IGetFileEndpointResult = {
  // TODO: Look into changing this to a streamable type
  buffer: ArrayBuffer;
};

export interface IUpdateFileDetailsEndpointParams
  extends IFileMatcher,
    IEndpointParamsBase {
  file: IUpdateFileDetailsInput;
}

export type IUpdateFileDetailsEndpointResult = GetEndpointResult<{
  file: IFile;
}>;

export interface IUploadFileEndpointParams
  extends IFileMatcher,
    IEndpointParamsBase {
  description?: string;
  encoding?: string;
  extension?: string;
  mimetype?: string;
  data: Blob;
  publicAccessActions?: UploadFilePublicAccessActions;
}

export type IUploadFileEndpointResult = GetEndpointResult<{
  file: IFile;
}>;

const FormDataImpl = ((globalThis as any).FormData ||
  require('form-data')) as FormDataType;

export default class FileEndpoints extends EndpointsBase {
  async deleteFile(props: IDeleteFileEndpointParams) {
    return invokeEndpointWithAuth<IEndpointResultBase>({
      path: deleteFileURL,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async getFileDetails(props: IGetFileDetailsEndpointParams) {
    return invokeEndpointWithAuth<IGetFileDetailsEndpointResult>({
      path: getFileDetailsURL,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async updateFileDetails(props: IUpdateFileDetailsEndpointParams) {
    return await invokeEndpointWithAuth<IUpdateFileDetailsEndpointResult>({
      path: updateFileDetailsURL,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async getFile(
    props: IGetFileEndpointParams
  ): Promise<IGetFileEndpointResult> {
    const response = await invokeEndpointWithAuth<Response>({
      path: `${baseURL}/getFile`,
      data: props,
      token: this.getAuthToken(props),
      returnFetchResponse: true,
      method: 'GET',
    });

    const buffer = await response.arrayBuffer();
    return {
      buffer,
    };
  }

  async uploadFile(props: IUploadFileEndpointParams) {
    const formData = new FormDataImpl();
    formData.append('organizationId', props.organizationId);
    formData.append(UPLOAD_FILE_BLOB_FORMDATA_KEY, props.data);
    setEndpointFormData(formData, 'description', props.description);
    setEndpointFormData(formData, 'fileId', props.fileId);
    setEndpointFormData(formData, 'filepath', props.filepath);
    setEndpointFormData(formData, 'encoding', props.encoding);
    setEndpointFormData(formData, 'extension', props.extension);
    setEndpointFormData(formData, 'mimetype', props.mimetype);

    const requestToken = this.getAuthToken(props);

    if (!requestToken) {
      throw new CredentialsNotProvidedError();
    }

    return await invokeEndpoint<IUploadFileEndpointResult>({
      path: uploadFileURL,
      data: formData,
      headers: {
        [HTTP_HEADER_AUTHORIZATION]: `Bearer ${requestToken}`,
      },
      omitContentTypeHeader: true,
    });
  }

  public getFetchImagePath = getFetchImagePath;
  public getUploadFilePath = getUploadFilePath;
}
