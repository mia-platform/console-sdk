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
        "id-length": "off",
        "max-len": "off",
        "no-unused-variables": "off",
        "no-implicit-coercion": "off",
        "no-useless-constructor": "off",
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/dot-notation": "off",
        "@typescript-eslint/ban-tslint-comment": "off"
      },
    },
  ],
}