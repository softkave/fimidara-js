import {
  IAddPermissionItemsEndpointParams,
  IAddPermissionItemsEndpointResult,
  IDeletePermissionItemsByIdEndpointParams,
  IGetEntityPermissionItemsEndpointParams,
  IGetEntityPermissionItemsEndpointResult,
  IGetResourcePermissionItemsEndpointParams,
  IGetResourcePermissionItemsEndpointResult,
  IReplacePermissionItemsByEntityEndpointParams,
  IReplacePermissionItemsByEntityEndpointResult,
} from '../definitions';
import {IEndpointResultBase} from '../definitions/types';
import {EndpointsBase, invokeEndpointWithAuth} from '../utils';

const baseURL = '/permissionItems';
const addItemsURL = `${baseURL}/addItems`;
const deleteItemsByIdURL = `${baseURL}/deleteItemsById`;
const getEntityPermissionItemsURL = `${baseURL}/getEntityPermissionItems`;
const getResourcePermissionItemsURL = `${baseURL}/getResourcePermissionItems`;
const replacePermissionItemsByEntityURL = `${baseURL}/replaceItemsByEntity`;

export default class PermissionItemEndpoints extends EndpointsBase {
  async addItems(props: IAddPermissionItemsEndpointParams) {
    return invokeEndpointWithAuth<IAddPermissionItemsEndpointResult>({
      path: addItemsURL,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async deleteItemsById(props: IDeletePermissionItemsByIdEndpointParams) {
    return invokeEndpointWithAuth<IEndpointResultBase>({
      path: deleteItemsByIdURL,
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
        path: getResourcePermissionItemsURL,
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
        path: getEntityPermissionItemsURL,
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
        path: replacePermissionItemsByEntityURL,
        data: props,
        token: this.getAuthToken(props),
      }
    );
  }
}
