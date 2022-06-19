import {
  IAddPermissionItemsEndpointParams,
  IAddPermissionItemsEndpointResult,
  IDeletePermissionItemsByIdEndpointParams,
  IGetEntityPermissionItemsEndpointParams,
  IGetEntityPermissionItemsEndpointResult,
  IGetResourcePermissionItemsEndpointParams,
  IGetResourcePermissionItemsEndpointResult,
  IPermissionItemEndpoints,
  IReplacePermissionItemsByEntityEndpointParams,
  IReplacePermissionItemsByEntityEndpointResult,
} from '../definitions';
import {IEndpointResultBase} from '../definitions/types';
import {EndpointsBase, invokeEndpointWithAuth} from '../utils';

const basePath = '/permissionItems';
const addItemsPath = `${basePath}/addItems`;
const deleteItemsByIdPath = `${basePath}/deleteItemsById`;
const getEntityPermissionItemsPath = `${basePath}/getEntityPermissionItems`;
const getResourcePermissionItemsPath = `${basePath}/getResourcePermissionItems`;
const replacePermissionItemsByEntityPath = `${basePath}/replaceItemsByEntity`;

export default class PermissionItemEndpoints
  extends EndpointsBase
  implements IPermissionItemEndpoints
{
  async addItems(props: IAddPermissionItemsEndpointParams) {
    return invokeEndpointWithAuth<IAddPermissionItemsEndpointResult>({
      path: addItemsPath,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async deleteItemsById(props: IDeletePermissionItemsByIdEndpointParams) {
    return invokeEndpointWithAuth<IEndpointResultBase>({
      path: deleteItemsByIdPath,
      data: props,
      token: this.getAuthToken(props),
      method: 'DELETE',
    });
  }

  async getResourcePermissionItems(
    props: IGetResourcePermissionItemsEndpointParams
  ) {
    return await invokeEndpointWithAuth<IGetResourcePermissionItemsEndpointResult>(
      {
        path: getResourcePermissionItemsPath,
        data: props,
        token: this.getAuthToken(props),
      }
    );
  }

  async getEntityPermissionItems(
    props: IGetEntityPermissionItemsEndpointParams
  ) {
    return await invokeEndpointWithAuth<IGetEntityPermissionItemsEndpointResult>(
      {
        path: getEntityPermissionItemsPath,
        data: props,
        token: this.getAuthToken(props),
      }
    );
  }

  async replacePermissionItemsByEntity(
    props: IReplacePermissionItemsByEntityEndpointParams
  ) {
    return await invokeEndpointWithAuth<IReplacePermissionItemsByEntityEndpointResult>(
      {
        path: replacePermissionItemsByEntityPath,
        data: props,
        token: this.getAuthToken(props),
      }
    );
  }
}
