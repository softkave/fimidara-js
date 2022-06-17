import {
  IAssignedPermissionGroup,
  IPermissionGroupInput,
} from './permissionGroups';
import {IAgent} from './system';
import {IEndpointParamsBase, IEndpointResultBase} from './types';

export interface IProgramAccessToken {
  resourceId: string;
  name: string;
  description?: string;
  createdAt: string;
  createdBy: IAgent;
  workspaceId: string;
  permissionGroups: IAssignedPermissionGroup[];
  lastUpdatedAt?: string;
  lastUpdatedBy?: IAgent;
  tokenStr: string;
}

export interface INewProgramAccessTokenInput {
  name: string;
  description?: string;
  permissionGroups?: IPermissionGroupInput[];
}

export type IUpdateProgramAccessTokenInput =
  Partial<INewProgramAccessTokenInput>;

export interface IAddProgramAccessTokenEndpointParams
  extends IEndpointParamsBase {
  token: INewProgramAccessTokenInput;
}

export interface IAddProgramAccessTokenEndpointResult
  extends IEndpointResultBase {
  token: IProgramAccessToken;
}

export interface IDeleteProgramAccessTokenEndpointParams
  extends IEndpointParamsBase {
  tokenId?: string;
  onReferenced?: boolean;
}

export interface IGetWorkspaceProgramAccessTokenEndpointParams
  extends IEndpointParamsBase {}

export interface IGetWorkspaceProgramAccessTokenEndpointResult
  extends IEndpointResultBase {
  tokens: IProgramAccessToken[];
}

export interface IGetProgramAccessTokenEndpointParams
  extends IEndpointParamsBase {
  tokenId: string;
}

export interface IGetProgramAccessTokenEndpointResult
  extends IEndpointResultBase {
  token: IProgramAccessToken;
}

export interface IUpdateProgramAccessTokenEndpointParams
  extends IEndpointParamsBase {
  tokenId?: string;
  onReferenced?: boolean;
  token: IUpdateProgramAccessTokenInput;
}

export interface IUpdateProgramAccessTokenEndpointResult
  extends IEndpointResultBase {
  token: IProgramAccessToken;
}

export interface IProgramAccessTokenEndpoints {
  addToken(
    props: IAddProgramAccessTokenEndpointParams
  ): Promise<IAddProgramAccessTokenEndpointResult>;
  getWorkspaceTokens(
    props: IGetWorkspaceProgramAccessTokenEndpointParams
  ): Promise<IGetWorkspaceProgramAccessTokenEndpointResult>;
  getToken(
    props: IGetProgramAccessTokenEndpointParams
  ): Promise<IGetProgramAccessTokenEndpointResult>;
  deleteToken(
    props: IDeleteProgramAccessTokenEndpointParams
  ): Promise<IEndpointResultBase>;
  updateToken(
    props: IUpdateProgramAccessTokenEndpointParams
  ): Promise<IUpdateProgramAccessTokenEndpointResult>;
}
