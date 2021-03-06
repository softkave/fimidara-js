import assert = require('assert');
import {flattenDeep, uniq} from 'lodash';
import {formatWithOptions} from 'util';
import {IEndpoints} from '../definitions';
import {EndpointResult} from '../definitions/types';
import {deleteManyClientTokens} from './clientAssignedToken';
import {deleteManyFilesById, deleteManyFilesByPath} from './file';
import {deleteManyFoldersById, deleteManyFoldersByPath} from './folder';
import {deleteManyPermissionGroups} from './permissionGroups';
import {deleteManyPermissionItems} from './permissionItem';
import {deleteManyProgramTokens} from './programAccessToken';
import path = require('path');

export interface ITestVars {
  workspaceId: string;
  workspaceRootname: string;
  authToken: string;
  testFilepath: string;

  // for global cleanup
  cleanupPermissionGroupIds: string[];
  cleanupClientTokenIds: string[];
  cleanupFileIds: string[];
  cleanupFilepaths: string[];
  cleanupFolderIds: string[];
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

export function makeTestFilepath(workspaceRootname: string, filepath: string) {
  return path.posix.normalize('/' + workspaceRootname + '/' + filepath);
}

export function getTestVars(): ITestVars {
  const workspaceId = process.env.FIMIDARA_TEST_WORKSPACE_ID;
  const authToken = process.env.FIMIDARA_TEST_AUTH_TOKEN;
  const testFilepath = process.env.FIMIDARA_TEST_FILEPATH;
  const workspaceRootname = process.env.FIMIDARA_TEST_WORKSPACE_ROOTNAME;
  assert.ok(workspaceId);
  assert.ok(authToken);
  assert.ok(testFilepath);
  assert.ok(workspaceRootname);
  return {
    workspaceId,
    workspaceRootname,
    authToken,
    testFilepath,
    cleanupClientTokenIds: [],
    cleanupFileIds: [],
    cleanupFilepaths: [],
    cleanupFolderIds: [],
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
  const cleanupFolderIds = uniq(vars.cleanupFolderIds);
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
    cleanupFolderIds.length &&
      deleteManyFoldersById(endpoint, cleanupFolderIds),
  ]);

  const errors = result.filter(r => r.status === 'rejected');
  if (errors.length) {
    console.log('Cleanup failed:', formatWithOptions({depth: 10}, errors));
    errors.forEach(e => console.error(e));
  }
}
