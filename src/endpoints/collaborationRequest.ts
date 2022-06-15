import {
  IDeleteCollaborationRequestEndpointParams,
  IGetCollaborationRequestEndpointParams,
  IGetCollaborationRequestEndpointResult,
  IGetWorkspaceCollaborationRequestsEndpointParams,
  IGetWorkspaceCollaborationRequestsEndpointResult,
  IRevokeCollaborationRequestEndpointParams,
  IRevokeCollaborationRequestEndpointResult,
  ISendCollaborationRequestEndpointParams,
  ISendCollaborationRequestEndpointResult,
  IUpdateCollaborationRequestEndpointParams,
  IUpdateCollaborationRequestEndpointResult,
} from '../definitions/collaborationRequest';
import {IEndpointResultBase} from '../definitions/types';
import {EndpointsBase, invokeEndpointWithAuth} from '../utils';

const baseURL = '/requests';
const deleteRequestURL = `${baseURL}/deleteRequest`;
const getWorkspaceRequestsURL = `${baseURL}/getWorkspaceRequests`;
const sendRequestURL = `${baseURL}/sendRequest`;
const updateRequestURL = `${baseURL}/updateRequest`;
const revokeRequestURL = `${baseURL}/revokeRequest`;
const getRequestURL = `${baseURL}/getRequest`;

export default class CollaborationRequestEndpoints extends EndpointsBase {
  async deleteRequest(props: IDeleteCollaborationRequestEndpointParams) {
    return invokeEndpointWithAuth<IEndpointResultBase>({
      path: deleteRequestURL,
      data: props,
      token: this.getAuthToken(props),
      method: 'DELETE',
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
