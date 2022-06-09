import faker from '@faker-js/faker';
import assert = require('assert');
import {merge} from 'lodash';
import {PartialDeep} from 'type-fest';
import {IPresetInput} from '../definitions';
import {
  IAddPresetPermissionsGroupEndpointParams,
  IGetWorkspaceEndpointParams,
  IGetWorkspacePresetPermissionsGroupEndpointParams,
  IGetPresetPermissionsGroupEndpointParams,
  IDeletePresetPermissionsGroupEndpointParams,
  IUpdatePresetPermissionsGroupEndpointParams,
} from '../endpoints';
import Endpoints from '../endpoints/endpoints';
import {cast} from '../utils';
import {ITestVars, assertEndpointResult, addToCleanupField} from './utils';

export async function addPresetTest(
  endpoint: Endpoints,
  vars: ITestVars,
  props: PartialDeep<IAddPresetPermissionsGroupEndpointParams> = {}
) {
  const genInput: IAddPresetPermissionsGroupEndpointParams = {
    preset: {
      name: faker.lorem.word(),
      description: faker.lorem.sentence(),
    },
  };
  const input: IAddPresetPermissionsGroupEndpointParams = merge(
    genInput,
    props
  );
  const result = await endpoint.presets.addPreset(input);
  assertEndpointResult(result);
  addToCleanupField(vars, 'cleanupPresetIds', result.preset.resourceId);
  return result;
}

export async function getWorkspacePresetsTest(
  endpoint: Endpoints,
  vars: ITestVars,
  props: PartialDeep<IGetWorkspaceEndpointParams> = {}
) {
  const presets = await Promise.all([
    addPresetTest(endpoint, vars),
    addPresetTest(endpoint, vars),
  ]);
  const genInput: IGetWorkspacePresetPermissionsGroupEndpointParams = {};
  const input: IGetWorkspacePresetPermissionsGroupEndpointParams = merge(
    genInput,
    props
  );
  const result = await endpoint.presets.getWorkspacePresets(input);
  assertEndpointResult(result);
  assert(result.presets.length > presets.length);
  return result;
}

export async function getPresetTest(
  endpoint: Endpoints,
  vars: ITestVars,
  props: PartialDeep<IGetPresetPermissionsGroupEndpointParams> = {}
) {
  let presetId = props.presetId;
  if (!presetId) {
    const preset = await addPresetTest(endpoint, vars);
    presetId = preset.preset.resourceId;
  }
  assert.ok(presetId);
  const input: IGetPresetPermissionsGroupEndpointParams = {
    presetId,
  };
  const result = await endpoint.presets.getPreset(input);
  assertEndpointResult(result);
  assert(result.preset.resourceId === presetId);
  return result;
}

export async function deletePresetTest(
  endpoint: Endpoints,
  vars: ITestVars,
  props: PartialDeep<IDeletePresetPermissionsGroupEndpointParams> = {}
) {
  let presetId = props.presetId;
  if (!presetId) {
    const preset = await addPresetTest(endpoint, vars);
    presetId = preset.preset.resourceId;
  }
  assert.ok(presetId);
  const input: IDeletePresetPermissionsGroupEndpointParams = {
    presetId,
  };
  const result = await endpoint.presets.deletePreset(input);
  assertEndpointResult(result);
}

export async function updatePresetTest(
  endpoint: Endpoints,
  vars: ITestVars,
  props: PartialDeep<IUpdatePresetPermissionsGroupEndpointParams> = {}
) {
  let presetId = props.presetId;
  let assignedPresets = cast<Array<IPresetInput> | undefined>(
    props.preset?.presets
  );

  if (!presetId) {
    const preset = await addPresetTest(endpoint, vars);
    presetId = preset.preset.resourceId;
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

  assert.ok(presetId);
  assert.ok(assignedPresets);
  const input: IUpdatePresetPermissionsGroupEndpointParams = {
    presetId,
    preset: {
      name: faker.lorem.word(),
      description: faker.lorem.sentence(),
      presets: assignedPresets,
    },
  };
  const result = await endpoint.presets.deletePreset(input);
  assertEndpointResult(result);
  return result;
}

export async function deleteManyPresets(endpoint: Endpoints, ids: string[]) {
  await Promise.all(
    ids.map(id => endpoint.presets.deletePreset({presetId: id}))
  );
}
