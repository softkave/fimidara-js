import fimidara from '..';
import {
  addFolderTest,
  listFolderContentTest,
  updateFolderTest,
  getFolderTest,
  deleteFolderTest,
} from '../testfns/folder';
import {ITestVars, getTestVars, globalCleanup} from '../testfns/utils';

let vars: ITestVars;

beforeAll(async () => {
  vars = getTestVars();
  fimidara.config.setToken(vars.authToken);
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
