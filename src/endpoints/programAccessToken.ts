import {
  IAddProgramAccessTokenEndpointParams,
  IAddProgramAccessTokenEndpointResult,
  IDeleteProgramAccessTokenEndpointParams,
  IGetProgramAccessTokenEndpointParams,
  IGetProgramAccessTokenEndpointResult,
  IGetWorkspaceProgramAccessTokenEndpointParams,
  IGetWorkspaceProgramAccessTokenEndpointResult,
  IProgramAccessTokenEndpoints,
  IUpdateProgramAccessTokenEndpointParams,
  IUpdateProgramAccessTokenEndpointResult,
} from '../definitions';
import {IEndpointResultBase} from '../definitions/types';
import {EndpointsBase, invokeEndpointWithAuth} from '../utils';

const basePath = '/programAccessTokens';
const addTokenPath = `${basePath}/addToken`;
const getWorkspaceTokensPath = `${basePath}/getWorkspaceTokens`;
const getTokenPath = `${basePath}/getToken`;
const deleteTokenPath = `${basePath}/deleteToken`;
const updateTokenPath = `${basePath}/updateToken`;

export default class ProgramAccessTokenEndpoints
  extends EndpointsBase
  implements IProgramAccessTokenEndpoints
{
  async addToken(props: IAddProgramAccessTokenEndpointParams) {
    return invokeEndpointWithAuth<IAddProgramAccessTokenEndpointResult>({
      path: addTokenPath,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async getWorkspaceTokens(
    props: IGetWorkspaceProgramAccessTokenEndpointParams
  ) {
    return await invokeEndpointWithAuth<IGetWorkspaceProgramAccessTokenEndpointResult>(
      {
        path: getWorkspaceTokensPath,
        data: props,
        token: this.getAuthToken(props),
      }
    );
  }

  async getToken(props: IGetProgramAccessTokenEndpointParams) {
    return await invokeEndpointWithAuth<IGetProgramAccessTokenEndpointResult>({
      path: getTokenPath,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async deleteToken(props: IDeleteProgramAccessTokenEndpointParams) {
    return invokeEndpointWithAuth<IEndpointResultBase>({
      path: deleteTokenPath,
      data: props,
      token: this.getAuthToken(props),
      method: 'DELETE',
    });
  }

  async updateToken(props: IUpdateProgramAccessTokenEndpointParams) {
    return await invokeEndpointWithAuth<IUpdateProgramAccessTokenEndpointResult>(
      {
        path: updateTokenPath,
        data: props,
        token: this.getAuthToken(props),
      }
    );
  }
}
