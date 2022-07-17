import fimidara from '..';
import {
  deleteTokenTest,
  getTokenTest,
  updateTokenTest,
} from '../testutils/clientAssignedToken';
import {
  addProgramTokenTest,
  getWorkspaceProgramTokensTest,
} from '../testutils/programAccessToken';
import {getTestVars, globalCleanup, ITestVars} from '../testutils/utils';

jest.setTimeout(60000); // 1 minutes
let vars: ITestVars;

beforeAll(async () => {
  vars = getTestVars();
  fimidara.config.setAuthToken(vars.authToken);
});

afterAll(async () => {
  await globalCleanup(fimidara.endpoints, vars);
});

describe('program access token', () => {
  test('update token', async () => {
    await updateTokenTest(fimidara.endpoints, vars);
  });

  test('delete token', async () => {
    await deleteTokenTest(fimidara.endpoints, vars);
  });

  test('get token', async () => {
    await getTokenTest(fimidara.endpoints, vars);
  });

  test('get workspace program tokens', async () => {
    await getWorkspaceProgramTokensTest(fimidara.endpoints, vars);
  });

  test('add program token', async () => {
    await addProgramTokenTest(fimidara.endpoints, vars);
  });
});
