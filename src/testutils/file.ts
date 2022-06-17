import faker from '@faker-js/faker';
import {createReadStream} from 'fs';
import {merge} from 'lodash';
import {PartialDeep} from 'type-fest';
import {
  IDeleteFileEndpointParams,
  IEndpoints,
  IGetFileDetailsEndpointParams,
  IGetFileEndpointParams,
  IUpdateFileDetailsEndpointParams,
  IUploadFileEndpointParams,
  UploadFilePublicAccessActions,
} from '../definitions';
import {getFilepath} from '../utils';
import {
  addToCleanupField,
  assertEndpointResult,
  ITestVars,
  makeTestFilepath,
  removeFromCleanupField,
} from './utils';
import assert = require('assert');
import path = require('path');

export async function deleteFileTest(
  endpoint: IEndpoints,
  vars: ITestVars,
  props: PartialDeep<IDeleteFileEndpointParams> = {}
) {
  let filepath = props.filepath;
  if (!filepath) {
    const file = await uploadFileTest(endpoint, vars);
    filepath = getFilepath(file.file.namePath);
  }
  assert.ok(filepath);
  const input: IDeleteFileEndpointParams = {
    filepath,
  };
  const result = await endpoint.files.deleteFile(input);
  assertEndpointResult(result);
  removeFromCleanupField(vars, 'cleanupFilepaths', filepath);
}

export async function getFileDetailsTest(
  endpoint: IEndpoints,
  vars: ITestVars,
  props: PartialDeep<IGetFileDetailsEndpointParams> = {}
) {
  let filepath = props.filepath;
  if (!filepath) {
    const file = await uploadFileTest(endpoint, vars);
    filepath = getFilepath(file.file.namePath);
  }
  assert.ok(filepath);
  const input: IGetFileDetailsEndpointParams = {
    filepath,
  };
  const result = await endpoint.files.getFileDetails(input);
  assertEndpointResult(result);
  return result;
}

export async function updateFileDetailsTest(
  endpoint: IEndpoints,
  vars: ITestVars,
  props: PartialDeep<IUpdateFileDetailsEndpointParams> = {}
) {
  let filepath = props.filepath;
  if (!filepath) {
    const file = await uploadFileTest(endpoint, vars);
    filepath = getFilepath(file.file.namePath);
  }
  assert.ok(filepath);
  const input: IUpdateFileDetailsEndpointParams = {
    filepath,
    file: {
      description: faker.lorem.sentence(),
      mimetype: faker.system.mimeType(),
    },
  };
  const result = await endpoint.files.updateFileDetails(input);
  assertEndpointResult(result);
  return result;
}

export async function getFileTest(
  endpoint: IEndpoints,
  vars: ITestVars,
  props: PartialDeep<IGetFileEndpointParams> = {}
) {
  let filepath = props.filepath;
  if (!filepath) {
    const file = await uploadFileTest(endpoint, vars);
    filepath = getFilepath(file.file.namePath);
  }
  assert.ok(filepath);
  const input: IGetFileEndpointParams = {
    filepath,
  };
  const result = await endpoint.files.getFile(input);
  assertEndpointResult(result);
  return result;
}

export async function uploadFileTest(
  endpoint: IEndpoints,
  vars: ITestVars,
  props: PartialDeep<IUploadFileEndpointParams> = {}
) {
  const filepath = path.normalize(process.cwd() + vars.testFilepath);
  const genInput: IUploadFileEndpointParams = {
    // data: blobFromSync(filepath).stream(),
    data: createReadStream(filepath),
    description: faker.lorem.sentence(),
    encoding: 'base64',
    // extension: faker.system.fileExt(),
    filepath: makeTestFilepath(faker.system.filePath()),
    mimetype: faker.system.mimeType(),
    publicAccessActions: UploadFilePublicAccessActions.ReadUpdateAndDelete,
  };
  const inputs = merge(genInput, props);
  const result = await endpoint.files.uploadFile(inputs);
  addToCleanupField(vars, 'cleanupFilepaths', result.file.resourceId);
  return result;
}

export async function deleteManyFilesByPath(
  endpoint: IEndpoints,
  filepaths: string[]
) {
  await Promise.allSettled(
    filepaths.map(filepath => endpoint.files.deleteFile({filepath}))
  );
}

export async function deleteManyFilesById(endpoint: IEndpoints, ids: string[]) {
  await Promise.allSettled(
    ids.map(fileId => endpoint.files.deleteFile({fileId}))
  );
}
