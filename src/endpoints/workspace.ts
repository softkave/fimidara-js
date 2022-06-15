import {
  IGetWorkspaceEndpointParams,
  IGetWorkspaceEndpointResult,
  IUpdateWorkspaceEndpointParams,
  IUpdateWorkspaceEndpointResult,
} from '../definitions';
import {EndpointsBase, invokeEndpointWithAuth} from '../utils';

const baseURL = '/workspaces';
const getWorkspaceURL = `${baseURL}/getWorkspace`;
const updateWorkspaceURL = `${baseURL}/updateWorkspace`;

export default class WorkspaceEndpoints extends EndpointsBase {
  async getWorkspace(props: IGetWorkspaceEndpointParams) {
    return await invokeEndpointWithAuth<IGetWorkspaceEndpointResult>({
      path: getWorkspaceURL,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async updateWorkspace(props: IUpdateWorkspaceEndpointParams) {
    return await invokeEndpointWithAuth<IUpdateWorkspaceEndpointResult>({
      path: updateWorkspaceURL,
      data: props,
      token: this.getAuthToken(props),
    });
  }
}
