import { IConfig } from "../config";
import { EndpointsBase } from "../utils";
import ClientAssignedTokenEndpoints from "./clientAssignedToken";
import ResourceEndpoints from "./resources";
import CollaborationRequestEndpoints from "./collaborationRequest";
import CollaboratorEndpoints from "./collaborators";
import FileEndpoints from "./file";
import FolderEndpoints from "./folder";
import OrganizationEndpoints from "./organization";
import PermissionItemEndpoints from "./permissionItem";
import PresetPermissionsGroupEndpoints from "./presetPermissionsGroup";
import ProgramAccessTokenEndpoints from "./programAccessToken";

export default class Endpoints extends EndpointsBase {
  clientTokens: ClientAssignedTokenEndpoints;
  requests: CollaborationRequestEndpoints;
  collaborators: CollaboratorEndpoints;
  files: FileEndpoints;
  folders: FolderEndpoints;
  organization: OrganizationEndpoints;
  permissionItems: PermissionItemEndpoints;
  presets: PresetPermissionsGroupEndpoints;
  programTokens: ProgramAccessTokenEndpoints;
  resources: ResourceEndpoints;

  constructor(config?: IConfig) {
    super(config);
    this.clientTokens = new ClientAssignedTokenEndpoints(config);
    this.requests = new CollaborationRequestEndpoints(config);
    this.collaborators = new CollaboratorEndpoints(config);
    this.files = new FileEndpoints(config);
    this.folders = new FolderEndpoints(config);
    this.organization = new OrganizationEndpoints(config);
    this.permissionItems = new PermissionItemEndpoints(config);
    this.presets = new PresetPermissionsGroupEndpoints(config);
    this.programTokens = new ProgramAccessTokenEndpoints(config);
    this.resources = new ResourceEndpoints(config);
  }
}
