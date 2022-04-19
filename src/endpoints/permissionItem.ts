import {
  INewPermissionItemInput,
  IPermissionItem,
} from '../definitions/permissionItem';
import {AppResourceType} from '../definitions/system';
import {
  GetEndpointResult,
  IEndpointParamsBase,
  IEndpointResultBase,
} from '../types';
import {EndpointsBase, invokeEndpointWithAuth} from '../utils';

const baseURL = '/permissionItems';
const addItemsURL = `${baseURL}/addItems`;
const deleteItemsByIdURL = `${baseURL}/deleteItemsById`;
const getEntityPermissionItemsURL = `${baseURL}/getEntityPermissionItems`;
const getResourcePermissionItemsURL = `${baseURL}/getResourcePermissionItems`;

export interface IAddPermissionItemsEndpointParams extends IEndpointParamsBase {
  workspaceId: string;
  items: INewPermissionItemInput[];
}

export type IAddPermissionItemsEndpointResult = GetEndpointResult<{
  items: IPermissionItem[];
}>;

export interface IDeletePermissionItemsByIdEndpointParams
  extends IEndpointParamsBase {
  workspaceId: string;
  itemIds: string[];
}

export interface IGetEntityPermissionItemsEndpointParams
  extends IEndpointParamsBase {
  workspaceId: string;
  permissionEntityId: string;
  permissionEntityType: AppResourceType;
}

export type IGetEntityPermissionItemsEndpointResult = GetEndpointResult<{
  items: IPermissionItem[];
}>;

export interface IGetResourcePermissionItemsEndpointParams
  extends IEndpointParamsBase {
  workspaceId: string;
  itemResourceId?: string;
  itemResourceType: AppResourceType;
  permissionOwnerId?: string;
  permissionOwnerType?: AppResourceType;
}

export type IGetResourcePermissionItemsEndpointResult = GetEndpointResult<{
  items: IPermissionItem[];
}>;

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
}
