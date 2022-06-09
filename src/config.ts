import {merge} from 'lodash';

export interface IConfig {
  authToken?: string;
}

export interface IFimidaraConfig {
  setToken: (token: string) => void;
  setConfig: (params: Partial<IConfig>) => void;
  getConfig: () => IConfig;
}

const config: IConfig = {};
const FimidaraConfig: IFimidaraConfig = {
  setToken(token: string) {
    config.authToken = token;
  },

  setConfig(params: Partial<IConfig>) {
    merge(config, params);
  },

  getConfig() {
    return config;
  },
};

export default FimidaraConfig;
