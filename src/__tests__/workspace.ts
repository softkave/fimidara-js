import fimidara from '..';
import {getTestVars, globalCleanup, ITestVars} from '../testutils/utils';
import {getWorkspaceTest, updateWorkspaceTest} from '../testutils/workspace';

jest.setTimeout(60000); // 1 minutes
let vars: ITestVars;

beforeAll(async () => {
  vars = getTestVars();
  fimidara.config.setAuthToken(vars.authToken);
});

afterAll(async () => {
  await globalCleanup(fimidara.endpoints, vars);
});

describe('workspace', () => {
  test('update workspace', async () => {
    await updateWorkspaceTest(fimidara.endpoints, vars);
  });

  test('get workspace', async () => {
    await getWorkspaceTest(fimidara.endpoints, vars);
  });
});
