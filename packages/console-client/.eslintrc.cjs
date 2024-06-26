module.exports = {
  extends: ["../../.eslintrc.cjs"],
  ignorePatterns: [
    "!**/*",
    "./src/kiota-client/**/*.ts"
  ],
  overrides: [
    {
      files: ["*.ts"],
      rules: {
      },
    },
  ],
}
