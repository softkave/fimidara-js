import {
  IAddPermissionGroupEndpointParams,
  IAddPermissionGroupEndpointResult,
  IDeletePermissionGroupEndpointParams,
  IGetPermissionGroupEndpointParams,
  IGetPermissionGroupEndpointResult,
  IGetWorkspacePermissionGroupEndpointParams,
  IGetWorkspacePermissionGroupEndpointResult,
  IPermissionGroupEndpoints,
  IUpdatePermissionGroupEndpointParams,
  IUpdatePermissionGroupEndpointResult,
} from '../definitions';
import {IEndpointResultBase} from '../definitions/types';
import {EndpointsBase, invokeEndpointWithAuth} from '../utils';

const basePath = '/permissionGroups';
const addPermissionGroupPath = `${basePath}/addPermissionGroup`;
const getWorkspacePermissionGroupsPath = `${basePath}/getWorkspacePermissionGroups`;
const getPermissionGroupPath = `${basePath}/getPermissionGroup`;
const deletePermissionGroupPath = `${basePath}/deletePermissionGroup`;
const updatePermissionGroupPath = `${basePath}/updatePermissionGroup`;

export default class PermissionGroupEndpoints
  extends EndpointsBase
  implements IPermissionGroupEndpoints
{
  async addPermissionGroup(props: IAddPermissionGroupEndpointParams) {
    return invokeEndpointWithAuth<IAddPermissionGroupEndpointResult>({
      path: addPermissionGroupPath,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async getWorkspacePermissionGroups(
    props: IGetWorkspacePermissionGroupEndpointParams
  ) {
    return await invokeEndpointWithAuth<IGetWorkspacePermissionGroupEndpointResult>(
      {
        path: getWorkspacePermissionGroupsPath,
        data: props,
        token: this.getAuthToken(props),
      }
    );
  }

  async getPermissionGroup(props: IGetPermissionGroupEndpointParams) {
    return await invokeEndpointWithAuth<IGetPermissionGroupEndpointResult>({
      path: getPermissionGroupPath,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async deletePermissionGroup(props: IDeletePermissionGroupEndpointParams) {
    return invokeEndpointWithAuth<IEndpointResultBase>({
      path: deletePermissionGroupPath,
      data: props,
      token: this.getAuthToken(props),
      method: 'DELETE',
    });
  }

  async updatePermissionGroup(props: IUpdatePermissionGroupEndpointParams) {
    return await invokeEndpointWithAuth<IUpdatePermissionGroupEndpointResult>({
      path: updatePermissionGroupPath,
      data: props,
      token: this.getAuthToken(props),
    });
  }
}
