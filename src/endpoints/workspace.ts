import {IWorkspace, IUpdateWorkspaceInput} from '../definitions/workspace';
import {GetEndpointResult, IEndpointParamsBase} from '../types';
import {EndpointsBase, invokeEndpointWithAuth} from '../utils';

const baseURL = '/workspaces';
const getWorkspaceURL = `${baseURL}/getWorkspace`;
const updateWorkspaceURL = `${baseURL}/updateWorkspace`;

export interface IGetWorkspaceEndpointParams extends IEndpointParamsBase {
  workspaceId: string;
}

export type IGetWorkspaceEndpointResult = GetEndpointResult<{
  workspace: IWorkspace;
}>;

export interface IUpdateWorkspaceEndpointParams extends IEndpointParamsBase {
  workspaceId: string;
  workspace: IUpdateWorkspaceInput;
}

export type IUpdateWorkspaceEndpointResult = GetEndpointResult<{
  workspace: IWorkspace;
}>;

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
