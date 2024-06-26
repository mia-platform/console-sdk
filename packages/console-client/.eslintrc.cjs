module.exports = {
  extends: ["../../.eslintrc.cjs"],
  ignorePatterns: [
    "src/kiota-client/*",
  ],
  overrides: [
    {
      files: ["src/test/**/*test.ts"],
      rules: {
        "id-length": "off",
      },
    },
  ],
}
