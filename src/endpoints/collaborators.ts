import {
  ICollaboratorEndpoints,
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

const basePath = '/collaborators';
const removeCollaboratorPath = `${basePath}/removeCollaborator`;
const getWorkspaceCollaboratorsPath = `${basePath}/getWorkspaceCollaborators`;
const getCollaboratorPath = `${basePath}/getCollaborator`;
const updateCollaboratorPermissionGroupsPath = `${basePath}/updateCollaboratorPermissionGroups`;

export default class CollaboratorEndpoints
  extends EndpointsBase
  implements ICollaboratorEndpoints
{
  async removeCollaborator(props: IRemoveCollaboratorEndpointParams) {
    return await invokeEndpointWithAuth<IEndpointResultBase>({
      path: removeCollaboratorPath,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async getWorkspaceCollaborators(
    props: IGetWorkspaceCollaboratorsEndpointParams
  ) {
    return await invokeEndpointWithAuth<IGetWorkspaceCollaboratorsEndpointResult>(
      {
        path: getWorkspaceCollaboratorsPath,
        data: props,
        token: this.getAuthToken(props),
      }
    );
  }

  async getCollaborator(props: IGetCollaboratorEndpointParams) {
    return invokeEndpointWithAuth<IGetCollaboratorEndpointResult>({
      path: getCollaboratorPath,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async updateCollaboratorPermissionGroups(
    props: IUpdateCollaboratorPermissionGroupsEndpointParams
  ) {
    return await invokeEndpointWithAuth<IUpdateCollaboratorPermissionGroupsEndpointResult>(
      {
        path: updateCollaboratorPermissionGroupsPath,
        data: props,
        token: this.getAuthToken(props),
      }
    );
  }
}
