const baseConfig = require('../../jest.base.config.cjs')

module.exports = {
  ...baseConfig,
  coverageDirectory: "<rootDir>/packages/microfrontend-sdk/coverage",
}