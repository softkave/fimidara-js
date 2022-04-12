import {
  ICollaborationRequest,
  ICollaborationRequestInput,
  IUpdateCollaborationRequestInput,
} from '../definitions/collaborationRequest';
import {
  GetEndpointResult,
  IEndpointParamsBase,
  IEndpointResultBase,
} from '../types';
import {EndpointsBase, invokeEndpointWithAuth} from '../utils';

const baseURL = '/requests';
const deleteRequestURL = `${baseURL}/deleteRequest`;
const getWorkspaceRequestsURL = `${baseURL}/getWorkspaceRequests`;
const sendRequestURL = `${baseURL}/sendRequest`;
const updateRequestURL = `${baseURL}/updateRequest`;
const revokeRequestURL = `${baseURL}/revokeRequest`;
const getRequestURL = `${baseURL}/getRequest`;

export interface IDeleteCollaborationRequestEndpointParams
  extends IEndpointParamsBase {
  requestId: string;
}

export interface IGetWorkspaceCollaborationRequestsEndpointParams
  extends IEndpointParamsBase {
  workspaceId: string;
}

export type IGetWorkspaceCollaborationRequestsEndpointResult =
  GetEndpointResult<{
    requests: ICollaborationRequest[];
  }>;

export interface IRevokeCollaborationRequestEndpointParams
  extends IEndpointParamsBase {
  requestId: string;
}

export type IRevokeCollaborationRequestEndpointResult = GetEndpointResult<{
  request: ICollaborationRequest;
}>;

export interface ISendCollaborationRequestEndpointParams
  extends IEndpointParamsBase {
  workspaceId: string;
  request: ICollaborationRequestInput;
}

export type ISendCollaborationRequestEndpointResult = GetEndpointResult<{
  request: ICollaborationRequest;
}>;

export interface IUpdateCollaborationRequestEndpointParams
  extends IEndpointParamsBase {
  requestId: string;
  request: IUpdateCollaborationRequestInput;
}

export type IUpdateCollaborationRequestEndpointResult = GetEndpointResult<{
  request: ICollaborationRequest;
}>;

export interface IGetCollaborationRequestEndpointParams
  extends IEndpointParamsBase {
  requestId: string;
}

export type IGetCollaborationRequestEndpointResult = GetEndpointResult<{
  request: ICollaborationRequest;
}>;

export default class CollaborationRequestEndpoints extends EndpointsBase {
  async deleteRequest(props: IDeleteCollaborationRequestEndpointParams) {
    return invokeEndpointWithAuth<IEndpointResultBase>({
      path: deleteRequestURL,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async getWorkspaceRequests(
    props: IGetWorkspaceCollaborationRequestsEndpointParams
  ) {
    return invokeEndpointWithAuth<IGetWorkspaceCollaborationRequestsEndpointResult>(
      {
        path: getWorkspaceRequestsURL,
        data: props,
        token: this.getAuthToken(props),
      }
    );
  }

  async sendRequest(props: ISendCollaborationRequestEndpointParams) {
    return await invokeEndpointWithAuth<ISendCollaborationRequestEndpointResult>(
      {
        path: sendRequestURL,
        data: props,
        token: this.getAuthToken(props),
      }
    );
  }

  async updateRequest(props: IUpdateCollaborationRequestEndpointParams) {
    return await invokeEndpointWithAuth<IUpdateCollaborationRequestEndpointResult>(
      {
        path: updateRequestURL,
        data: props,
        token: this.getAuthToken(props),
      }
    );
  }

  async revokeRequest(props: IRevokeCollaborationRequestEndpointParams) {
    return await invokeEndpointWithAuth<IRevokeCollaborationRequestEndpointResult>(
      {
        path: revokeRequestURL,
        data: props,
        token: this.getAuthToken(props),
      }
    );
  }

  async getRequest(props: IGetCollaborationRequestEndpointParams) {
    return await invokeEndpointWithAuth<IGetCollaborationRequestEndpointResult>(
      {
        path: getRequestURL,
        data: props,
        token: this.getAuthToken(props),
      }
    );
  }
}
