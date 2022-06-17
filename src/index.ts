import FimidaraConfig, {IConfig, IFimidaraConfig} from './config';
import {IEndpoints} from './definitions/endpoints';
import Endpoints from './endpoints/endpoints';

export * from './definitions/index';
export * from './endpoints/index';
export {getFilepath} from './utils';
export {IFimidaraConfig, IConfig};

export interface IFimidara {
  config: IFimidaraConfig;
  endpoints: IEndpoints;
}

const endpoints = new Endpoints();
const config = FimidaraConfig;
const fimidara: IFimidara = {
  endpoints,
  config,
};

export default fimidara;
