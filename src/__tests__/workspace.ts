import fimidara from '..';
import {ITestVars, getTestVars, globalCleanup} from '../testfns/utils';
import {getWorkspaceTest, updateWorkspaceTest} from '../testfns/workspace';

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
