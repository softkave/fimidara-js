import {getTestVars, globalCleanup, ITestVars} from '../testfns/utils';
import fimidara from '../index';
import {
  addClientTokenTest,
  deleteTokenTest,
  getTokenTest,
  getWorkspaceClientTokensTest,
  updateTokenTest,
} from '../testfns/clientAssignedToken';

let vars: ITestVars;

beforeAll(async () => {
  vars = getTestVars();
  fimidara.config.setToken(vars.authToken);
});

afterAll(async () => {
  await globalCleanup(fimidara.endpoints, vars);
});

describe('client assigned tokens', () => {
  test('add token', async () => {
    await addClientTokenTest(fimidara.endpoints, vars);
  });

  test('update token', async () => {
    await updateTokenTest(fimidara.endpoints, vars);
  });

  test('delete token', async () => {
    await deleteTokenTest(fimidara.endpoints, vars);
  });

  test('get token', async () => {
    await getTokenTest(fimidara.endpoints, vars);
  });

  test('get workspace tokens', async () => {
    await getWorkspaceClientTokensTest(fimidara.endpoints, vars);
  });
});
