import faker from '@faker-js/faker';
import {merge} from 'lodash';
import {PartialDeep} from 'type-fest';
import {
  IEndpoints,
  IGetWorkspaceEndpointParams,
  IUpdateWorkspaceEndpointParams,
  makeRootnameFromName,
} from '../definitions';
import {assertEndpointResult, ITestVars} from './utils';
import assert = require('assert');

export async function getWorkspaceTest(
  endpoint: IEndpoints,
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
  endpoint: IEndpoints,
  vars: ITestVars,
  props: PartialDeep<IUpdateWorkspaceEndpointParams> = {}
) {
  const defaultCompanyName = faker.company.companyName();
  const genInput: IUpdateWorkspaceEndpointParams = {
    workspaceId: vars.workspaceId,
    workspace: {
      name: defaultCompanyName,
      rootname: makeRootnameFromName(defaultCompanyName),
    },
  };
  const input: IUpdateWorkspaceEndpointParams = merge(genInput, props);
  const result = await endpoint.workspace.updateWorkspace(input);
  assertEndpointResult(result);
  assert(result.workspace.name === input.workspace.name);
  return result;
}
