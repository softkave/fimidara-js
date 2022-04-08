import { IPresetInput } from "../definitions/presets";
import { ICollaborator } from "../definitions/user";
import {
  GetEndpointResult,
  IEndpointParamsBase,
  IEndpointResultBase,
} from "../types";
import { EndpointsBase, invokeEndpointWithAuth } from "../utils";

const baseURL = "/collaborators";
const removeCollaboratorURL = `${baseURL}/removeCollaborator`;
const getOrganizationCollaboratorsURL = `${baseURL}/getOrganizationCollaborators`;
const getCollaboratorURL = `${baseURL}/getCollaborator`;
const updateCollaboratorPresetsURL = `${baseURL}/updateCollaboratorPresets`;

export interface IGetCollaboratorEndpointParams extends IEndpointParamsBase {
  organizationId: string;
  collaboratorId: string;
}

export type IGetCollaboratorEndpointResult = GetEndpointResult<{
  collaborator: ICollaborator;
}>;

export interface IGetOrganizationCollaboratorsEndpointParams
  extends IEndpointParamsBase {
  organizationId: string;
}

export type IGetOrganizationCollaboratorsEndpointResult = GetEndpointResult<{
  collaborators: ICollaborator[];
}>;

export interface IRemoveCollaboratorEndpointParams extends IEndpointParamsBase {
  organizationId: string;
  collaboratorId: string;
}

export interface IUpdateCollaboratorPresetsEndpointParams
  extends IEndpointParamsBase {
  organizationId: string;
  collaboratorId: string;
  presets: IPresetInput[];
}

export type IUpdateCollaboratorPresetsEndpointResult = GetEndpointResult<{
  collaborator: ICollaborator;
}>;

export default class CollaboratorEndpoints extends EndpointsBase {
  async removeCollaborator(props: IRemoveCollaboratorEndpointParams) {
    return await invokeEndpointWithAuth<IEndpointResultBase>({
      path: removeCollaboratorURL,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async getOrganizationCollaborators(
    props: IGetOrganizationCollaboratorsEndpointParams
  ) {
    return await invokeEndpointWithAuth<IGetOrganizationCollaboratorsEndpointResult>(
      {
        path: getOrganizationCollaboratorsURL,
        data: props,
        token: this.getAuthToken(props),
      }
    );
  }

  async getCollaborator(props: IGetCollaboratorEndpointParams) {
    return invokeEndpointWithAuth<IGetCollaboratorEndpointResult>({
      path: getCollaboratorURL,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async updateCollaboratorPresets(
    props: IUpdateCollaboratorPresetsEndpointParams
  ) {
    return await invokeEndpointWithAuth<IUpdateCollaboratorPresetsEndpointResult>(
      {
        path: updateCollaboratorPresetsURL,
        data: props,
        token: this.getAuthToken(props),
      }
    );
  }
}
