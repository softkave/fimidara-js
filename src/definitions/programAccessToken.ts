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

export type IAddProgramAccessTokenEndpointResult = IEndpointResultBase & {
  token: IProgramAccessToken;
};

export interface IDeleteProgramAccessTokenEndpointParams
  extends IEndpointParamsBase {
  tokenId?: string;
  onReferenced?: boolean;
}

export interface IGetWorkspaceProgramAccessTokenEndpointParams
  extends IEndpointParamsBase {}

export type IGetWorkspaceProgramAccessTokenEndpointResult =
  IEndpointResultBase & {
    tokens: IProgramAccessToken[];
  };

export interface IGetProgramAccessTokenEndpointParams
  extends IEndpointParamsBase {
  tokenId: string;
}

export type IGetProgramAccessTokenEndpointResult = IEndpointResultBase & {
  token: IProgramAccessToken;
};

export interface IUpdateProgramAccessTokenEndpointParams
  extends IEndpointParamsBase {
  tokenId?: string;
  onReferenced?: boolean;
  token: IUpdateProgramAccessTokenInput;
}

export type IUpdateProgramAccessTokenEndpointResult = IEndpointResultBase & {
  token: IProgramAccessToken;
};
