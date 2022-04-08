import { IGetResourceInputItem, IResource } from "../definitions/resource";
import { GetEndpointResult, IEndpointParamsBase } from "../types";
import { EndpointsBase, invokeEndpointWithAuth } from "../utils";

const baseURL = "/resources";
const getResourcesURL = `${baseURL}/getResources`;

export interface IGetResourcesEndpointParams extends IEndpointParamsBase {
  organizationId: string;
  resources: Array<IGetResourceInputItem>;
}

export type IGetResourcesEndpointResult = GetEndpointResult<{
  resources: IResource[];
}>;

export default class ResourceEndpoints extends EndpointsBase {
  async getResources(props: IGetResourcesEndpointParams) {
    return await invokeEndpointWithAuth<IGetResourcesEndpointResult>({
      path: getResourcesURL,
      data: props,
      token: this.getAuthToken(props),
    });
  }
}
