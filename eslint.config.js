import js from "@eslint/js";
import globals from "globals";
import tsEslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

import pluginReact from "eslint-plugin-react";
import pluginImport from "eslint-plugin-import";
import pluginA11y from "eslint-plugin-jsx-a11y";
import pluginPrettier from "eslint-plugin-prettier/recommended";
import pluginHooks from "eslint-plugin-react-hooks";
import pluginPreferArrowFunctions from "eslint-plugin-prefer-arrow-functions";
import pluginJest from "eslint-plugin-jest";
import pluginSonar from "eslint-plugin-sonarjs";

/** @type {import('eslint').Linter.Config}*/
export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
  },
  {
    plugins: {
      "prefer-arrow": pluginPreferArrowFunctions,
    },
    rules: {
      "prefer-arrow/prefer-arrow-functions": [
        "error",
        {
          disallowPrototype: true,
          singleReturnOnly: false,
          classPropertiesAllowed: false,
        },
      ],
      "no-restricted-syntax": "error",
    },
  },
  tsEslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginPrettier,
  pluginImport.flatConfigs.recommended,
  pluginA11y.flatConfigs.recommended,
  pluginJest.configs["flat/recommended"],
  pluginHooks.configs["recommended-latest"],
  pluginSonar.configs.recommended,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "sonarjs/pseudo-random": "warn",
      "no-console": "error",
      "no-debugger": "error",
      "no-alert": "error",
      "@typescript-eslint/prefer-enum-initializers": "error",
      "@typescript-eslint/no-unsafe-unary-minus": "error",
      "@typescript-eslint/prefer-for-of": "error",
      "default-param-last": "off",
      "@typescript-eslint/default-param-last": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: false,
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "no-undef": "error",
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],
      "no-var": "error",
      "prefer-const": ["error", { destructuring: "all" }],
      "no-implicit-coercion": "error",
      "no-magic-numbers": [
        "warn",
        {
          ignoreArrayIndexes: true,
          enforceConst: true,
          ignore: [0, 1, -1],
        },
      ],
      complexity: ["warn", 8],
      "max-depth": ["warn", 4],
      "max-lines": ["warn", 300],
      "max-params": ["warn", 4],
      "max-statements": ["warn", 20],
      "no-nested-ternary": "error",
      "no-else-return": "error",
      "default-case": "error",
    },
  },
  { ignores: ["./*", "!./src", "!./public"] },
  {
    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },
  },
]);
