import fimidara from '..';
import {
  addPresetTest,
  deletePresetTest,
  getPresetTest,
  getWorkspacePresetsTest,
  updatePresetTest,
} from '../testutils/presetPermissionsGroup';
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

describe('preset permission group', () => {
  test('update preset', async () => {
    await updatePresetTest(fimidara.endpoints, vars);
  });

  test('delete preset', async () => {
    await deletePresetTest(fimidara.endpoints, vars);
  });

  test('get preset', async () => {
    await getPresetTest(fimidara.endpoints, vars);
  });

  test('get workspace presets', async () => {
    await getWorkspacePresetsTest(fimidara.endpoints, vars);
  });

  test('add preset', async () => {
    await addPresetTest(fimidara.endpoints, vars);
  });
});
