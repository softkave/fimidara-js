import {IAgent} from './system';
import {IEndpointParamsBase, IEndpointResultBase} from './types';

/** @category Workspace */
export enum WorkspaceBillStatus {
  /** Workspace is OK and operations will continue as normal. */
  Ok = 'ok',

  /** Workspace is in the grace period. Grace period is the time given to the workspace to pay it's bill for the previous billing period. During this time, operations will still continue as normal. */
  GracePeriod = 'grace-period',

  /** The bill for the previous billing period is overdue, and operations will not be served. Meaning API calls will fail with a `UsageLimitExceededError` error until the workspace's bill is resolved. */
  BillOverdue = 'bill-overdue',
}

/** @category Workspace */
export interface IWorkspace {
  resourceId: string;
  createdBy: IAgent;
  createdAt: Date | string;
  lastUpdatedBy: IAgent;
  lastUpdatedAt: Date | string;

  /** Unique resource name, not case sensitive. Meaning, 'MyResourceName' will match 'myresourcename'. */
  name: string;
  description?: string;

  /**
   * The public permission group ID.
   * The public permission group is the permission group assigned to unauthenticated or unauthorized agents. For example, if a `GET` `HTTP` request is made for a file without the `Authentication` header, or authentication or authorization fails for any reason, the calling agent will be assigned the public permission group while the server processes the request. The permission group is also assigned to all agents when processing a request but given the least weight. Meaning if an agent does not explicitly have a access to a file, but the public permission group has access to it, i.e, the file is designated public, the agent will be able to access the file.
   *
   * This permission group is auto-generated when the workspace is created, and this field is its ID.
   *
   * You can add permission items to this permission to make resources publicly accessible.
   */
  publicPermissionGroupId?: string;
  billStatusAssignedAt: Date | string;

  /** The workspace's bill status. */
  billStatus: WorkspaceBillStatus;
}

/** @category Workspace */
export interface INewWorkspaceInput {
  /** Unique resource name, not case sensitive. Meaning, 'MyResourceName' will match 'myresourcename'. */
  name: string;
  description?: string;
}

/** @category Workspace */
export type IUpdateWorkspaceInput = Partial<INewWorkspaceInput>;

/** @category Workspace */
export interface IGetWorkspaceEndpointParams extends IEndpointParamsBase {
  workspaceId: string;
}

/** @category Workspace */
export interface IGetWorkspaceEndpointResult extends IEndpointResultBase {
  workspace: IWorkspace;
}

/** @category Workspace */
export interface IUpdateWorkspaceEndpointParams extends IEndpointParamsBase {
  workspaceId: string;
  workspace: IUpdateWorkspaceInput;
}

/** @category Workspace */
export interface IUpdateWorkspaceEndpointResult extends IEndpointResultBase {
  workspace: IWorkspace;
}

/** @category Workspace */
export interface IWorkspaceEndpoints {
  getWorkspace(
    props: IGetWorkspaceEndpointParams
  ): Promise<IGetWorkspaceEndpointResult>;
  updateWorkspace(
    props: IUpdateWorkspaceEndpointParams
  ): Promise<IUpdateWorkspaceEndpointResult>;
}
