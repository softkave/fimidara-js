import {IAppError} from './system';

export interface IEndpointResultBase {
  errors?: IAppError[];
}

export type EndpointResult<T extends object = object> = T & IEndpointResultBase;

export interface IEndpointParamsBase {
  authToken?: string;
}
