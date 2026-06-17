module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
  ignorePatterns: ["dist/*"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
      plugins: ["@typescript-eslint"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
      rules: {
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/explicit-module-boundary-types": "warn",
        "@typescript-eslint/consistent-type-imports": "warn",
        "@typescript-eslint/prefer-readonly": "warn",
        "@typescript-eslint/explicit-function-return-type": "warn",
        "@typescript-eslint/prefer-optional-chain": "warn",
      },
    },
  ],
};
