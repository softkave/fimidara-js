import {
  IOrganization,
  IUpdateOrganizationInput,
} from "../definitions/organization";
import { GetEndpointResult, IEndpointParamsBase } from "../types";
import { EndpointsBase, invokeEndpointWithAuth } from "../utils";

const baseURL = "/organizations";
const getOrganizationURL = `${baseURL}/getOrganization`;
const updateOrganizationURL = `${baseURL}/updateOrganization`;

export interface IGetOrganizationEndpointParams extends IEndpointParamsBase {
  organizationId: string;
}

export type IGetOrganizationEndpointResult = GetEndpointResult<{
  organization: IOrganization;
}>;

export interface IUpdateOrganizationEndpointParams extends IEndpointParamsBase {
  organizationId: string;
  organization: IUpdateOrganizationInput;
}

export type IUpdateOrganizationEndpointResult = GetEndpointResult<{
  organization: IOrganization;
}>;

export default class OrganizationEndpoints extends EndpointsBase {
  async getOrganization(props: IGetOrganizationEndpointParams) {
    return await invokeEndpointWithAuth<IGetOrganizationEndpointResult>({
      path: getOrganizationURL,
      data: props,
      token: this.getAuthToken(props),
    });
  }

  async updateOrganization(props: IUpdateOrganizationEndpointParams) {
    return await invokeEndpointWithAuth<IUpdateOrganizationEndpointResult>({
      path: updateOrganizationURL,
      data: props,
      token: this.getAuthToken(props),
    });
  }
}
