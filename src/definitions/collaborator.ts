import {
  IAssignedPermissionGroup,
  IPermissionGroupInput,
} from './permissionGroups';
import {IEndpointParamsBase, IEndpointResultBase} from './types';

export interface IUserWorkspace {
  workspaceId: string;
  joinedAt: string;
  permissionGroups: IAssignedPermissionGroup[];
}

export interface ICollaborator extends IUserWorkspace {
  resourceId: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface IGetCollaboratorEndpointParams extends IEndpointParamsBase {
  collaboratorId: string;
}

export interface IGetCollaboratorEndpointResult extends IEndpointResultBase {
  collaborator: ICollaborator;
}

export interface IGetWorkspaceCollaboratorsEndpointParams
  extends IEndpointParamsBase {}

export interface IGetWorkspaceCollaboratorsEndpointResult
  extends IEndpointResultBase {
  collaborators: ICollaborator[];
}

export interface IRemoveCollaboratorEndpointParams extends IEndpointParamsBase {
  collaboratorId: string;
}

export interface IUpdateCollaboratorPermissionGroupsEndpointParams
  extends IEndpointParamsBase {
  collaboratorId: string;
  permissionGroups: IPermissionGroupInput[];
}

export interface IUpdateCollaboratorPermissionGroupsEndpointResult
  extends IEndpointResultBase {
  collaborator: ICollaborator;
}

export interface ICollaboratorEndpoints {
  removeCollaborator(
    props: IRemoveCollaboratorEndpointParams
  ): Promise<IEndpointResultBase>;

  getWorkspaceCollaborators(
    props: IGetWorkspaceCollaboratorsEndpointParams
  ): Promise<IGetWorkspaceCollaboratorsEndpointResult>;

  getCollaborator(
    props: IGetCollaboratorEndpointParams
  ): Promise<IGetCollaboratorEndpointResult>;

  updateCollaboratorPermissionGroups(
    props: IUpdateCollaboratorPermissionGroupsEndpointParams
  ): Promise<IUpdateCollaboratorPermissionGroupsEndpointResult>;
}
