import path = require('path');
import {getServerAddr} from '../addr';
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
const FormData = require('form-data');
const URLSearchParams =
  require('core-js/features/url-search-params') as typeof globalThis['URLSearchParams'];

const basePath = '/files';
const deleteFilePath = `${basePath}/deleteFile`;
const getFileDetailsPath = `${basePath}/getFileDetails`;
const updateFileDetailsPath = `${basePath}/updateFileDetails`;
const uploadFilePath = `${basePath}/uploadFile`;
const getFilePath = `${basePath}/getFile`;

const UPLOAD_FILE_BLOB_FORMDATA_KEY = 'data';
const IMAGE_WIDTH_QUERY_PARAMS_KEY = 'w';
const IMAGE_HEIGHT_QUERY_PARAMS_KEY = 'h';

/** Returns a URL for getting the file associated with the filepath if it
 * exists. Useful for getting full profile image URLs or in other instances
 * where you need to fetch a file using a URL. */
export function getFetchFileURL(
  /**
   * File path including the workspace rootname, for example:
   * `/workspace-rootname/path/to/file.txt`.
   */
  filepath: string,

  /**
   * Optional image transformation options. Will be applied if the file is an
   * image.
   */
  width?: number,

  /**
   * Optional image transformation options. Will be applied if the file is an
   * image.
   */
  height?: number
) {
  const params = new URLSearchParams();
  setEndpointParam(params, IMAGE_WIDTH_QUERY_PARAMS_KEY, width);
  setEndpointParam(params, IMAGE_HEIGHT_QUERY_PARAMS_KEY, height);
  return (
    getServerAddr() +
    path.normalize(`${getFilePath}/${filepath}`) +
    `?${params.toString()}`
  );
}

/** Returns a URL to which a file can be uploaded. Useful for getting full
 * URLs when you're using code that require a URL to upload data to. The
 * upload has to be `multipart/form-data` formatted after
 * {@link IUploadFileEndpointParams}. */
export function getUploadFileURL(
  /**
   * File path including the workspace rootname, for example:
   * `/workspace-rootname/path/to/file.txt`.
   */
  filepath: string
) {
  return getServerAddr() + path.normalize(`${uploadFilePath}/${filepath}`);
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

    return {
      body: response.body,
    };
  }

  async uploadFile(props: IUploadFileEndpointParams) {
    const formData = new FormData();
    formData.append(UPLOAD_FILE_BLOB_FORMDATA_KEY, props.data);
    // formData.append('filepath', props.filepath);
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

    const callPath = getUploadFileURL(props.filepath);
    return await invokeEndpoint<IUploadFileEndpointResult>({
      path: callPath,
      data: formData,
      headers: {
        [HTTP_HEADER_AUTHORIZATION]: `Bearer ${requestToken}`,
        ...headers,
      },
      omitContentTypeHeader: true,
    });
  }
}
