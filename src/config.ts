import {merge} from 'lodash';

export interface IConfig {
  authToken?: string;
}

const config: IConfig = {};

function setConfig(params: Partial<IConfig>) {
  merge(config, params);
}

function getConfig() {
  return config;
}

export default class FilesConfig {
  static setConfig = setConfig;
  static getConfig = getConfig;
}
