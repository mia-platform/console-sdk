module.exports = {
  testMatch: [
    "**/__tests__/**/*.+(ts)",
    "**/?(*.)+(spec|test).+(ts)"
  ],
  rootDir: "../..",
  roots: [
    "<rootDir>/packages/microfrontend-sdk"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", {
      "tsconfig": "<rootDir>/tsconfig.json"
    }]
  }
}