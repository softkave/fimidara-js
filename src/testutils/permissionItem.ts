import assert = require('assert');
import {merge} from 'lodash';
import {PartialDeep} from 'type-fest';
import {
  AppResourceType,
  IAddPermissionItemsEndpointParams,
  IDeletePermissionItemsByIdEndpointParams,
  IEndpoints,
  IGetEntityPermissionItemsEndpointParams,
  IGetResourcePermissionItemsEndpointParams,
  INewPermissionItemInput,
  INewPermissionItemInputByEntity,
  IPermissionItem,
  IReplacePermissionItemsByEntityEndpointParams,
  makePermissionItemInputWithActions,
  PermissionItemAppliesTo,
} from '../definitions';
import {cast} from '../utils';
import {addClientTokenTest} from './clientAssignedToken';
import {addFolderTest} from './folder';
import {
  addToCleanupField,
  assertEndpointResult,
  ITestVars,
  removeFromCleanupField,
} from './utils';

export function getItemIds(items: IPermissionItem[]) {
  return items.map(item => item.resourceId);
}

export async function getEntityPermissionItemsTest(
  endpoint: IEndpoints,
  vars: ITestVars
) {
  const token = await addClientTokenTest(endpoint, vars);
  const folder01 = await addFolderTest(endpoint, vars);
  const folder02 = await addFolderTest(endpoint, vars);
  await addItemsTest(endpoint, vars, {
    items: makePermissionItemInputWithActions<INewPermissionItemInput>({
      appliesTo: PermissionItemAppliesTo.OwnerAndChildren,
      grantAccess: true,
      itemResourceType: AppResourceType.Folder,
      itemResourceId: folder02.folder.resourceId,
      permissionOwnerId: folder01.folder.resourceId,
      permissionOwnerType: AppResourceType.Folder,
      permissionEntityId: token.token.resourceId,
      permissionEntityType: AppResourceType.ClientAssignedToken,
    }),
  });
  const input: IGetEntityPermissionItemsEndpointParams = {
    permissionEntityId: token.token.resourceId,
    permissionEntityType: AppResourceType.ClientAssignedToken,
  };
  const result = await endpoint.permissionItems.getEntityPermissionItems(input);
  assertEndpointResult(result);
  return result;
}

export async function getResourcePermissionItemsTest(
  endpoint: IEndpoints,
  vars: ITestVars
) {
  const folder01 = await addFolderTest(endpoint, vars);
  const folder02 = await addFolderTest(endpoint, vars);
  const token = await addClientTokenTest(endpoint, vars);
  await addItemsTest(endpoint, vars, {
    items: makePermissionItemInputWithActions<INewPermissionItemInput>({
      appliesTo: PermissionItemAppliesTo.OwnerAndChildren,
      grantAccess: true,
      itemResourceType: AppResourceType.Folder,
      itemResourceId: folder02.folder.resourceId,
      permissionOwnerId: folder01.folder.resourceId,
      permissionOwnerType: AppResourceType.Folder,
      permissionEntityId: token.token.resourceId,
      permissionEntityType: AppResourceType.ClientAssignedToken,
    }),
  });
  const input: IGetResourcePermissionItemsEndpointParams = {
    itemResourceType: AppResourceType.Folder,
    itemResourceId: folder02.folder.resourceId,
    permissionOwnerId: folder01.folder.resourceId,
    permissionOwnerType: AppResourceType.Folder,
  };
  const result = await endpoint.permissionItems.getResourcePermissionItems(
    input
  );
  assertEndpointResult(result);
  return result;
}

export async function deleteItemsByIdTest(
  endpoint: IEndpoints,
  vars: ITestVars,
  props: PartialDeep<IDeletePermissionItemsByIdEndpointParams> = {}
) {
  let itemIds = cast<string[] | undefined>(props.itemIds);
  if (!itemIds) {
    const items = await addItemsTest(endpoint, vars);
    itemIds = getItemIds(items.items);
  }

  assert.ok(itemIds);
  const input: IDeletePermissionItemsByIdEndpointParams = {
    itemIds,
  };
  const result = await endpoint.permissionItems.deleteItemsById(input);
  assertEndpointResult(result);
  removeFromCleanupField(vars, 'cleanupPermissionItemIds', itemIds);
}

export async function addItemsTest(
  endpoint: IEndpoints,
  vars: ITestVars,
  props: PartialDeep<IAddPermissionItemsEndpointParams> = {}
) {
  const folder = await addFolderTest(endpoint, vars);
  const token = await addClientTokenTest(endpoint, vars);
  const genInput: IAddPermissionItemsEndpointParams = {
    items: makePermissionItemInputWithActions<INewPermissionItemInput>({
      appliesTo: PermissionItemAppliesTo.OwnerAndChildren,
      grantAccess: true,
      itemResourceType: AppResourceType.File,
      permissionOwnerId: folder.folder.resourceId,
      permissionOwnerType: AppResourceType.Folder,
      permissionEntityId: token.token.resourceId,
      permissionEntityType: AppResourceType.ClientAssignedToken,
    }),
  };
  const inputs = merge(genInput, props);
  const result = await endpoint.permissionItems.addItems(inputs);
  addToCleanupField(vars, 'cleanupPermissionItemIds', getItemIds(result.items));
  return result;
}

export async function replacePermissionItemsByEntityTest(
  endpoint: IEndpoints,
  vars: ITestVars,
  props: PartialDeep<IReplacePermissionItemsByEntityEndpointParams> = {}
) {
  const folder = await addFolderTest(endpoint, vars);
  const token = await addClientTokenTest(endpoint, vars);
  const items =
    makePermissionItemInputWithActions<INewPermissionItemInputByEntity>({
      appliesTo: PermissionItemAppliesTo.OwnerAndChildren,
      grantAccess: true,
      itemResourceType: AppResourceType.File,
      permissionOwnerId: folder.folder.resourceId,
      permissionOwnerType: AppResourceType.Folder,
    });
  const genInput: IReplacePermissionItemsByEntityEndpointParams = {
    items,
    permissionEntityId: token.token.resourceId,
    permissionEntityType: AppResourceType.ClientAssignedToken,
  };
  const inputs = merge(genInput, props);
  const result = await endpoint.permissionItems.replacePermissionItemsByEntity(
    inputs
  );
  addToCleanupField(vars, 'cleanupPermissionItemIds', getItemIds(result.items));
  return result;
}

export async function deleteManyPermissionItems(
  endpoint: IEndpoints,
  ids: string[]
) {
  await endpoint.permissionItems.deleteItemsById({itemIds: ids});
}
