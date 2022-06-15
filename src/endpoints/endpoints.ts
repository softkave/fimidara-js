import {IConfig} from '../config';
import {EndpointsBase} from '../utils';
import ClientAssignedTokenEndpoints from './clientAssignedToken';
import FileEndpoints from './file';
import FolderEndpoints from './folder';
import PermissionGroupEndpoints from './permissionGroups';
import PermissionItemEndpoints from './permissionItem';
import ProgramAccessTokenEndpoints from './programAccessToken';
import WorkspaceEndpoints from './workspace';

export interface IEndpoints {
  clientTokens: ClientAssignedTokenEndpoints;
  files: FileEndpoints;
  folders: FolderEndpoints;
  workspace: WorkspaceEndpoints;
  permissionItems: PermissionItemEndpoints;
  permissionGroups: PermissionGroupEndpoints;
  programTokens: ProgramAccessTokenEndpoints;
}

export default class Endpoints extends EndpointsBase implements IEndpoints {
  clientTokens: ClientAssignedTokenEndpoints;
  files: FileEndpoints;
  folders: FolderEndpoints;
  workspace: WorkspaceEndpoints;
  permissionItems: PermissionItemEndpoints;
  permissionGroups: PermissionGroupEndpoints;
  programTokens: ProgramAccessTokenEndpoints;

  constructor(config?: IConfig) {
    super(config);
    this.clientTokens = new ClientAssignedTokenEndpoints(config);
    this.files = new FileEndpoints(config);
    this.folders = new FolderEndpoints(config);
    this.workspace = new WorkspaceEndpoints(config);
    this.permissionItems = new PermissionItemEndpoints(config);
    this.permissionGroups = new PermissionGroupEndpoints(config);
    this.programTokens = new ProgramAccessTokenEndpoints(config);
  }
}
