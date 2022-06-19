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

const basePath = '/folders';
const addFolderPath = `${basePath}/addFolder`;
const listFolderContentPath = `${basePath}/listFolderContent`;
const getFolderPath = `${basePath}/getFolder`;
const deleteFolderPath = `${basePath}/deleteFolder`;
const updateFolderPath = `${basePath}/updateFolder`;

export default class FolderEndpoints
  extends EndpointsBase
  implements IFolderEndpoints
{
  async addFolder(props: IAddFolderEndpointParams) {
    return invokeEndpointWithAuth<IAddFolderEndpointResult>({
      path: addFolderPath,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async listFolderContent(props: IListFolderContentEndpointParams) {
    return await invokeEndpointWithAuth<IListFolderContentEndpointResult>({
      path: listFolderContentPath,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async getFolder(props: IGetFolderEndpointParams) {
    return await invokeEndpointWithAuth<IGetFolderEndpointResult>({
      path: getFolderPath,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async deleteFolder(props: IDeleteFolderEndpointParams) {
    return invokeEndpointWithAuth<IEndpointResultBase>({
      path: deleteFolderPath,
      data: props,
      token: this.getAuthToken(props),
      method: 'DELETE',
    });
  }

  async updateFolder(props: IUpdateFolderEndpointParams) {
    return await invokeEndpointWithAuth<IUpdateFolderEndpointResult>({
      path: updateFolderPath,
      data: props,
      token: this.getAuthToken(props),
    });
  }
}
