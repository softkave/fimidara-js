import {IClientAssignedTokenEndpoints} from './clientAssignedToken';
import {IFileEndpoints} from './file';
import {IFolderEndpoints} from './folder';
import {IPermissionGroupEndpoints} from './permissionGroups';
import {IPermissionItemEndpoints} from './permissionItem';
import {IProgramAccessTokenEndpoints} from './programAccessToken';
import {IWorkspaceEndpoints} from './workspace';

export interface IEndpoints {
  clientTokens: IClientAssignedTokenEndpoints;
  files: IFileEndpoints;
  folders: IFolderEndpoints;
  workspace: IWorkspaceEndpoints;
  permissionItems: IPermissionItemEndpoints;
  permissionGroups: IPermissionGroupEndpoints;
  programTokens: IProgramAccessTokenEndpoints;
}
