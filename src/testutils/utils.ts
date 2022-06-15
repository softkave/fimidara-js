import assert = require('assert');
import {flattenDeep, uniq} from 'lodash';
import {formatWithOptions} from 'util';
import {EndpointResult} from '../definitions/types';
import {IEndpoints} from '../endpoints';
import {deleteManyClientTokens} from './clientAssignedToken';
import {deleteManyFilesById, deleteManyFilesByPath} from './file';
import {deleteManyFoldersByPath} from './folder';
import {deleteManyPermissionGroups} from './permissionGroups';
import {deleteManyPermissionItems} from './permissionItem';
import {deleteManyProgramTokens} from './programAccessToken';
import path = require('path');

export interface ITestVars {
  workspaceId: string;
  authToken: string;
  testFilepath: string;

  // for global cleanup
  cleanupPermissionGroupIds: string[];
  cleanupClientTokenIds: string[];
  cleanupFileIds: string[];
  cleanupFilepaths: string[];
  cleanupFolderpaths: string[];
  cleanupPermissionItemIds: string[];
  cleanupProgramTokenIds: string[];
}

export function assertEndpointResult(result: EndpointResult<any>) {
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

export function removeFromCleanupField(
  vars: ITestVars,
  field: keyof ITestVars,
  ...ids: Array<string | string[]>
) {
  // @ts-ignore
  vars[field] = vars[field].filter(id => !ids.includes(id));
}

export function makeTestFilepath(filepath: string) {
  return path.posix.normalize(filepath);
}

export function getTestVars(): ITestVars {
  const workspaceId = process.env.FIMIDARA_TEST_WORKSPACE_ID;
  const authToken = process.env.FIMIDARA_TEST_AUTH_TOKEN;
  const testFilepath = process.env.FIMIDARA_TEST_FILEPATH;
  assert.ok(workspaceId);
  assert.ok(authToken);
  assert.ok(testFilepath);
  return {
    workspaceId,
    authToken,
    testFilepath,
    cleanupClientTokenIds: [],
    cleanupFileIds: [],
    cleanupFilepaths: [],
    cleanupFolderpaths: [],
    cleanupPermissionItemIds: [],
    cleanupProgramTokenIds: [],
    cleanupPermissionGroupIds: [],
  };
}

export async function globalCleanup(endpoint: IEndpoints, vars: ITestVars) {
  const cleanupPermissionGroupIds = uniq(vars.cleanupPermissionGroupIds);
  const cleanupClientTokenIds = uniq(vars.cleanupClientTokenIds);
  const cleanupFileIds = uniq(vars.cleanupFileIds);
  const cleanupFilepaths = uniq(vars.cleanupFilepaths);
  const cleanupFolderpaths = uniq(vars.cleanupFolderpaths);
  const cleanupPermissionItemIds = uniq(vars.cleanupPermissionItemIds);
  const cleanupProgramTokenIds = uniq(vars.cleanupProgramTokenIds);
  const result = await Promise.allSettled([
    cleanupPermissionGroupIds.length &&
      deleteManyPermissionGroups(endpoint, cleanupPermissionGroupIds),
    cleanupClientTokenIds.length &&
      deleteManyClientTokens(endpoint, cleanupClientTokenIds),
    cleanupFileIds.length && deleteManyFilesById(endpoint, cleanupFileIds),
    cleanupFilepaths.length &&
      deleteManyFilesByPath(endpoint, cleanupFilepaths),
    cleanupFolderpaths.length &&
      deleteManyFoldersByPath(endpoint, cleanupFolderpaths),
    cleanupPermissionItemIds.length &&
      deleteManyPermissionItems(endpoint, cleanupPermissionItemIds),
    cleanupProgramTokenIds.length &&
      deleteManyProgramTokens(endpoint, cleanupProgramTokenIds),
  ]);

  const errors = result.filter(r => r.status === 'rejected');
  if (errors.length) {
    console.log('Cleanup failed:', formatWithOptions({depth: 10}, errors));
    errors.forEach(e => console.error(e));
  }
}
