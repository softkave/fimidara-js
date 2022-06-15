import {
  IGetResourcesEndpointParams,
  IGetResourcesEndpointResult,
} from '../definitions/resource';
import {EndpointsBase, invokeEndpointWithAuth} from '../utils';

const baseURL = '/resources';
const getResourcesURL = `${baseURL}/getResources`;

export default class ResourceEndpoints extends EndpointsBase {
  async getResources(props: IGetResourcesEndpointParams) {
    return await invokeEndpointWithAuth<IGetResourcesEndpointResult>({
      path: getResourcesURL,
      data: props,
      token: this.getAuthToken(props),
    });
  }
}
