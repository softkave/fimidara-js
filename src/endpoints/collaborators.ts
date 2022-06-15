import {
  IGetCollaboratorEndpointParams,
  IGetCollaboratorEndpointResult,
  IGetWorkspaceCollaboratorsEndpointParams,
  IGetWorkspaceCollaboratorsEndpointResult,
  IRemoveCollaboratorEndpointParams,
  IUpdateCollaboratorPermissionGroupsEndpointParams,
  IUpdateCollaboratorPermissionGroupsEndpointResult,
} from '../definitions/collaborator';
import {IEndpointResultBase} from '../definitions/types';
import {EndpointsBase, invokeEndpointWithAuth} from '../utils';

const baseURL = '/collaborators';
const removeCollaboratorURL = `${baseURL}/removeCollaborator`;
const getWorkspaceCollaboratorsURL = `${baseURL}/getWorkspaceCollaborators`;
const getCollaboratorURL = `${baseURL}/getCollaborator`;
const updateCollaboratorPermissionGroupsURL = `${baseURL}/updateCollaboratorPermissionGroups`;

export default class CollaboratorEndpoints extends EndpointsBase {
  async removeCollaborator(props: IRemoveCollaboratorEndpointParams) {
    return await invokeEndpointWithAuth<IEndpointResultBase>({
      path: removeCollaboratorURL,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async getWorkspaceCollaborators(
    props: IGetWorkspaceCollaboratorsEndpointParams
  ) {
    return await invokeEndpointWithAuth<IGetWorkspaceCollaboratorsEndpointResult>(
      {
        path: getWorkspaceCollaboratorsURL,
        data: props,
        token: this.getAuthToken(props),
      }
    );
  }

  async getCollaborator(props: IGetCollaboratorEndpointParams) {
    return invokeEndpointWithAuth<IGetCollaboratorEndpointResult>({
      path: getCollaboratorURL,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async updateCollaboratorPermissionGroups(
    props: IUpdateCollaboratorPermissionGroupsEndpointParams
  ) {
    return await invokeEndpointWithAuth<IUpdateCollaboratorPermissionGroupsEndpointResult>(
      {
        path: updateCollaboratorPermissionGroupsURL,
        data: props,
        token: this.getAuthToken(props),
      }
    );
  }
}
