import fimidara from '../index';
import {
  addClientTokenTest,
  deleteTokenTest,
  getTokenTest,
  getWorkspaceClientTokensTest,
  updateTokenTest,
} from '../testutils/clientAssignedToken';
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

describe('client assigned tokens', () => {
  test('add client token', async () => {
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
