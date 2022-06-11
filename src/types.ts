import {IAppError} from './definitions/system';

export interface IEndpointResultBase {
  errors?: IAppError[];
}

export type GetEndpointResult<T extends object = object> = T &
  IEndpointResultBase;

export interface IEndpointParamsBase {
  authToken?: string;
}
