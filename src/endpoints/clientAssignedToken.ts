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

const baseURL = '/clientAssignedTokens';
const addTokenURL = `${baseURL}/addToken`;
const getWorkspaceTokensURL = `${baseURL}/getWorkspaceTokens`;
const getTokenURL = `${baseURL}/getToken`;
const deleteTokenURL = `${baseURL}/deleteToken`;
const updateTokenURL = `${baseURL}/updateToken`;

export default class ClientAssignedTokenEndpoints
  extends EndpointsBase
  implements IClientAssignedTokenEndpoints
{
  async addToken(props: IAddClientAssignedTokenEndpointParams) {
    return invokeEndpointWithAuth<IAddClientAssignedTokenEndpointResult>({
      path: addTokenURL,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async getWorkspaceTokens(
    props: IGetWorkspaceClientAssignedTokensEndpointParams
  ) {
    return await invokeEndpointWithAuth<IGetWorkspaceClientAssignedTokensEndpointResult>(
      {
        path: getWorkspaceTokensURL,
        data: props,
        token: this.getAuthToken(props),
      }
    );
  }

  async getToken(props: IGetClientAssignedTokenEndpointParams) {
    return await invokeEndpointWithAuth<IGetClientAssignedTokenEndpointResult>({
      path: getTokenURL,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async deleteToken(props: IDeleteClientAssignedTokenEndpointParams) {
    return invokeEndpointWithAuth<IEndpointResultBase>({
      path: deleteTokenURL,
      data: props,
      token: this.getAuthToken(props),
      method: 'DELETE',
    });
  }

  async updateToken(props: IUpdateClientAssignedTokenEndpointParams) {
    return await invokeEndpointWithAuth<IUpdateClientAssignedTokenEndpointResult>(
      {
        path: updateTokenURL,
        data: props,
        token: this.getAuthToken(props),
      }
    );
  }
}
