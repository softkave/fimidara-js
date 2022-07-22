// import {defaults as tsjPreset} from 'ts-jest/presets';
const {jsWithTs: tsjPreset} = require('ts-jest/presets');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['jest.config.test.ts', '/build/'],
  transform: {
    ...tsjPreset.transform,
  },
  transformIgnorePatterns: [],
};
