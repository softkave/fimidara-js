import FimidaraConfig, {IFimidaraConfig} from './config';
import Endpoints from './endpoints/endpoints';

export * from './config';
export * from './definitions/index';
export * from './endpoints/index';

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
