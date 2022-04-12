import {IPresetInput} from '../definitions/presets';
import {ICollaborator} from '../definitions/user';
import {
  GetEndpointResult,
  IEndpointParamsBase,
  IEndpointResultBase,
} from '../types';
import {EndpointsBase, invokeEndpointWithAuth} from '../utils';

const baseURL = '/collaborators';
const removeCollaboratorURL = `${baseURL}/removeCollaborator`;
const getWorkspaceCollaboratorsURL = `${baseURL}/getWorkspaceCollaborators`;
const getCollaboratorURL = `${baseURL}/getCollaborator`;
const updateCollaboratorPresetsURL = `${baseURL}/updateCollaboratorPresets`;

export interface IGetCollaboratorEndpointParams extends IEndpointParamsBase {
  workspaceId: string;
  collaboratorId: string;
}

export type IGetCollaboratorEndpointResult = GetEndpointResult<{
  collaborator: ICollaborator;
}>;

export interface IGetWorkspaceCollaboratorsEndpointParams
  extends IEndpointParamsBase {
  workspaceId: string;
}

export type IGetWorkspaceCollaboratorsEndpointResult = GetEndpointResult<{
  collaborators: ICollaborator[];
}>;

export interface IRemoveCollaboratorEndpointParams extends IEndpointParamsBase {
  workspaceId: string;
  collaboratorId: string;
}

export interface IUpdateCollaboratorPresetsEndpointParams
  extends IEndpointParamsBase {
  workspaceId: string;
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

  async getWorkspaceCollaborators(
    props: IGetWorkspaceCollaboratorsEndpointParams
  ) {
    return await invokeEndpointWithAuth<IGetWorkspaceCollaboratorsEndpointResult>(
      {
        path: getWorkspaceCollaboratorsURL,
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
