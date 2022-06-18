import type {Blob, Response} from 'node-fetch';
import {
  IDeleteFileEndpointParams,
  IFileEndpoints,
  IGetFileDetailsEndpointParams,
  IGetFileDetailsEndpointResult,
  IGetFileEndpointParams,
  IGetFileEndpointResult,
  IUpdateFileDetailsEndpointParams,
  IUpdateFileDetailsEndpointResult,
  IUploadFileEndpointParams,
  IUploadFileEndpointResult,
} from '../definitions';
import {IEndpointResultBase} from '../definitions/types';
import {CredentialsNotProvidedError} from '../errors';
import {
  EndpointsBase,
  HTTP_HEADER_AUTHORIZATION,
  invokeEndpoint,
  invokeEndpointWithAuth,
  setEndpointFormData,
  setEndpointParam,
} from '../utils';
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

function getFetchFilePath(
  filepath: string,
  width?: number | null,
  height?: number | null,
  workspaceId?: string | null
) {
  const params = new URLSearchParams();
  params.append(PATH_QUERY_PARAMS_KEY, filepath);
  setEndpointParam(params, IMAGE_WIDTH_QUERY_PARAMS_KEY, width);
  setEndpointParam(params, IMAGE_HEIGHT_QUERY_PARAMS_KEY, height);
  setEndpointParam(params, WORKSPACE_ID_QUERY_PARAMS_KEY, workspaceId);
  return getFileURL + `?${params.toString()}`;
}

function getUploadFilePath(workspaceId: string, filepath: string) {
  const params = new URLSearchParams();
  params.append(WORKSPACE_ID_QUERY_PARAMS_KEY, workspaceId);
  params.append(PATH_QUERY_PARAMS_KEY, filepath);
  return uploadFileURL + `?${params.toString()}`;
}

export default class FileEndpoints
  extends EndpointsBase
  implements IFileEndpoints
{
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
    const blob = (await response.blob()) as Blob;
    return {
      body: response.body,
    };
  }

  async uploadFile(props: IUploadFileEndpointParams) {
    const formData = new FormData();
    formData.append(UPLOAD_FILE_BLOB_FORMDATA_KEY, props.data);
    formData.append('filepath', props.filepath);
    setEndpointFormData(formData, 'description', props.description);
    setEndpointFormData(formData, 'encoding', props.encoding);
    setEndpointFormData(formData, 'extension', props.extension);
    setEndpointFormData(formData, 'mimetype', props.mimetype);

    const requestToken = this.getAuthToken(props);
    if (!requestToken) {
      throw new CredentialsNotProvidedError();
    }

    let headers = {};
    if (formData.getHeaders) {
      headers = formData.getHeaders();
    }

    return await invokeEndpoint<IUploadFileEndpointResult>({
      path: uploadFileURL,
      data: formData,
      headers: {
        [HTTP_HEADER_AUTHORIZATION]: `Bearer ${requestToken}`,
        ...headers,
      },
      omitContentTypeHeader: true,
    });
  }

  public getFetchFilePath = getFetchFilePath;
  public getUploadFilePath = getUploadFilePath;
}
