import FimidaraConfig, {IFimidaraConfig} from './config';
import Endpoints, {IEndpoints} from './endpoints/endpoints';

export * from './definitions/index';
export * from './endpoints/index';
export {getFilepath} from './utils';
export {IFimidaraConfig};

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
