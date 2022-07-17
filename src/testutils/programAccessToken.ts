import faker from '@faker-js/faker';
import {merge} from 'lodash';
import {PartialDeep} from 'type-fest';
import {
  IAddProgramAccessTokenEndpointParams,
  IDeleteProgramAccessTokenEndpointParams,
  IEndpoints,
  IGetProgramAccessTokenEndpointParams,
  IGetWorkspaceProgramAccessTokenEndpointParams,
  IPermissionGroupInput,
  IUpdateProgramAccessTokenEndpointParams,
} from '../definitions';
import {cast} from '../utils';
import {addPermissionGroupTest} from './permissionGroups';
import {
  addToCleanupField,
  assertEndpointResult,
  ITestVars,
  removeFromCleanupField,
} from './utils';
import assert = require('assert');

export async function addProgramTokenTest(
  endpoint: IEndpoints,
  vars: ITestVars,
  props: PartialDeep<IAddProgramAccessTokenEndpointParams> = {}
) {
  let assignedPermissionGroups = cast<Array<IPermissionGroupInput> | undefined>(
    props.token?.permissionGroups
  );

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

  const genInput: IAddProgramAccessTokenEndpointParams = {
    token: {
      name: faker.name.firstName(),
      description: faker.lorem.sentence(),
      permissionGroups: assignedPermissionGroups,
    },
  };
  const inputs = merge(genInput, props);
  const result = await endpoint.programTokens.addToken(inputs);
  addToCleanupField(vars, 'cleanupProgramTokenIds', result.token.resourceId);
  return result;
}

export async function getWorkspaceProgramTokensTest(
  endpoint: IEndpoints,
  vars: ITestVars,
  props: PartialDeep<IGetWorkspaceProgramAccessTokenEndpointParams> = {}
) {
  await Promise.all([
    addProgramTokenTest(endpoint, vars),
    addProgramTokenTest(endpoint, vars),
  ]);

  const genInput: IGetWorkspaceProgramAccessTokenEndpointParams = {};
  const input: IGetWorkspaceProgramAccessTokenEndpointParams = merge(
    genInput,
    props
  );

  const result = await endpoint.programTokens.getWorkspaceTokens(input);
  assertEndpointResult(result);
  return result;
}

export async function getTokenTest(
  endpoint: IEndpoints,
  vars: ITestVars,
  props: PartialDeep<IGetProgramAccessTokenEndpointParams> = {}
) {
  let tokenId = props.tokenId;
  if (!tokenId) {
    const token = await addProgramTokenTest(endpoint, vars);
    tokenId = token.token.resourceId;
  }
  assert.ok(tokenId);
  const input: IGetProgramAccessTokenEndpointParams = {
    tokenId,
  };
  const result = await endpoint.programTokens.getToken(input);
  assertEndpointResult(result);
  assert(result.token.resourceId === tokenId);
  return result;
}

export async function deleteTokenTest(
  endpoint: IEndpoints,
  vars: ITestVars,
  props: PartialDeep<IDeleteProgramAccessTokenEndpointParams> = {}
) {
  let tokenId = props.tokenId;
  if (!tokenId) {
    const token = await addProgramTokenTest(endpoint, vars);
    tokenId = token.token.resourceId;
  }
  assert.ok(tokenId);
  const input: IDeleteProgramAccessTokenEndpointParams = {
    tokenId,
  };
  const result = await endpoint.programTokens.deleteToken(input);
  assertEndpointResult(result);
  removeFromCleanupField(vars, 'cleanupProgramTokenIds', tokenId);
}

export async function updateTokenTest(
  endpoint: IEndpoints,
  vars: ITestVars,
  props: PartialDeep<IUpdateProgramAccessTokenEndpointParams> = {}
) {
  let tokenId = props.tokenId;
  let assignedPermissionGroups = cast<Array<IPermissionGroupInput> | undefined>(
    props.token?.permissionGroups
  );

  if (!tokenId) {
    const token = await addProgramTokenTest(endpoint, vars);
    tokenId = token.token.resourceId;
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

  assert.ok(tokenId);
  assert.ok(assignedPermissionGroups);
  const input: IUpdateProgramAccessTokenEndpointParams = {
    tokenId,
    token: {
      permissionGroups: assignedPermissionGroups,
      name: faker.name.firstName(),
      description: faker.lorem.sentence(),
    },
  };
  const result = await endpoint.programTokens.updateToken(input);
  assertEndpointResult(result);
  return result;
}

export async function deleteManyProgramTokens(
  endpoint: IEndpoints,
  ids: string[]
) {
  await Promise.allSettled(
    ids.map(id => endpoint.programTokens.deleteToken({tokenId: id}))
  );
}
