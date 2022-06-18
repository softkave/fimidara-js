import {
  IAddFolderEndpointParams,
  IAddFolderEndpointResult,
  IDeleteFolderEndpointParams,
  IFolderEndpoints,
  IGetFolderEndpointParams,
  IGetFolderEndpointResult,
  IListFolderContentEndpointParams,
  IListFolderContentEndpointResult,
  IUpdateFolderEndpointParams,
  IUpdateFolderEndpointResult,
} from '../definitions';
import {IEndpointResultBase} from '../definitions/types';
import {EndpointsBase, invokeEndpointWithAuth} from '../utils';

const baseURL = '/folders';
const addFolderURL = `${baseURL}/addFolder`;
const listFolderContentURL = `${baseURL}/listFolderContent`;
const getFolderURL = `${baseURL}/getFolder`;
const deleteFolderURL = `${baseURL}/deleteFolder`;
const updateFolderURL = `${baseURL}/updateFolder`;

export default class FolderEndpoints
  extends EndpointsBase
  implements IFolderEndpoints
{
  async addFolder(props: IAddFolderEndpointParams) {
    return invokeEndpointWithAuth<IAddFolderEndpointResult>({
      path: addFolderURL,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async listFolderContent(props: IListFolderContentEndpointParams) {
    return await invokeEndpointWithAuth<IListFolderContentEndpointResult>({
      path: listFolderContentURL,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async getFolder(props: IGetFolderEndpointParams) {
    return await invokeEndpointWithAuth<IGetFolderEndpointResult>({
      path: getFolderURL,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async deleteFolder(props: IDeleteFolderEndpointParams) {
    return invokeEndpointWithAuth<IEndpointResultBase>({
      path: deleteFolderURL,
      data: props,
      token: this.getAuthToken(props),
      method: 'DELETE',
    });
  }

  async updateFolder(props: IUpdateFolderEndpointParams) {
    return await invokeEndpointWithAuth<IUpdateFolderEndpointResult>({
      path: updateFolderURL,
      data: props,
      token: this.getAuthToken(props),
    });
  }
}
