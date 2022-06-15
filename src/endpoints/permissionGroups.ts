import {
  IAddPermissionGroupEndpointParams,
  IAddPermissionGroupEndpointResult,
  IDeletePermissionGroupEndpointParams,
  IGetPermissionGroupEndpointParams,
  IGetPermissionGroupEndpointResult,
  IGetWorkspacePermissionGroupEndpointParams,
  IGetWorkspacePermissionGroupEndpointResult,
  IUpdatePermissionGroupEndpointParams,
  IUpdatePermissionGroupEndpointResult,
} from '../definitions';
import {IEndpointResultBase} from '../definitions/types';
import {EndpointsBase, invokeEndpointWithAuth} from '../utils';

const baseURL = '/permissionGroups';
const addPermissionGroupURL = `${baseURL}/addPermissionGroup`;
const getWorkspacePermissionGroupsURL = `${baseURL}/getWorkspacePermissionGroups`;
const getPermissionGroupURL = `${baseURL}/getPermissionGroup`;
const deletePermissionGroupURL = `${baseURL}/deletePermissionGroup`;
const updatePermissionGroupURL = `${baseURL}/updatePermissionGroup`;

export default class PermissionGroupEndpoints extends EndpointsBase {
  async addPermissionGroup(props: IAddPermissionGroupEndpointParams) {
    return invokeEndpointWithAuth<IAddPermissionGroupEndpointResult>({
      path: addPermissionGroupURL,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async getWorkspacePermissionGroups(
    props: IGetWorkspacePermissionGroupEndpointParams
  ) {
    return await invokeEndpointWithAuth<IGetWorkspacePermissionGroupEndpointResult>(
      {
        path: getWorkspacePermissionGroupsURL,
        data: props,
        token: this.getAuthToken(props),
      }
    );
  }

  async getPermissionGroup(props: IGetPermissionGroupEndpointParams) {
    return await invokeEndpointWithAuth<IGetPermissionGroupEndpointResult>({
      path: getPermissionGroupURL,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async deletePermissionGroup(props: IDeletePermissionGroupEndpointParams) {
    return invokeEndpointWithAuth<IEndpointResultBase>({
      path: deletePermissionGroupURL,
      data: props,
      token: this.getAuthToken(props),
      method: 'DELETE',
    });
  }

  async updatePermissionGroup(props: IUpdatePermissionGroupEndpointParams) {
    return await invokeEndpointWithAuth<IUpdatePermissionGroupEndpointResult>({
      path: updatePermissionGroupURL,
      data: props,
      token: this.getAuthToken(props),
    });
  }
}
