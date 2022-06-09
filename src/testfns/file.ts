import faker from '@faker-js/faker';
import assert = require('assert');
import {merge} from 'lodash';
import {Blob} from 'node-fetch';
import {PartialDeep} from 'type-fest';
import {UploadFilePublicAccessActions} from '../definitions';
import {
  IDeleteFileEndpointParams,
  IGetFileDetailsEndpointParams,
  IUpdateFileDetailsEndpointParams,
  IGetFileEndpointParams,
  IUploadFileEndpointParams,
} from '../endpoints';
import Endpoints from '../endpoints/endpoints';
import {getFilepath} from '../utils';
import {
  ITestVars,
  assertEndpointResult,
  addToCleanupField,
  makeTestFilepath,
} from './utils';

export async function deleteFileTest(
  endpoint: Endpoints,
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
  return result;
}

export async function getFileDetailsTest(
  endpoint: Endpoints,
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
  endpoint: Endpoints,
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
  endpoint: Endpoints,
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
  endpoint: Endpoints,
  vars: ITestVars,
  props: PartialDeep<IUploadFileEndpointParams> = {}
) {
  const genInput: IUploadFileEndpointParams = {
    data: new Blob(Array(1024 * 1024).fill(1)),
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
  endpoint: Endpoints,
  filepaths: string[]
) {
  await Promise.all(
    filepaths.map(filepath => endpoint.files.deleteFile({filepath}))
  );
}

export async function deleteManyFilesById(endpoint: Endpoints, ids: string[]) {
  await Promise.all(ids.map(fileId => endpoint.files.deleteFile({fileId})));
}
