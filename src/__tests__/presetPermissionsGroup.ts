import fimidara from '..';
import {
  addPermissionGroupTest,
  deletePermissionGroupTest,
  getPermissionGroupTest,
  getWorkspacePermissionGroupsTest,
  updatePermissionGroupTest,
} from '../testutils/permissionGroups';
import {getTestVars, globalCleanup, ITestVars} from '../testutils/utils';

jest.setTimeout(600000); // 10 minutes
let vars: ITestVars;

beforeAll(async () => {
  vars = getTestVars();
  fimidara.config.setToken(vars.authToken);
});

afterAll(async () => {
  await globalCleanup(fimidara.endpoints, vars);
});

describe('permission group permission group', () => {
  test('update permission group', async () => {
    await updatePermissionGroupTest(fimidara.endpoints, vars);
  });

  test('delete permission group', async () => {
    await deletePermissionGroupTest(fimidara.endpoints, vars);
  });

  test('get permission group', async () => {
    await getPermissionGroupTest(fimidara.endpoints, vars);
  });

  test('get workspace permission groups', async () => {
    await getWorkspacePermissionGroupsTest(fimidara.endpoints, vars);
  });

  test('add permission group', async () => {
    await addPermissionGroupTest(fimidara.endpoints, vars);
  });
});
