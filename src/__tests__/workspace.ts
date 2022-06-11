import fimidara from '..';
import {getTestVars, globalCleanup, ITestVars} from '../testutils/utils';
import {getWorkspaceTest, updateWorkspaceTest} from '../testutils/workspace';

jest.setTimeout(600000); // 10 minutes
let vars: ITestVars;

beforeAll(async () => {
  vars = getTestVars();
  fimidara.config.setToken(vars.authToken);
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
