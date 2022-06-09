import {IConfig} from '../config';
import {EndpointsBase} from '../utils';
import ClientAssignedTokenEndpoints from './clientAssignedToken';
import FileEndpoints from './file';
import FolderEndpoints from './folder';
import WorkspaceEndpoints from './workspace';
import PermissionItemEndpoints from './permissionItem';
import PresetPermissionsGroupEndpoints from './presetPermissionsGroup';
import ProgramAccessTokenEndpoints from './programAccessToken';

export default class Endpoints extends EndpointsBase {
  clientTokens: ClientAssignedTokenEndpoints;
  files: FileEndpoints;
  folders: FolderEndpoints;
  workspace: WorkspaceEndpoints;
  permissionItems: PermissionItemEndpoints;
  presets: PresetPermissionsGroupEndpoints;
  programTokens: ProgramAccessTokenEndpoints;

  constructor(config?: IConfig) {
    super(config);
    this.clientTokens = new ClientAssignedTokenEndpoints(config);
    this.files = new FileEndpoints(config);
    this.folders = new FolderEndpoints(config);
    this.workspace = new WorkspaceEndpoints(config);
    this.permissionItems = new PermissionItemEndpoints(config);
    this.presets = new PresetPermissionsGroupEndpoints(config);
    this.programTokens = new ProgramAccessTokenEndpoints(config);
  }
}
