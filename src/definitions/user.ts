import {IAssignedPresetPermissionsGroup} from './presets';

export interface IUserWorkspace {
  workspaceId: string;
  joinedAt: string;
  presets: IAssignedPresetPermissionsGroup[];
}

export interface ICollaborator extends IUserWorkspace {
  resourceId: string;
  firstName: string;
  lastName: string;
  email: string;
}
