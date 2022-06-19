import {merge} from 'lodash';

/** @category Config */
export interface IConfig {
  /**
   * Auth token. Can be a program access token or a client assigned token.
   *
   * @todo support user tokens.
   */
  authToken?: string;
}

/** @category Config */
export interface IFimidaraConfig {
  setAuthToken: (token: string) => void;
  setConfig: (params: Partial<IConfig>) => void;
  getConfig: () => IConfig;
}

const config: IConfig = {};
const FimidaraConfig: IFimidaraConfig = {
  setAuthToken(token: string) {
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
