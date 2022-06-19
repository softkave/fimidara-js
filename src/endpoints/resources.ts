import {
  IGetResourcesEndpointParams,
  IGetResourcesEndpointResult,
} from '../definitions/resource';
import {EndpointsBase, invokeEndpointWithAuth} from '../utils';

const basePath = '/resources';
const getResourcesPath = `${basePath}/getResources`;

export default class ResourceEndpoints extends EndpointsBase {
  async getResources(props: IGetResourcesEndpointParams) {
    return await invokeEndpointWithAuth<IGetResourcesEndpointResult>({
      path: getResourcesPath,
      data: props,
      token: this.getAuthToken(props),
    });
  }
}
