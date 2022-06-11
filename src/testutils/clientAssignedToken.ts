import faker from '@faker-js/faker';
import {merge} from 'lodash';
import {PartialDeep} from 'type-fest';
import {IPresetInput} from '../definitions';
import {
  IAddClientAssignedTokenEndpointParams,
  IDeleteClientAssignedTokenEndpointParams,
  IGetClientAssignedTokenEndpointParams,
  IGetWorkspaceClientAssignedTokensEndpointParams,
  IUpdateClientAssignedTokenEndpointParams,
} from '../endpoints/clientAssignedToken';
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

function getTokenExpiryDate(
  days: number = faker.datatype.number({min: 1, max: 10})
) {
  return new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString();
}

export async function addClientTokenTest(
  endpoint: Endpoints,
  vars: ITestVars,
  props: PartialDeep<IAddClientAssignedTokenEndpointParams> = {}
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

  const genInput: IAddClientAssignedTokenEndpointParams = {
    token: {
      expires: getTokenExpiryDate(),
      providedResourceId: faker.datatype.uuid(),
      presets: assignedPresets,
    },
  };
  const inputs = merge(genInput, props);
  const result = await endpoint.clientTokens.addToken(inputs);
  addToCleanupField(vars, 'cleanupClientTokenIds', result.token.resourceId);
  return result;
}

export async function getWorkspaceClientTokensTest(
  endpoint: Endpoints,
  vars: ITestVars,
  props: PartialDeep<IGetWorkspaceClientAssignedTokensEndpointParams> = {}
) {
  const tokens = await Promise.all([
    addClientTokenTest(endpoint, vars),
    addClientTokenTest(endpoint, vars),
  ]);
  const genInput: IGetWorkspaceClientAssignedTokensEndpointParams = {};
  const input: IGetWorkspaceClientAssignedTokensEndpointParams = merge(
    genInput,
    props
  );
  const result = await endpoint.clientTokens.getWorkspaceTokens(input);
  assertEndpointResult(result);
  return result;
}

export async function getTokenTest(
  endpoint: Endpoints,
  vars: ITestVars,
  props: PartialDeep<IGetClientAssignedTokenEndpointParams> = {}
) {
  let tokenId = props.tokenId;
  if (!tokenId) {
    const token = await addClientTokenTest(endpoint, vars);
    tokenId = token.token.resourceId;
  }
  assert.ok(tokenId);
  const input: IGetClientAssignedTokenEndpointParams = {
    tokenId,
  };
  const result = await endpoint.clientTokens.getToken(input);
  assertEndpointResult(result);
  assert(result.token.resourceId === tokenId);
  return result;
}

export async function deleteTokenTest(
  endpoint: Endpoints,
  vars: ITestVars,
  props: PartialDeep<IDeleteClientAssignedTokenEndpointParams> = {}
) {
  let tokenId = props.tokenId;
  if (!tokenId) {
    const token = await addClientTokenTest(endpoint, vars);
    tokenId = token.token.resourceId;
  }
  assert.ok(tokenId);
  const input: IDeleteClientAssignedTokenEndpointParams = {
    tokenId,
  };
  const result = await endpoint.clientTokens.deleteToken(input);
  assertEndpointResult(result);
  removeFromCleanupField(vars, 'cleanupClientTokenIds', tokenId);
}

export async function updateTokenTest(
  endpoint: Endpoints,
  vars: ITestVars,
  props: PartialDeep<IUpdateClientAssignedTokenEndpointParams> = {}
) {
  let tokenId = props.tokenId;
  let assignedPresets = cast<Array<IPresetInput> | undefined>(
    props.token?.presets
  );

  if (!tokenId) {
    const token = await addClientTokenTest(endpoint, vars);
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
  const input: IUpdateClientAssignedTokenEndpointParams = {
    tokenId,
    token: {
      presets: assignedPresets,
      expires: getTokenExpiryDate(),
      providedResourceId: faker.datatype.uuid(),
    },
  };
  const result = await endpoint.clientTokens.updateToken(input);
  assertEndpointResult(result);
  return result;
}

export async function deleteManyClientTokens(
  endpoint: Endpoints,
  ids: string[]
) {
  await Promise.allSettled(
    ids.map(id => endpoint.clientTokens.deleteToken({tokenId: id}))
  );
}