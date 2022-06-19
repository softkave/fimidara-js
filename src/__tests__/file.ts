import fimidara from '../index';
import {
  deleteFileTest,
  getFileDetailsTest,
  getFileTest,
  updateFileDetailsTest,
  uploadFileTest,
} from '../testutils/file';
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
