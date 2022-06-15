import {AppResourceType} from './system';
import {IEndpointParamsBase, IEndpointResultBase} from './types';

export interface IResourceBase {
  resourceId: string;
}

export interface IResource<T extends IResourceBase = IResourceBase> {
  resourceId: string;
  resourceType: AppResourceType;
  resource: T;
}

export interface IGetResourceInputItem {
  resourceId: string;
  resourceType: AppResourceType;
}

export interface IGetResourcesEndpointParams extends IEndpointParamsBase {
  workspaceId: string;
  resources: Array<IGetResourceInputItem>;
}

export type IGetResourcesEndpointResult = IEndpointResultBase & {
  resources: IResource[];
};
