import faker from '@faker-js/faker';
import {merge} from 'lodash';
import {PartialDeep} from 'type-fest';
import {
  IAddPermissionGroupEndpointParams,
  IDeletePermissionGroupEndpointParams,
  IGetPermissionGroupEndpointParams,
  IGetWorkspaceEndpointParams,
  IGetWorkspacePermissionGroupEndpointParams,
  IPermissionGroupInput,
  IUpdatePermissionGroupEndpointParams,
} from '../definitions';
import {IEndpoints} from '../endpoints';
import {cast} from '../utils';
import {
  addToCleanupField,
  assertEndpointResult,
  ITestVars,
  removeFromCleanupField,
} from './utils';
import assert = require('assert');

export async function addPermissionGroupTest(
  endpoint: IEndpoints,
  vars: ITestVars,
  props: PartialDeep<IAddPermissionGroupEndpointParams> = {}
) {
  const genInput: IAddPermissionGroupEndpointParams = {
    permissionGroup: {
      name: faker.lorem.words(),
      description: faker.lorem.sentence(),
    },
  };
  const input: IAddPermissionGroupEndpointParams = merge(genInput, props);
  const result = await endpoint.permissionGroups.addPermissionGroup(input);
  assertEndpointResult(result);
  addToCleanupField(
    vars,
    'cleanupPermissionGroupIds',
    result.permissionGroup.resourceId
  );
  return result;
}

export async function getWorkspacePermissionGroupsTest(
  endpoint: IEndpoints,
  vars: ITestVars,
  props: PartialDeep<IGetWorkspaceEndpointParams> = {}
) {
  const permissionGroups = await Promise.all([
    addPermissionGroupTest(endpoint, vars),
    addPermissionGroupTest(endpoint, vars),
  ]);
  const genInput: IGetWorkspacePermissionGroupEndpointParams = {};
  const input: IGetWorkspacePermissionGroupEndpointParams = merge(
    genInput,
    props
  );
  const result = await endpoint.permissionGroups.getWorkspacePermissionGroups(
    input
  );
  assertEndpointResult(result);
  assert(result.permissionGroups.length > permissionGroups.length);
  return result;
}

export async function getPermissionGroupTest(
  endpoint: IEndpoints,
  vars: ITestVars,
  props: PartialDeep<IGetPermissionGroupEndpointParams> = {}
) {
  let permissionGroupId = props.permissionGroupId;
  if (!permissionGroupId) {
    const permissionGroup = await addPermissionGroupTest(endpoint, vars);
    permissionGroupId = permissionGroup.permissionGroup.resourceId;
  }
  assert.ok(permissionGroupId);
  const input: IGetPermissionGroupEndpointParams = {
    permissionGroupId: permissionGroupId,
  };
  const result = await endpoint.permissionGroups.getPermissionGroup(input);
  assertEndpointResult(result);
  assert(result.permissionGroup.resourceId === permissionGroupId);
  return result;
}

export async function deletePermissionGroupTest(
  endpoint: IEndpoints,
  vars: ITestVars,
  props: PartialDeep<IDeletePermissionGroupEndpointParams> = {}
) {
  let permissionGroupId = props.permissionGroupId;
  if (!permissionGroupId) {
    const permissionGroup = await addPermissionGroupTest(endpoint, vars);
    permissionGroupId = permissionGroup.permissionGroup.resourceId;
  }
  assert.ok(permissionGroupId);
  const input: IDeletePermissionGroupEndpointParams = {
    permissionGroupId: permissionGroupId,
  };
  const result = await endpoint.permissionGroups.deletePermissionGroup(input);
  assertEndpointResult(result);
  removeFromCleanupField(vars, 'cleanupPermissionGroupIds', permissionGroupId);
}

export async function updatePermissionGroupTest(
  endpoint: IEndpoints,
  vars: ITestVars,
  props: PartialDeep<IUpdatePermissionGroupEndpointParams> = {}
) {
  let permissionGroupId = props.permissionGroupId;
  let assignedPermissionGroups = cast<Array<IPermissionGroupInput> | undefined>(
    props.permissionGroup?.permissionGroups
  );

  if (!permissionGroupId) {
    const permissionGroup = await addPermissionGroupTest(endpoint, vars);
    permissionGroupId = permissionGroup.permissionGroup.resourceId;
  }

  if (!assignedPermissionGroups) {
    const permissionGroups = await Promise.all([
      addPermissionGroupTest(endpoint, vars),
      addPermissionGroupTest(endpoint, vars),
    ]);
    assignedPermissionGroups = permissionGroups.map(permissionGroup => ({
      permissionGroupId: permissionGroup.permissionGroup.resourceId,
      order: faker.datatype.number({min: 1, max: 10}),
    }));
  }

  assert.ok(permissionGroupId);
  assert.ok(assignedPermissionGroups);
  const input: IUpdatePermissionGroupEndpointParams = {
    permissionGroupId: permissionGroupId,
    permissionGroup: {
      name: faker.lorem.words(),
      description: faker.lorem.sentence(),
      permissionGroups: assignedPermissionGroups,
    },
  };
  const result = await endpoint.permissionGroups.updatePermissionGroup(input);
  assertEndpointResult(result);
  return result;
}

export async function deleteManyPermissionGroups(
  endpoint: IEndpoints,
  ids: string[]
) {
  await Promise.allSettled(
    ids.map(id =>
      endpoint.permissionGroups.deletePermissionGroup({permissionGroupId: id})
    )
  );
}
