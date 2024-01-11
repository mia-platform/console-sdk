const baseConfig = require('../../jest.base.config.cjs')

module.exports = {
  ...baseConfig,
  coverageDirectory: "<rootDir>/packages/vite-helpers-console-microfrontend/coverage"
}