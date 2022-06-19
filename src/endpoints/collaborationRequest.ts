import {
  ICollaborationRequestEndpoints,
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

const basePath = '/requests';
const deleteRequestPath = `${basePath}/deleteRequest`;
const getWorkspaceRequestsPath = `${basePath}/getWorkspaceRequests`;
const sendRequestPath = `${basePath}/sendRequest`;
const updateRequestPath = `${basePath}/updateRequest`;
const revokeRequestPath = `${basePath}/revokeRequest`;
const getRequestPath = `${basePath}/getRequest`;

export default class CollaborationRequestEndpoints
  extends EndpointsBase
  implements ICollaborationRequestEndpoints
{
  async deleteRequest(props: IDeleteCollaborationRequestEndpointParams) {
    return invokeEndpointWithAuth<IEndpointResultBase>({
      path: deleteRequestPath,
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
        path: getWorkspaceRequestsPath,
        data: props,
        token: this.getAuthToken(props),
      }
    );
  }

  async sendRequest(props: ISendCollaborationRequestEndpointParams) {
    return await invokeEndpointWithAuth<ISendCollaborationRequestEndpointResult>(
      {
        path: sendRequestPath,
        data: props,
        token: this.getAuthToken(props),
      }
    );
  }

  async updateRequest(props: IUpdateCollaborationRequestEndpointParams) {
    return await invokeEndpointWithAuth<IUpdateCollaborationRequestEndpointResult>(
      {
        path: updateRequestPath,
        data: props,
        token: this.getAuthToken(props),
      }
    );
  }

  async revokeRequest(props: IRevokeCollaborationRequestEndpointParams) {
    return await invokeEndpointWithAuth<IRevokeCollaborationRequestEndpointResult>(
      {
        path: revokeRequestPath,
        data: props,
        token: this.getAuthToken(props),
      }
    );
  }

  async getRequest(props: IGetCollaborationRequestEndpointParams) {
    return await invokeEndpointWithAuth<IGetCollaborationRequestEndpointResult>(
      {
        path: getRequestPath,
        data: props,
        token: this.getAuthToken(props),
      }
    );
  }
}
