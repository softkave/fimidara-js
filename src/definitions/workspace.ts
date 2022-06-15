import {IAgent} from './system';
import {IEndpointParamsBase, IEndpointResultBase} from './types';

export enum WorkspaceBillStatus {
  Ok = 'ok',
  GracePeriod = 'grace-period',
  BillOverdue = 'bill-overdue',
}

export interface IWorkspace {
  resourceId: string;
  createdBy: IAgent;
  createdAt: Date | string;
  lastUpdatedBy: IAgent;
  lastUpdatedAt: Date | string;
  name: string;
  description?: string;
  publicPermissionGroupId?: string;
  billStatusAssignedAt: Date | string;
  billStatus: WorkspaceBillStatus;
}

export interface INewWorkspaceInput {
  name: string;
  description?: string;
}

export type IUpdateWorkspaceInput = Partial<INewWorkspaceInput>;

export interface IGetWorkspaceEndpointParams extends IEndpointParamsBase {
  workspaceId: string;
}

export type IGetWorkspaceEndpointResult = IEndpointResultBase & {
  workspace: IWorkspace;
};

export interface IUpdateWorkspaceEndpointParams extends IEndpointParamsBase {
  workspaceId: string;
  workspace: IUpdateWorkspaceInput;
}

export type IUpdateWorkspaceEndpointResult = IEndpointResultBase & {
  workspace: IWorkspace;
};
