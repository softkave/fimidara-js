import {
  IAssignedPermissionGroup,
  IPermissionGroupInput,
} from './permissionGroups';
import {IAgent} from './system';
import {IEndpointParamsBase, IEndpointResultBase} from './types';

export interface IClientAssignedToken {
  resourceId: string;
  providedResourceId?: string;
  createdAt: string;
  createdBy: IAgent;
  lastUpdatedBy?: IAgent;
  lastUpdatedAt?: string;
  workspaceId: string;
  version: number;
  permissionGroups: IAssignedPermissionGroup[];
  issuedAt: string;
  expires?: number;
  tokenStr: string;
}

export interface INewClientAssignedTokenInput {
  providedResourceId?: string;
  name?: string;
  description?: string;
  expires?: string;
  permissionGroups?: IPermissionGroupInput[];
}

export interface IAddClientAssignedTokenEndpointParams
  extends IEndpointParamsBase {
  token: INewClientAssignedTokenInput;
}

export interface IAddClientAssignedTokenEndpointResult
  extends IEndpointResultBase {
  token: IClientAssignedToken;
}

export interface IDeleteClientAssignedTokenEndpointParams
  extends IEndpointParamsBase {
  tokenId?: string;
  onReferenced?: boolean;
}

export interface IGetWorkspaceClientAssignedTokensEndpointParams
  extends IEndpointParamsBase {}

export interface IGetWorkspaceClientAssignedTokensEndpointResult
  extends IEndpointResultBase {
  tokens: IClientAssignedToken[];
}

export interface IGetClientAssignedTokenEndpointParams
  extends IEndpointParamsBase {
  tokenId?: string;
  onReferenced?: boolean;
}

export interface IGetClientAssignedTokenEndpointResult
  extends IEndpointResultBase {
  token: IClientAssignedToken;
}

export interface IUpdateClientAssignedTokenEndpointParams
  extends IEndpointParamsBase {
  tokenId?: string;
  onReferenced?: boolean;
  token: Partial<INewClientAssignedTokenInput>;
}

export interface IUpdateClientAssignedTokenEndpointResult
  extends IEndpointResultBase {
  token: IClientAssignedToken;
}

export interface IClientAssignedTokenEndpoints {
  addToken(
    props: IUpdateClientAssignedTokenEndpointParams
  ): Promise<IAddClientAssignedTokenEndpointResult>;

  getWorkspaceTokens(
    props: IGetWorkspaceClientAssignedTokensEndpointParams
  ): Promise<IGetWorkspaceClientAssignedTokensEndpointResult>;

  getToken(
    props: IGetClientAssignedTokenEndpointParams
  ): Promise<IGetClientAssignedTokenEndpointResult>;

  deleteToken(
    props: IDeleteClientAssignedTokenEndpointParams
  ): Promise<IEndpointResultBase>;

  updateToken(
    props: IUpdateClientAssignedTokenEndpointParams
  ): Promise<IUpdateClientAssignedTokenEndpointResult>;
}
