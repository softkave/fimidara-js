import {
  IClientAssignedToken,
  INewClientAssignedTokenInput,
} from "../definitions/clientAssignedToken";
import {
  GetEndpointResult,
  IEndpointParamsBase,
  IEndpointResultBase,
} from "../types";
import { EndpointsBase, invokeEndpointWithAuth } from "../utils";

const baseURL = "/clientAssignedTokens";
const addTokenURL = `${baseURL}/addToken`;
const getOrganizationTokensURL = `${baseURL}/getOrganizationTokens`;
const getTokenURL = `${baseURL}/getToken`;
const deleteTokenURL = `${baseURL}/deleteToken`;
const updateTokenURL = `${baseURL}/updateToken`;

export interface IAddClientAssignedTokenEndpointParams
  extends IEndpointParamsBase {
  organizationId?: string;
  token: INewClientAssignedTokenInput;
}

export type IAddClientAssignedTokenEndpointResult = GetEndpointResult<{
  token: IClientAssignedToken;
  tokenStr: string;
}>;

export interface IDeleteClientAssignedTokenEndpointParams
  extends IEndpointParamsBase {
  tokenId?: string;
  onReferenced?: boolean;
}

export interface IGetOrganizationClientAssignedTokensEndpointParams
  extends IEndpointParamsBase {
  organizationId: string;
}

export type IGetOrganizationClientAssignedTokensEndpointResult =
  GetEndpointResult<{
    tokens: IClientAssignedToken[];
  }>;

export interface IGetClientAssignedTokenEndpointParams
  extends IEndpointParamsBase {
  tokenId?: string;
  onReferenced?: boolean;
}

export type IGetClientAssignedTokenEndpointResult = GetEndpointResult<{
  token: IClientAssignedToken;
}>;

export interface IUpdateClientAssignedTokenEndpointParams
  extends IEndpointParamsBase {
  tokenId?: string;
  onReferenced?: boolean;
  token: Partial<INewClientAssignedTokenInput>;
}

export type IUpdateClientAssignedTokenEndpointResult = GetEndpointResult<{
  token: IClientAssignedToken;
}>;

export default class ClientAssignedTokenEndpoints extends EndpointsBase {
  async addToken(props: IAddClientAssignedTokenEndpointParams) {
    return invokeEndpointWithAuth<IAddClientAssignedTokenEndpointResult>({
      path: addTokenURL,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async getOrganizationTokens(
    props: IGetOrganizationClientAssignedTokensEndpointParams
  ) {
    return await invokeEndpointWithAuth<IGetOrganizationClientAssignedTokensEndpointResult>(
      {
        path: getOrganizationTokensURL,
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
