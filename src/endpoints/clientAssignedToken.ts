import {
  IAddClientAssignedTokenEndpointParams,
  IAddClientAssignedTokenEndpointResult,
  IClientAssignedTokenEndpoints,
  IDeleteClientAssignedTokenEndpointParams,
  IGetClientAssignedTokenEndpointParams,
  IGetClientAssignedTokenEndpointResult,
  IGetWorkspaceClientAssignedTokensEndpointParams,
  IGetWorkspaceClientAssignedTokensEndpointResult,
  IUpdateClientAssignedTokenEndpointParams,
  IUpdateClientAssignedTokenEndpointResult,
} from '../definitions';
import {IEndpointResultBase} from '../definitions/types';
import {EndpointsBase, invokeEndpointWithAuth} from '../utils';

const basePath = '/clientAssignedTokens';
const addTokenPath = `${basePath}/addToken`;
const getWorkspaceTokensPath = `${basePath}/getWorkspaceTokens`;
const getTokenPath = `${basePath}/getToken`;
const deleteTokenPath = `${basePath}/deleteToken`;
const updateTokenPath = `${basePath}/updateToken`;

export default class ClientAssignedTokenEndpoints
  extends EndpointsBase
  implements IClientAssignedTokenEndpoints
{
  async addToken(props: IAddClientAssignedTokenEndpointParams) {
    return invokeEndpointWithAuth<IAddClientAssignedTokenEndpointResult>({
      path: addTokenPath,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async getWorkspaceTokens(
    props: IGetWorkspaceClientAssignedTokensEndpointParams
  ) {
    return await invokeEndpointWithAuth<IGetWorkspaceClientAssignedTokensEndpointResult>(
      {
        path: getWorkspaceTokensPath,
        data: props,
        token: this.getAuthToken(props),
      }
    );
  }

  async getToken(props: IGetClientAssignedTokenEndpointParams) {
    return await invokeEndpointWithAuth<IGetClientAssignedTokenEndpointResult>({
      path: getTokenPath,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async deleteToken(props: IDeleteClientAssignedTokenEndpointParams) {
    return invokeEndpointWithAuth<IEndpointResultBase>({
      path: deleteTokenPath,
      data: props,
      token: this.getAuthToken(props),
      method: 'DELETE',
    });
  }

  async updateToken(props: IUpdateClientAssignedTokenEndpointParams) {
    return await invokeEndpointWithAuth<IUpdateClientAssignedTokenEndpointResult>(
      {
        path: updateTokenPath,
        data: props,
        token: this.getAuthToken(props),
      }
    );
  }
}
