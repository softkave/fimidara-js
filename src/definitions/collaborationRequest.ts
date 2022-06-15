import {IAgent} from './system';
import {IEndpointParamsBase, IEndpointResultBase} from './types';

export enum CollaborationRequestStatusinterface {
  Accepted = 'accepted',
  Declined = 'declined',
  Revoked = 'revoked',
  Pending = 'pending',
}

export interface ICollaborationRequestStatus {
  status: CollaborationRequestStatusinterface;
  date: string;
}

export enum CollaborationRequestEmailReason {
  RequestNotification = 'request-notification',
  RequestRevoked = 'request-revoked',
  RequestUpdated = 'request-updated',
}

export interface ICollaborationRequestSentEmailHistoryItem {
  date: string;
  reason: CollaborationRequestEmailReason;
}

export interface ICollaborationRequest {
  resourceId: string;
  recipientEmail: string;
  message: string;
  createdBy: IAgent;
  createdAt: string;
  expiresAt?: string;
  workspaceId: string;
  workspaceName: string;
  lastUpdatedAt?: string;
  lastUpdatedBy?: IAgent;
  readAt?: string;
  statusHistory: ICollaborationRequestStatus[];
  sentEmailHistory: ICollaborationRequestSentEmailHistoryItem[];
}

export interface ICollaborationRequestInput {
  recipientEmail: string;
  message: string;
  expires?: string;
}

export interface IUpdateCollaborationRequestInput {
  message?: string;
  expires?: string;
}

export interface IDeleteCollaborationRequestEndpointParams
  extends IEndpointParamsBase {
  requestId: string;
}

export interface IGetWorkspaceCollaborationRequestsEndpointParams
  extends IEndpointParamsBase {}

export interface IGetWorkspaceCollaborationRequestsEndpointResult
  extends IEndpointResultBase {
  requests: ICollaborationRequest[];
}

export interface IRevokeCollaborationRequestEndpointParams
  extends IEndpointParamsBase {
  requestId: string;
}

export interface IRevokeCollaborationRequestEndpointResult
  extends IEndpointResultBase {
  request: ICollaborationRequest;
}

export interface ISendCollaborationRequestEndpointParams
  extends IEndpointParamsBase {
  request: ICollaborationRequestInput;
}

export interface ISendCollaborationRequestEndpointResult
  extends IEndpointResultBase {
  request: ICollaborationRequest;
}

export interface IUpdateCollaborationRequestEndpointParams
  extends IEndpointParamsBase {
  requestId: string;
  request: IUpdateCollaborationRequestInput;
}

export interface IUpdateCollaborationRequestEndpointResult
  extends IEndpointResultBase {
  request: ICollaborationRequest;
}

export interface IGetCollaborationRequestEndpointParams
  extends IEndpointParamsBase {
  requestId: string;
}

export interface IGetCollaborationRequestEndpointResult
  extends IEndpointResultBase {
  request: ICollaborationRequest;
}

export interface ICollaborationRequestEndpoints {
  deleteRequest(
    props: IDeleteCollaborationRequestEndpointParams
  ): Promise<IEndpointResultBase>;

  getWorkspaceRequests(
    props: IGetWorkspaceCollaborationRequestsEndpointParams
  ): Promise<IGetWorkspaceCollaborationRequestsEndpointResult>;

  sendRequest(
    props: ISendCollaborationRequestEndpointParams
  ): Promise<ISendCollaborationRequestEndpointResult>;

  updateRequest(
    props: IUpdateCollaborationRequestEndpointParams
  ): Promise<IUpdateCollaborationRequestEndpointResult>;

  revokeRequest(
    props: IRevokeCollaborationRequestEndpointParams
  ): Promise<IRevokeCollaborationRequestEndpointResult>;

  getRequest(
    props: IGetCollaborationRequestEndpointParams
  ): Promise<IGetCollaborationRequestEndpointResult>;
}
