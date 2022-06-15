import {AppResourceType, BasicCRUDActions, IAgent} from './system';
import {IEndpointParamsBase, IEndpointResultBase} from './types';

export enum PermissionItemAppliesTo {
  Owner = 'owner',
  OwnerAndChildren = 'owner-and-children',
  Children = 'children',
}

export interface IPermissionItem {
  resourceId: string;
  workspaceId: string;
  createdAt: string;
  createdBy: IAgent;
  permissionOwnerId: string;
  permissionOwnerType: AppResourceType;
  permissionEntityId: string;
  permissionEntityType: AppResourceType;
  itemResourceId?: string;
  itemResourceType: AppResourceType;
  action: BasicCRUDActions;
  grantAccess: boolean;
  appliesTo: PermissionItemAppliesTo;
}

export interface INewPermissionItemInput {
  permissionEntityId: string;
  permissionEntityType: AppResourceType;
  action: BasicCRUDActions;
  permissionOwnerId: string;
  permissionOwnerType: AppResourceType;
  itemResourceId?: string;
  itemResourceType: AppResourceType;
  grantAccess: boolean;
  appliesTo: PermissionItemAppliesTo;
}

export interface IAddPermissionItemsEndpointParams extends IEndpointParamsBase {
  items: INewPermissionItemInput[];
}

export interface IAddPermissionItemsEndpointResult extends IEndpointResultBase {
  items: IPermissionItem[];
}

export interface IDeletePermissionItemsByIdEndpointParams
  extends IEndpointParamsBase {
  itemIds: string[];
}

export interface IGetEntityPermissionItemsEndpointParams
  extends IEndpointParamsBase {
  permissionEntityId: string;
  permissionEntityType: AppResourceType;
}

export interface IGetEntityPermissionItemsEndpointResult
  extends IEndpointResultBase {
  items: IPermissionItem[];
}

export interface IGetResourcePermissionItemsEndpointParams
  extends IEndpointParamsBase {
  itemResourceId?: string;
  itemResourceType: AppResourceType;
  permissionOwnerId?: string;
  permissionOwnerType?: AppResourceType;
}

export interface IGetResourcePermissionItemsEndpointResult
  extends IEndpointResultBase {
  items: IPermissionItem[];
}

export interface INewPermissionItemInputByEntity {
  permissionOwnerId: string;
  permissionOwnerType: AppResourceType;
  itemResourceId?: string;
  itemResourceType: AppResourceType;
  action: BasicCRUDActions;
  grantAccess: boolean;
  appliesTo: PermissionItemAppliesTo;
}

export interface IReplacePermissionItemsByEntityEndpointParams
  extends IEndpointParamsBase {
  // workspaceId?: string;
  permissionEntityId: string;
  permissionEntityType: AppResourceType;
  items: INewPermissionItemInputByEntity[];
}

export interface IReplacePermissionItemsByEntityEndpointResult {
  items: IPermissionItem[];
}

export function makePermissionItemInputWithActions<T>(
  item: Omit<T, 'action'>,
  actions: BasicCRUDActions[] = [
    BasicCRUDActions.Create,
    BasicCRUDActions.Read,
    BasicCRUDActions.Update,
    BasicCRUDActions.Delete,
  ]
) {
  return actions.map(action => ({...item, action}));
}

export interface IPermissionItemEndpoints {
  addItems(
    props: IAddPermissionItemsEndpointParams
  ): Promise<IAddPermissionItemsEndpointResult>;

  deleteItemsById(
    props: IDeletePermissionItemsByIdEndpointParams
  ): Promise<IEndpointResultBase>;

  getResourcePermissionItems(
    props: IGetResourcePermissionItemsEndpointParams
  ): Promise<IGetResourcePermissionItemsEndpointResult>;

  getEntityPermissionItems(
    props: IGetEntityPermissionItemsEndpointParams
  ): Promise<IGetEntityPermissionItemsEndpointResult>;

  replacePermissionItemsByEntity(
    props: IReplacePermissionItemsByEntityEndpointParams
  ): Promise<IReplacePermissionItemsByEntityEndpointResult>;
}
