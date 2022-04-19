import {
  INewProgramAccessTokenInput,
  IProgramAccessToken,
  IUpdateProgramAccessTokenInput,
} from '../definitions/programAccessToken';
import {
  GetEndpointResult,
  IEndpointParamsBase,
  IEndpointResultBase,
} from '../types';
import {EndpointsBase, invokeEndpointWithAuth} from '../utils';

const baseURL = '/programAccessTokens';
const addTokenURL = `${baseURL}/addToken`;
const getWorkspaceTokensURL = `${baseURL}/getWorkspaceTokens`;
const getTokenURL = `${baseURL}/getToken`;
const deleteTokenURL = `${baseURL}/deleteToken`;
const updateTokenURL = `${baseURL}/updateToken`;

export interface IAddProgramAccessTokenEndpointParams
  extends IEndpointParamsBase {
  workspaceId: string;
  token: INewProgramAccessTokenInput;
}

export type IAddProgramAccessTokenEndpointResult = GetEndpointResult<{
  token: IProgramAccessToken;
}>;

export interface IDeleteProgramAccessTokenEndpointParams
  extends IEndpointParamsBase {
  tokenId?: string;
  onReferenced?: boolean;
}

export interface IGetWorkspaceProgramAccessTokenEndpointParams
  extends IEndpointParamsBase {
  workspaceId: string;
}

export type IGetWorkspaceProgramAccessTokenEndpointResult = GetEndpointResult<{
  tokens: IProgramAccessToken[];
}>;

export interface IGetProgramAccessTokenEndpointParams
  extends IEndpointParamsBase {
  tokenId: string;
}

export type IGetProgramAccessTokenEndpointResult = GetEndpointResult<{
  token: IProgramAccessToken;
}>;

export interface IUpdateProgramAccessTokenEndpointParams
  extends IEndpointParamsBase {
  tokenId?: string;
  onReferenced?: boolean;
  token: IUpdateProgramAccessTokenInput;
}

export type IUpdateProgramAccessTokenEndpointResult = GetEndpointResult<{
  token: IProgramAccessToken;
}>;

export default class ProgramAccessTokenEndpoints extends EndpointsBase {
  async addToken(props: IAddProgramAccessTokenEndpointParams) {
    return invokeEndpointWithAuth<IAddProgramAccessTokenEndpointResult>({
      path: addTokenURL,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async getWorkspaceTokens(
    props: IGetWorkspaceProgramAccessTokenEndpointParams
  ) {
    return await invokeEndpointWithAuth<IGetWorkspaceProgramAccessTokenEndpointResult>(
      {
        path: getWorkspaceTokensURL,
        data: props,
        token: this.getAuthToken(props),
      }
    );
  }

  async getToken(props: IGetProgramAccessTokenEndpointParams) {
    return await invokeEndpointWithAuth<IGetProgramAccessTokenEndpointResult>({
      path: getTokenURL,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async deleteToken(props: IDeleteProgramAccessTokenEndpointParams) {
    return invokeEndpointWithAuth<IEndpointResultBase>({
      path: deleteTokenURL,
      data: props,
      token: this.getAuthToken(props),
      method: 'DELETE',
    });
  }

  async updateToken(props: IUpdateProgramAccessTokenEndpointParams) {
    return await invokeEndpointWithAuth<IUpdateProgramAccessTokenEndpointResult>(
      {
        path: updateTokenURL,
        data: props,
        token: this.getAuthToken(props),
      }
    );
  }
}
