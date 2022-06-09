import assert = require('assert');
import {flattenDeep} from 'lodash';
import path = require('path');
import Endpoints from '../endpoints/endpoints';
import {GetEndpointResult} from '../types';
import {deleteManyClientTokens} from './clientAssignedToken';
import {deleteManyFilesById, deleteManyFilesByPath} from './file';
import {deleteManyFoldersByPath} from './folder';
import {deleteManyPermissionItems} from './permissionItem';
import {deleteManyPresets} from './presetPermissionsGroup';
import {deleteManyProgramTokens} from './programAccessToken';

export interface ITestVars {
  workspaceId: string;
  authToken: string;

  // for global cleanup
  cleanupPresetIds: string[];
  cleanupClientTokenIds: string[];
  cleanupFileIds: string[];
  cleanupFilepaths: string[];
  cleanupFolderpaths: string[];
  cleanupPermissionItemIds: string[];
  cleanupProgramTokenIds: string[];
}

const testFolderPath = '/js-sdk-test-files';

export function assertEndpointResult(result: GetEndpointResult<any>) {
  assert(result.errors === undefined);
}

export function addToCleanupField(
  vars: ITestVars,
  field: keyof ITestVars,
  ...ids: Array<string | string[]>
) {
  // @ts-ignore
  vars[field] = vars[field].concat(flattenDeep(ids));
}

export function makeTestFilepath(filepath: string) {
  return path.normalize(`${testFolderPath}/${filepath}`);
}

export function getTestVars(): ITestVars {
  const workspaceId = process.env.FIMIDARA_TEST_WORKSPACE_ID;
  const authToken = process.env.FIMIDARA_TEST_AUTH_TOKEN;
  assert.ok(workspaceId);
  assert.ok(authToken);
  return {
    workspaceId,
    authToken,
    cleanupClientTokenIds: [],
    cleanupFileIds: [],
    cleanupFilepaths: [],
    cleanupFolderpaths: [],
    cleanupPermissionItemIds: [],
    cleanupProgramTokenIds: [],
    cleanupPresetIds: [],
  };
}

export async function globalCleanup(endpoint: Endpoints, vars: ITestVars) {
  await Promise.all([
    deleteManyPresets(endpoint, vars.cleanupPresetIds),
    deleteManyClientTokens(endpoint, vars.cleanupClientTokenIds),
    deleteManyFilesById(endpoint, vars.cleanupFileIds),
    deleteManyFilesByPath(endpoint, vars.cleanupFilepaths),
    deleteManyFoldersByPath(endpoint, vars.cleanupFolderpaths),
    deleteManyPermissionItems(endpoint, vars.cleanupPermissionItemIds),
    deleteManyProgramTokens(endpoint, vars.cleanupProgramTokenIds),
  ]);
}
