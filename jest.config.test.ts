// import {defaults as tsjPreset} from 'ts-jest/presets';
const {jsWithTs: tsjPreset} = require('ts-jest/presets');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['jest.config.test.ts', '/build/'],
  transform: {
    ...tsjPreset.transform,
    // '/node_modules/fetch-blob':
    //   tsjPreset.transform[Object.keys(tsjPreset.transform)[0]],
  },
  transformIgnorePatterns: [],
  // transform: {
  //   '^.+\\.(ts|tsx)?$': 'ts-jest',
  //   '^.+\\.(js|jsx)$': 'babel-jest',
  // },
};
