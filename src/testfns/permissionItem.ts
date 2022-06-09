import assert = require('assert');
import {merge} from 'lodash';
import {PartialDeep} from 'type-fest';
import {
  BasicCRUDActions,
  AppResourceType,
  PermissionItemAppliesTo,
  IPermissionItem,
} from '../definitions';
import {
  IGetEntityPermissionItemsEndpointParams,
  IDeletePermissionItemsByIdEndpointParams,
  IAddPermissionItemsEndpointParams,
  IReplacePermissionItemsByEntityEndpointParams,
  IGetResourcePermissionItemsEndpointParams,
} from '../endpoints';
import Endpoints from '../endpoints/endpoints';
import {cast} from '../utils';
import {addFolderTest} from './folder';
import {ITestVars, assertEndpointResult, addToCleanupField} from './utils';
import {addClientTokenTest} from './clientAssignedToken';

export function getItemIds(items: IPermissionItem[]) {
  return items.map(item => item.resourceId);
}

export async function getEntityPermissionItemsTest(
  endpoint: Endpoints,
  vars: ITestVars
) {
  const token = await addClientTokenTest(endpoint, vars);
  const folder01 = await addFolderTest(endpoint, vars);
  const folder02 = await addFolderTest(endpoint, vars);
  const items = await addItemsTest(endpoint, vars, {
    items: [
      {
        action: BasicCRUDActions.All,
        appliesTo: PermissionItemAppliesTo.OwnerAndChildren,
        grantAccess: true,
        itemResourceType: AppResourceType.Folder,
        itemResourceId: folder02.folder.resourceId,
        permissionOwnerId: folder01.folder.resourceId,
        permissionOwnerType: AppResourceType.Folder,
        permissionEntityId: token.token.resourceId,
        permissionEntityType: AppResourceType.ClientAssignedToken,
      },
    ],
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
  endpoint: Endpoints,
  vars: ITestVars
) {
  const folder01 = await addFolderTest(endpoint, vars);
  const folder02 = await addFolderTest(endpoint, vars);
  const token = await addClientTokenTest(endpoint, vars);
  const items = await addItemsTest(endpoint, vars, {
    items: [
      {
        action: BasicCRUDActions.All,
        appliesTo: PermissionItemAppliesTo.OwnerAndChildren,
        grantAccess: true,
        itemResourceType: AppResourceType.Folder,
        itemResourceId: folder02.folder.resourceId,
        permissionOwnerId: folder01.folder.resourceId,
        permissionOwnerType: AppResourceType.Folder,
        permissionEntityId: token.token.resourceId,
        permissionEntityType: AppResourceType.ClientAssignedToken,
      },
    ],
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
  endpoint: Endpoints,
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
}

export async function addItemsTest(
  endpoint: Endpoints,
  vars: ITestVars,
  props: PartialDeep<IAddPermissionItemsEndpointParams> = {}
) {
  const folder = await addFolderTest(endpoint, vars);
  const token = await addClientTokenTest(endpoint, vars);
  const genInput: IAddPermissionItemsEndpointParams = {
    items: [
      {
        action: BasicCRUDActions.All,
        appliesTo: PermissionItemAppliesTo.OwnerAndChildren,
        grantAccess: true,
        itemResourceType: AppResourceType.File,
        permissionOwnerId: folder.folder.resourceId,
        permissionOwnerType: AppResourceType.Folder,
        permissionEntityId: token.token.resourceId,
        permissionEntityType: AppResourceType.ClientAssignedToken,
      },
    ],
  };
  const inputs = merge(genInput, props);
  const result = await endpoint.permissionItems.addItems(inputs);
  addToCleanupField(vars, 'cleanupPermissionItemIds', getItemIds(result.items));
  return result;
}

export async function replacePermissionItemsByEntityTest(
  endpoint: Endpoints,
  vars: ITestVars,
  props: PartialDeep<IReplacePermissionItemsByEntityEndpointParams> = {}
) {
  const folder = await addFolderTest(endpoint, vars);
  const token = await addClientTokenTest(endpoint, vars);
  const genInput: IReplacePermissionItemsByEntityEndpointParams = {
    permissionEntityId: token.token.resourceId,
    permissionEntityType: AppResourceType.ClientAssignedToken,
    items: [
      {
        action: BasicCRUDActions.All,
        appliesTo: PermissionItemAppliesTo.OwnerAndChildren,
        grantAccess: true,
        itemResourceType: AppResourceType.File,
        permissionOwnerId: folder.folder.resourceId,
        permissionOwnerType: AppResourceType.Folder,
      },
    ],
  };
  const inputs = merge(genInput, props);
  const result = await endpoint.permissionItems.replacePermissionItemsByEntity(
    inputs
  );
  addToCleanupField(vars, 'cleanupPermissionItemIds', getItemIds(result.items));
  return result;
}

export async function deleteManyPermissionItems(
  endpoint: Endpoints,
  ids: string[]
) {
  await endpoint.permissionItems.deleteItemsById({itemIds: ids});
}
