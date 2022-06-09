import {getTestVars, globalCleanup, ITestVars} from '../testfns/utils';
import fimidara from '../index';
import {
  uploadFileTest,
  getFileTest,
  updateFileDetailsTest,
  getFileDetailsTest,
  deleteFileTest,
} from '../testfns/file';

let vars: ITestVars;

beforeAll(async () => {
  vars = getTestVars();
  fimidara.config.setToken(vars.authToken);
});

afterAll(async () => {
  await globalCleanup(fimidara.endpoints, vars);
});

describe('file', () => {
  test('upload file', async () => {
    await uploadFileTest(fimidara.endpoints, vars);
  });

  test('get file', async () => {
    await getFileTest(fimidara.endpoints, vars);
  });

  test('update file details', async () => {
    await updateFileDetailsTest(fimidara.endpoints, vars);
  });

  test('get file details', async () => {
    await getFileDetailsTest(fimidara.endpoints, vars);
  });

  test('delete file', async () => {
    await deleteFileTest(fimidara.endpoints, vars);
  });
});
