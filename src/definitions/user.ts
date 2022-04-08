import { IAssignedPresetPermissionsGroup } from "./presets";

export interface IUserOrganization {
  organizationId: string;
  joinedAt: string;
  presets: IAssignedPresetPermissionsGroup[];
}

export interface ICollaborator extends IUserOrganization {
  resourceId: string;
  firstName: string;
  lastName: string;
  email: string;
}
