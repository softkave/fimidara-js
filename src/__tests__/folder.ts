import fimidara from '..';
import {
  addFolderTest,
  deleteFolderTest,
  getFolderTest,
  listFolderContentTest,
  updateFolderTest,
} from '../testutils/folder';
import {getTestVars, globalCleanup, ITestVars} from '../testutils/utils';

let vars: ITestVars;

jest.setTimeout(600000); // 10 minutes
beforeAll(async () => {
  vars = getTestVars();
  fimidara.config.setAuthToken(vars.authToken);
});

afterAll(async () => {
  await globalCleanup(fimidara.endpoints, vars);
});

describe('folder', () => {
  test('add folder', async () => {
    await addFolderTest(fimidara.endpoints, vars);
  });

  test('list folder content', async () => {
    await listFolderContentTest(fimidara.endpoints, vars);
  });

  test('update folder', async () => {
    await updateFolderTest(fimidara.endpoints, vars);
  });

  test('get folder', async () => {
    await getFolderTest(fimidara.endpoints, vars);
  });

  test('delete folder', async () => {
    await deleteFolderTest(fimidara.endpoints, vars);
  });
});
