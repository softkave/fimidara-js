import faker from '@faker-js/faker';
import {merge} from 'lodash';
import {PartialDeep} from 'type-fest';
import {IPresetInput} from '../definitions';
import {
  IAddProgramAccessTokenEndpointParams,
  IDeleteProgramAccessTokenEndpointParams,
  IGetProgramAccessTokenEndpointParams,
  IGetWorkspaceProgramAccessTokenEndpointParams,
  IUpdateProgramAccessTokenEndpointParams,
} from '../endpoints';
import Endpoints from '../endpoints/endpoints';
import {cast} from '../utils';
import {addPresetTest} from './presetPermissionsGroup';
import {
  addToCleanupField,
  assertEndpointResult,
  ITestVars,
  removeFromCleanupField,
} from './utils';
import assert = require('assert');

export async function addProgramTokenTest(
  endpoint: Endpoints,
  vars: ITestVars,
  props: PartialDeep<IAddProgramAccessTokenEndpointParams> = {}
) {
  let assignedPresets = cast<Array<IPresetInput> | undefined>(
    props.token?.presets
  );

  if (!assignedPresets) {
    const presets = await Promise.all([
      addPresetTest(endpoint, vars),
      addPresetTest(endpoint, vars),
    ]);
    assignedPresets = presets.map(preset => ({
      presetId: preset.preset.resourceId,
      order: faker.datatype.number({min: 1, max: 10}),
    }));
  }

  const genInput: IAddProgramAccessTokenEndpointParams = {
    token: {
      name: faker.name.firstName(),
      description: faker.lorem.sentence(),
      presets: assignedPresets,
    },
  };
  const inputs = merge(genInput, props);
  const result = await endpoint.programTokens.addToken(inputs);
  addToCleanupField(vars, 'cleanupProgramTokenIds', result.token.resourceId);
  return result;
}

export async function getWorkspaceProgramTokensTest(
  endpoint: Endpoints,
  vars: ITestVars,
  props: PartialDeep<IGetWorkspaceProgramAccessTokenEndpointParams> = {}
) {
  const tokens = await Promise.all([
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
  endpoint: Endpoints,
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
  endpoint: Endpoints,
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
  endpoint: Endpoints,
  vars: ITestVars,
  props: PartialDeep<IUpdateProgramAccessTokenEndpointParams> = {}
) {
  let tokenId = props.tokenId;
  let assignedPresets = cast<Array<IPresetInput> | undefined>(
    props.token?.presets
  );

  if (!tokenId) {
    const token = await addProgramTokenTest(endpoint, vars);
    tokenId = token.token.resourceId;
  }

  if (!assignedPresets) {
    const presets = await Promise.all([
      addPresetTest(endpoint, vars),
      addPresetTest(endpoint, vars),
    ]);
    assignedPresets = presets.map(preset => ({
      presetId: preset.preset.resourceId,
      order: faker.datatype.number({min: 1, max: 10}),
    }));
  }

  assert.ok(tokenId);
  assert.ok(assignedPresets);
  const input: IUpdateProgramAccessTokenEndpointParams = {
    tokenId,
    token: {
      presets: assignedPresets,
      name: faker.name.firstName(),
      description: faker.lorem.sentence(),
    },
  };
  const result = await endpoint.programTokens.updateToken(input);
  assertEndpointResult(result);
  return result;
}

export async function deleteManyProgramTokens(
  endpoint: Endpoints,
  ids: string[]
) {
  await Promise.allSettled(
    ids.map(id => endpoint.programTokens.deleteToken({tokenId: id}))
  );
}
