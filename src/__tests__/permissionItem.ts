import fimidara from '..';
import {
  addItemsTest,
  deleteItemsByIdTest,
  getEntityPermissionItemsTest,
  getResourcePermissionItemsTest,
  replacePermissionItemsByEntityTest,
} from '../testutils/permissionItem';
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

describe('permission item', () => {
  test('replace permission items by entity', async () => {
    await replacePermissionItemsByEntityTest(fimidara.endpoints, vars);
  });

  test('add items', async () => {
    await addItemsTest(fimidara.endpoints, vars);
  });

  test('delete items by id', async () => {
    await deleteItemsByIdTest(fimidara.endpoints, vars);
  });

  test('get resource permission items', async () => {
    await getResourcePermissionItemsTest(fimidara.endpoints, vars);
  });

  test('get entity permission items', async () => {
    await getEntityPermissionItemsTest(fimidara.endpoints, vars);
  });
});
