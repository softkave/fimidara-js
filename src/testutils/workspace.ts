import faker from '@faker-js/faker';
import assert = require('assert');
import {merge} from 'lodash';
import {PartialDeep} from 'type-fest';
import {
  IGetWorkspaceEndpointParams,
  IUpdateWorkspaceEndpointParams,
} from '../endpoints';
import Endpoints from '../endpoints/endpoints';
import {assertEndpointResult, ITestVars} from './utils';

export async function getWorkspaceTest(
  endpoint: Endpoints,
  vars: ITestVars,
  props: PartialDeep<IGetWorkspaceEndpointParams> = {}
) {
  const genInput: IGetWorkspaceEndpointParams = {
    workspaceId: vars.workspaceId,
  };
  const input: IGetWorkspaceEndpointParams = merge(genInput, props);
  const result = await endpoint.workspace.getWorkspace(input);
  assertEndpointResult(result);
  assert(result.workspace.resourceId === vars.workspaceId);
  return result;
}

export async function updateWorkspaceTest(
  endpoint: Endpoints,
  vars: ITestVars,
  props: PartialDeep<IUpdateWorkspaceEndpointParams> = {}
) {
  const genInput: IUpdateWorkspaceEndpointParams = {
    workspaceId: vars.workspaceId,
    workspace: {
      name: faker.company.companyName(),
    },
  };
  const input: IUpdateWorkspaceEndpointParams = merge(genInput, props);
  const result = await endpoint.workspace.updateWorkspace(input);
  assertEndpointResult(result);
  assert(result.workspace.name === input.workspace.name);
  return result;
}
