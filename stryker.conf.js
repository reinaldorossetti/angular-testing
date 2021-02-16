/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  _comment:
    "This config was generated using 'stryker init'. Please see the guide for more information: https://stryker-mutator.io/docs/stryker/guides/angular",
  mutate: ['src/**/*.ts', '!src/**/*.spec.ts', '!src/test.ts', '!src/environments/*.ts'],
  testRunner: 'jest',
  jest: {
      "projectType": "custom",
      "configFile": "jest.config.js",
      "config": {
        "testEnvironment": "jest-environment-jsdom-sixteen"
      },
      "enableFindRelatedTests": false,
    },
  reporters: ['progress', 'clear-text', 'html'],
  concurrency: 11,
  concurrency_comment: 'Recommended to use about half of your available cores when running stryker with angular',
  coverageAnalysis: 'perTest',
};
