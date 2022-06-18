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

const baseURL = '/programAccessTokens';
const addTokenURL = `${baseURL}/addToken`;
const getWorkspaceTokensURL = `${baseURL}/getWorkspaceTokens`;
const getTokenURL = `${baseURL}/getToken`;
const deleteTokenURL = `${baseURL}/deleteToken`;
const updateTokenURL = `${baseURL}/updateToken`;

export default class ProgramAccessTokenEndpoints
  extends EndpointsBase
  implements IProgramAccessTokenEndpoints
{
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
