import Endpoints from './endpoints/endpoints';
import FimidaraConfig, {IFimidaraConfig} from './config';

export * from './config';
export * from './endpoints/index';
export * from './definitions/index';

export interface IFimidara {
  config: IFimidaraConfig;
  endpoints: Endpoints;
}

const endpoints = new Endpoints();
const config = FimidaraConfig;
const fimidara: IFimidara = {
  endpoints,
  config,
};

export default fimidara;
