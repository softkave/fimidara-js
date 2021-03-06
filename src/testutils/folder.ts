import faker from '@faker-js/faker';
import {merge} from 'lodash';
import {PartialDeep} from 'type-fest';
import {
  AppResourceType,
  BasicCRUDActions,
  IAddFolderEndpointParams,
  IDeleteFolderEndpointParams,
  IEndpoints,
  IGetFolderEndpointParams,
  IListFolderContentEndpointParams,
  IUpdateFolderEndpointParams,
  makePublicAccessOpInputs,
} from '../definitions';
import {addRootnameToPath, filePathListToString} from '../utils';
import {uploadFileTest} from './file';
import {
  addToCleanupField,
  assertEndpointResult,
  ITestVars,
  makeTestFilepath,
  removeFromCleanupField,
} from './utils';
import assert = require('assert');

export async function deleteFolderTest(
  endpoint: IEndpoints,
  vars: ITestVars,
  props: PartialDeep<IDeleteFolderEndpointParams> = {}
) {
  let folderpath = props.folderpath;
  if (!folderpath) {
    const folder = await addFolderTest(endpoint, vars);
    folderpath = addRootnameToPath(
      filePathListToString(folder.folder.namePath),
      vars.workspaceRootname
    );
  }

  assert.ok(folderpath);
  const input: IDeleteFolderEndpointParams = {
    folderpath,
  };

  const result = await endpoint.folders.deleteFolder(input);
  assertEndpointResult(result);
  removeFromCleanupField(vars, 'cleanupFolderpaths', folderpath);
}

export async function getFolderTest(
  endpoint: IEndpoints,
  vars: ITestVars,
  props: PartialDeep<IGetFolderEndpointParams> = {}
) {
  let folderpath = props.folderpath;
  if (!folderpath) {
    const folder = await addFolderTest(endpoint, vars);
    folderpath = addRootnameToPath(
      filePathListToString(folder.folder.namePath),
      vars.workspaceRootname
    );
  }

  assert.ok(folderpath);
  const input: IGetFolderEndpointParams = {
    folderpath,
  };

  const result = await endpoint.folders.getFolder(input);
  assertEndpointResult(result);
  return result;
}

export async function updateFolderTest(
  endpoint: IEndpoints,
  vars: ITestVars,
  props: PartialDeep<IUpdateFolderEndpointParams> = {}
) {
  let folderpath = props.folderpath;
  if (!folderpath) {
    const folder = await addFolderTest(endpoint, vars);
    folderpath = addRootnameToPath(
      filePathListToString(folder.folder.namePath),
      vars.workspaceRootname
    );
  }

  assert.ok(folderpath);
  const input: IUpdateFolderEndpointParams = {
    folderpath,
    folder: {
      description: faker.lorem.sentence(),
      publicAccessOps: [
        {action: BasicCRUDActions.Read, resourceType: AppResourceType.File},
        {action: BasicCRUDActions.Update, resourceType: AppResourceType.Folder},
        {action: BasicCRUDActions.Read, resourceType: AppResourceType.Folder},
      ],
    },
  };

  const result = await endpoint.folders.updateFolder(input);
  assertEndpointResult(result);
  return result;
}

export async function listFolderContentTest(
  endpoint: IEndpoints,
  vars: ITestVars,
  props: PartialDeep<IListFolderContentEndpointParams> = {}
) {
  let folderpath = props.folderpath;
  if (!folderpath) {
    const folder = await addFolderTest(endpoint, vars);
    folderpath = filePathListToString(folder.folder.namePath);
  }

  assert.ok(folderpath);
  await Promise.all([
    addFolderTest(endpoint, vars, {
      folder: {
        folderpath: makeTestFilepath(
          vars.workspaceRootname,
          `${folderpath}/folder1`
        ),
      },
    }),
    addFolderTest(endpoint, vars, {
      folder: {
        folderpath: makeTestFilepath(
          vars.workspaceRootname,
          `${folderpath}/folder2`
        ),
      },
    }),
  ]);

  await Promise.all([
    uploadFileTest(endpoint, vars, {
      filepath: makeTestFilepath(vars.workspaceRootname, `${folderpath}/file1`),
    }),
    uploadFileTest(endpoint, vars, {
      filepath: makeTestFilepath(vars.workspaceRootname, `${folderpath}/file2`),
    }),
  ]);

  const input: IListFolderContentEndpointParams = {
    folderpath: addRootnameToPath(folderpath, vars.workspaceRootname),
  };

  const result = await endpoint.folders.listFolderContent(input);
  assertEndpointResult(result);
  return result;
}

export async function addFolderTest(
  endpoint: IEndpoints,
  vars: ITestVars,
  props: PartialDeep<IAddFolderEndpointParams> = {}
) {
  const genInput: IAddFolderEndpointParams = {
    folder: {
      description: faker.lorem.sentence(),
      folderpath: makeTestFilepath(
        vars.workspaceRootname,
        faker.system.directoryPath()
      ),
      publicAccessOps: makePublicAccessOpInputs(AppResourceType.File),
    },
  };

  const inputs = merge(genInput, props);
  const result = await endpoint.folders.addFolder(inputs);
  addToCleanupField(vars, 'cleanupFolderIds', result.folder.resourceId);
  return result;
}

export async function deleteManyFoldersByPath(
  endpoint: IEndpoints,
  folderpaths: string[]
) {
  await Promise.allSettled(
    folderpaths.map(folderpath => endpoint.folders.deleteFolder({folderpath}))
  );
}

export async function deleteManyFoldersById(
  endpoint: IEndpoints,
  ids: string[]
) {
  await Promise.allSettled(
    ids.map(folderId => endpoint.folders.deleteFolder({folderId}))
  );
}
