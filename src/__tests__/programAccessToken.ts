import fimidara from '..';
import {
  updateTokenTest,
  deleteTokenTest,
  getTokenTest,
} from '../testfns/clientAssignedToken';
import {
  getWorkspaceProgramTokensTest,
  addProgramTokenTest,
} from '../testfns/programAccessToken';
import {ITestVars, getTestVars, globalCleanup} from '../testfns/utils';

let vars: ITestVars;

beforeAll(async () => {
  vars = getTestVars();
  fimidara.config.setToken(vars.authToken);
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
