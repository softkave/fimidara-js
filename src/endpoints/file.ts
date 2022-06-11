import type {Response} from 'node-fetch';
import type {Readable} from 'stream';
import {
  IFile,
  IFileMatcher,
  IImageTransformationParams,
  IUpdateFileDetailsInput,
  UploadFilePublicAccessActions,
} from '../definitions/file';
import {CredentialsNotProvidedError} from '../errors';
import {
  GetEndpointResult,
  IEndpointParamsBase,
  IEndpointResultBase,
} from '../types';
import {
  EndpointsBase,
  HTTP_HEADER_AUTHORIZATION,
  invokeEndpoint,
  invokeEndpointWithAuth,
  setEndpointFormData,
  setEndpointParam,
} from '../utils';
// import {FormData} from 'formdata-polyfill/esm.min';
// import FormData from"form-data"
var FormData = require('form-data');
const URLSearchParams =
  require('core-js/features/url-search-params') as typeof globalThis['URLSearchParams'];

const baseURL = '/files';
const deleteFileURL = `${baseURL}/deleteFile`;
const getFileDetailsURL = `${baseURL}/getFileDetails`;
const updateFileDetailsURL = `${baseURL}/updateFileDetails`;
const uploadFileURL = `${baseURL}/uploadFile`;
const getFileURL = `${baseURL}/getFile`;

const UPLOAD_FILE_BLOB_FORMDATA_KEY = 'data';
const PATH_QUERY_PARAMS_KEY = 'filepath';
const WORKSPACE_ID_QUERY_PARAMS_KEY = 'workspaceId';
const IMAGE_WIDTH_QUERY_PARAMS_KEY = 'w';
const IMAGE_HEIGHT_QUERY_PARAMS_KEY = 'h';

function getFetchFilePath(filepath: string, width?: number, height?: number) {
  const params = new URLSearchParams();
  // params.append(WORKSPACE_ID_QUERY_PARAMS_KEY, workspaceId);
  params.append(PATH_QUERY_PARAMS_KEY, filepath);
  setEndpointParam(params, IMAGE_WIDTH_QUERY_PARAMS_KEY, width);
  setEndpointParam(params, IMAGE_HEIGHT_QUERY_PARAMS_KEY, height);
  return getFileURL + `?${params.toString()}`;
}

function getUploadFilePath(workspaceId: string, filepath: string) {
  const params = new URLSearchParams();
  params.append(WORKSPACE_ID_QUERY_PARAMS_KEY, workspaceId);
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
  extends Required<Pick<IFileMatcher, 'filepath'>>,
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
  extends Required<Pick<IFileMatcher, 'filepath'>>,
    IEndpointParamsBase {
  description?: string;
  encoding?: string;
  extension?: string;
  mimetype?: string;
  // data: Blob;
  data: Readable | ReadableStream;
  publicAccessActions?: UploadFilePublicAccessActions;
}

export type IUploadFileEndpointResult = GetEndpointResult<{
  file: IFile;
}>;

export default class FileEndpoints extends EndpointsBase {
  async deleteFile(props: IDeleteFileEndpointParams) {
    return invokeEndpointWithAuth<IEndpointResultBase>({
      path: deleteFileURL,
      data: props,
      token: this.getAuthToken(props),
      method: 'DELETE',
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
    const url = getFetchFilePath(
      props.filepath,
      props.imageTranformation?.width,
      props.imageTranformation?.height
    );
    const response = await invokeEndpointWithAuth<Response>({
      path: url,
      token: this.getAuthToken(props),
      returnFetchResponse: true,
      method: 'GET',
    });

    // TODO: return blob instead of buffer
    const buffer = await response.arrayBuffer();
    return {
      buffer,
    };
  }

  async uploadFile(props: IUploadFileEndpointParams) {
    const formData = new FormData();
    formData.append(UPLOAD_FILE_BLOB_FORMDATA_KEY, props.data);
    formData.append('filepath', props.filepath);
    // setEndpointFormData(formData, 'workspaceId', props.workspaceId);
    setEndpointFormData(formData, 'description', props.description);
    // setEndpointFormData(formData, 'fileId', props.fileId);
    setEndpointFormData(formData, 'encoding', props.encoding);
    setEndpointFormData(formData, 'extension', props.extension);
    setEndpointFormData(formData, 'mimetype', props.mimetype);

    const requestToken = this.getAuthToken(props);
    if (!requestToken) {
      throw new CredentialsNotProvidedError();
    }

    // const res = await axios({
    //   method: 'post',
    //   url: getServerAddr() + uploadFileURL,
    //   // responseType: 'stream',
    //   headers: {
    //     [HTTP_HEADER_AUTHORIZATION]: `Bearer ${requestToken}`,
    //   },
    //   data: formData,
    // });
    // return res.data;

    let hd = {};
    if (formData.getHeaders) {
      hd = formData.getHeaders();
    }

    return await invokeEndpoint<IUploadFileEndpointResult>({
      path: uploadFileURL,
      data: formData,
      headers: {
        [HTTP_HEADER_AUTHORIZATION]: `Bearer ${requestToken}`,
        ...hd,
      },
      omitContentTypeHeader: true,
    });
  }

  public getFetchFilePath = getFetchFilePath;
  public getUploadFilePath = getUploadFilePath;
}
