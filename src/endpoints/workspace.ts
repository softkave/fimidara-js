import {
  IGetWorkspaceEndpointParams,
  IGetWorkspaceEndpointResult,
  IUpdateWorkspaceEndpointParams,
  IUpdateWorkspaceEndpointResult,
  IWorkspaceEndpoints,
} from '../definitions';
import {EndpointsBase, invokeEndpointWithAuth} from '../utils';

const basePath = '/workspaces';
const getWorkspacePath = `${basePath}/getWorkspace`;
const updateWorkspacePath = `${basePath}/updateWorkspace`;

export default class WorkspaceEndpoints
  extends EndpointsBase
  implements IWorkspaceEndpoints
{
  async getWorkspace(props: IGetWorkspaceEndpointParams) {
    return await invokeEndpointWithAuth<IGetWorkspaceEndpointResult>({
      path: getWorkspacePath,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async updateWorkspace(props: IUpdateWorkspaceEndpointParams) {
    return await invokeEndpointWithAuth<IUpdateWorkspaceEndpointResult>({
      path: updateWorkspacePath,
      data: props,
      token: this.getAuthToken(props),
    });
  }
}
