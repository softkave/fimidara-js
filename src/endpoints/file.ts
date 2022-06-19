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

const basePath = '/files';
const deleteFilePath = `${basePath}/deleteFile`;
const getFileDetailsPath = `${basePath}/getFileDetails`;
const updateFileDetailsPath = `${basePath}/updateFileDetails`;
const uploadFilePath = `${basePath}/uploadFile`;
const getFilePath = `${basePath}/getFile`;

const UPLOAD_FILE_BLOB_FORMDATA_KEY = 'data';
const PATH_QUERY_PARAMS_KEY = 'filepath';
const WORKSPACE_ID_QUERY_PARAMS_KEY = 'workspaceId';
const IMAGE_WIDTH_QUERY_PARAMS_KEY = 'w';
const IMAGE_HEIGHT_QUERY_PARAMS_KEY = 'h';

function getFetchFileURL(
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
  return getFilePath + `?${params.toString()}`;
}

function getUploadFileURL(workspaceId: string, filepath: string) {
  const params = new URLSearchParams();
  params.append(WORKSPACE_ID_QUERY_PARAMS_KEY, workspaceId);
  params.append(PATH_QUERY_PARAMS_KEY, filepath);
  return uploadFilePath + `?${params.toString()}`;
}

export default class FileEndpoints
  extends EndpointsBase
  implements IFileEndpoints
{
  async deleteFile(props: IDeleteFileEndpointParams) {
    return invokeEndpointWithAuth<IEndpointResultBase>({
      path: deleteFilePath,
      data: props,
      token: this.getAuthToken(props),
      method: 'DELETE',
    });
  }

  async getFileDetails(props: IGetFileDetailsEndpointParams) {
    return invokeEndpointWithAuth<IGetFileDetailsEndpointResult>({
      path: getFileDetailsPath,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async updateFileDetails(props: IUpdateFileDetailsEndpointParams) {
    return await invokeEndpointWithAuth<IUpdateFileDetailsEndpointResult>({
      path: updateFileDetailsPath,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async getFile(
    props: IGetFileEndpointParams
  ): Promise<IGetFileEndpointResult> {
    const url = getFetchFileURL(
      props.filepath,
      props.imageTranformation?.width,
      props.imageTranformation?.height
    );
    const response = await invokeEndpointWithAuth<Response>({
      path: url,
      token: this.getAuthToken(props),
      returnFetchResponse: true,
      method: 'GET',
      omitServerAddr: true,
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
      path: uploadFilePath,
      data: formData,
      headers: {
        [HTTP_HEADER_AUTHORIZATION]: `Bearer ${requestToken}`,
        ...headers,
      },
      omitContentTypeHeader: true,
    });
  }

  public getFetchFileURL = getFetchFileURL;
  public getUploadFileURL = getUploadFileURL;
}
