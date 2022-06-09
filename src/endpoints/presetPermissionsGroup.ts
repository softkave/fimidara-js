import {
  INewPresetPermissionsGroupInput,
  IPresetPermissionsGroup,
  IUpdatePresetPermissionsGroupInput,
} from '../definitions/presets';
import {
  GetEndpointResult,
  IEndpointParamsBase,
  IEndpointResultBase,
} from '../types';
import {EndpointsBase, invokeEndpointWithAuth} from '../utils';

const baseURL = '/presetPermissionsGroups';
const addPresetURL = `${baseURL}/addPreset`;
const getWorkspacePresetsURL = `${baseURL}/getWorkspacePresets`;
const getPresetURL = `${baseURL}/getPreset`;
const deletePresetURL = `${baseURL}/deletePreset`;
const updatePresetURL = `${baseURL}/updatePreset`;

export interface IAddPresetPermissionsGroupEndpointParams
  extends IEndpointParamsBase {
  // workspaceId: string;
  preset: INewPresetPermissionsGroupInput;
}

export type IAddPresetPermissionsGroupEndpointResult = GetEndpointResult<{
  preset: IPresetPermissionsGroup;
}>;

export interface IDeletePresetPermissionsGroupEndpointParams
  extends IEndpointParamsBase {
  presetId: string;
}

export interface IGetWorkspacePresetPermissionsGroupEndpointParams
  extends IEndpointParamsBase {
  // workspaceId: string;
}

export type IGetWorkspacePresetPermissionsGroupEndpointResult =
  GetEndpointResult<{
    presets: IPresetPermissionsGroup[];
  }>;

export interface IGetPresetPermissionsGroupEndpointParams
  extends IEndpointParamsBase {
  presetId: string;
}

export type IGetPresetPermissionsGroupEndpointResult = GetEndpointResult<{
  preset: IPresetPermissionsGroup;
}>;

export interface IUpdatePresetPermissionsGroupEndpointParams
  extends IEndpointParamsBase {
  presetId: string;
  preset: IUpdatePresetPermissionsGroupInput;
}

export type IUpdatePresetPermissionsGroupEndpointResult = GetEndpointResult<{
  preset: IPresetPermissionsGroup;
}>;

export default class PresetPermissionsGroupEndpoints extends EndpointsBase {
  async addPreset(props: IAddPresetPermissionsGroupEndpointParams) {
    return invokeEndpointWithAuth<IAddPresetPermissionsGroupEndpointResult>({
      path: addPresetURL,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async getWorkspacePresets(
    props: IGetWorkspacePresetPermissionsGroupEndpointParams
  ) {
    return await invokeEndpointWithAuth<IGetWorkspacePresetPermissionsGroupEndpointResult>(
      {
        path: getWorkspacePresetsURL,
        data: props,
        token: this.getAuthToken(props),
      }
    );
  }

  async getPreset(props: IGetPresetPermissionsGroupEndpointParams) {
    return await invokeEndpointWithAuth<IGetPresetPermissionsGroupEndpointResult>(
      {
        path: getPresetURL,
        data: props,
        token: this.getAuthToken(props),
      }
    );
  }

  async deletePreset(props: IDeletePresetPermissionsGroupEndpointParams) {
    return invokeEndpointWithAuth<IEndpointResultBase>({
      path: deletePresetURL,
      data: props,
      token: this.getAuthToken(props),
      method: 'DELETE',
    });
  }

  async updatePreset(props: IUpdatePresetPermissionsGroupEndpointParams) {
    return await invokeEndpointWithAuth<IUpdatePresetPermissionsGroupEndpointResult>(
      {
        path: updatePresetURL,
        data: props,
        token: this.getAuthToken(props),
      }
    );
  }
}
