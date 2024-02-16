module.exports = {
  root: true,
  env: {
    es2022: true
  },
  extends: [
    "@mia-platform/eslint-config-mia",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/stylistic-type-checked",
  ],
  ignorePatterns: [
    ".eslintrc.cjs",
    "compiled",
    "build",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: [
      "./packages/*/tsconfig.json"
    ],
    tsconfigRootDir: __dirname
  },
  plugins: [
    "import",
    "@typescript-eslint"
  ],
  rules: {
    "import/order": ["error", {
      groups: [
        ["builtin", "external"],
      ],
      "newlines-between": "always"
    }],
    "max-statements": "off",
    "no-underscore-dangle": "off",
    "no-shadow": "off",
    "sort-imports": ["error", {
      allowSeparatedGroups: true
    }],

    /**
     * Eslint plugin Typescript
     * @link https://typescript-eslint.io/rules
     */
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/explicit-function-return-type": ["error", {
      allowExpressions: true
    }],
    "@typescript-eslint/no-shadow": ["off"],
    "@typescript-eslint/prefer-nullish-coalescing": "off",
  },
  overrides: [
    {
      files: ["packages/console-types/**/*.test.ts"],
      rules: {
        "id-length": "off",
      }
    }
  ]
}
