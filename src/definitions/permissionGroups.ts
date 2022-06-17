import {IAgent} from './system';
import {IEndpointParamsBase, IEndpointResultBase} from './types';

export interface IAssignedPermissionGroup {
  permissionGroupId: string;
  assignedAt: string;
  assignedBy: IAgent;
  order: number;
}

export interface IPermissionGroup {
  resourceId: string;
  workspaceId: string;
  createdAt: string;
  createdBy: IAgent;
  lastUpdatedAt?: string;
  lastUpdatedBy?: IAgent;
  name: string;
  description?: string;
  permissionGroups: IAssignedPermissionGroup[];
}

export interface IPermissionGroupInput {
  permissionGroupId: string;
  order: number;
}

export interface INewPermissionGroupInput {
  name: string;
  description?: string;
  permissionGroups?: IPermissionGroupInput[];
}

export type IUpdatePermissionGroupInput = Partial<INewPermissionGroupInput>;

export interface IAddPermissionGroupEndpointParams extends IEndpointParamsBase {
  permissionGroup: INewPermissionGroupInput;
}

export interface IAddPermissionGroupEndpointResult extends IEndpointResultBase {
  permissionGroup: IPermissionGroup;
}

export interface IDeletePermissionGroupEndpointParams
  extends IEndpointParamsBase {
  permissionGroupId: string;
}

export interface IGetWorkspacePermissionGroupEndpointParams
  extends IEndpointParamsBase {}

export interface IGetWorkspacePermissionGroupEndpointResult
  extends IEndpointResultBase {
  permissionGroups: IPermissionGroup[];
}

export interface IGetPermissionGroupEndpointParams extends IEndpointParamsBase {
  permissionGroupId: string;
}

export interface IGetPermissionGroupEndpointResult extends IEndpointResultBase {
  permissionGroup: IPermissionGroup;
}

export interface IUpdatePermissionGroupEndpointParams
  extends IEndpointParamsBase {
  permissionGroupId: string;
  permissionGroup: IUpdatePermissionGroupInput;
}

export interface IUpdatePermissionGroupEndpointResult
  extends IEndpointResultBase {
  permissionGroup: IPermissionGroup;
}

export interface IPermissionGroupEndpoints {
  addPermissionGroup(
    props: IAddPermissionGroupEndpointParams
  ): Promise<IAddPermissionGroupEndpointResult>;
  getWorkspacePermissionGroups(
    props: IGetWorkspacePermissionGroupEndpointParams
  ): Promise<IGetWorkspacePermissionGroupEndpointResult>;
  getPermissionGroup(
    props: IGetPermissionGroupEndpointParams
  ): Promise<IGetPermissionGroupEndpointResult>;
  deletePermissionGroup(
    props: IDeletePermissionGroupEndpointParams
  ): Promise<IEndpointResultBase>;
  updatePermissionGroup(
    props: IUpdatePermissionGroupEndpointParams
  ): Promise<IUpdatePermissionGroupEndpointResult>;
}
