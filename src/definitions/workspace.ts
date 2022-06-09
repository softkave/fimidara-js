import {IAgent} from './system';

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
  publicPresetId?: string;
  billStatusAssignedAt: Date | string;
  billStatus: WorkspaceBillStatus;
}

export interface INewWorkspaceInput {
  name: string;
  description?: string;
}

export type IUpdateWorkspaceInput = Partial<INewWorkspaceInput>;
