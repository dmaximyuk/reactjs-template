import { defineConfig } from "eslint/config";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

import js from "@eslint/js";
import globals from "globals";
import tsEslint from "typescript-eslint";

import pluginA11y from "eslint-plugin-jsx-a11y";
import pluginHooks from "eslint-plugin-react-hooks";
import pluginImport from "eslint-plugin-import";
import pluginJest from "eslint-plugin-jest";
import pluginPrettier from "eslint-plugin-prettier/recommended";
import pluginReact from "eslint-plugin-react";
import pluginSonar from "eslint-plugin-sonarjs";
import unicorn from "eslint-plugin-unicorn";

/** @type {import('eslint').Linter.Config} */
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

  tsEslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginPrettier,
  pluginImport.flatConfigs.recommended,
  pluginA11y.flatConfigs.recommended,
  pluginJest.configs["flat/recommended"],
  pluginHooks.configs["recommended-latest"],
  pluginSonar.configs.recommended,

  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: dirname(fileURLToPath(import.meta.url)),
      },
      globals: globals.browser,
    },
    plugins: { unicorn },
    rules: {
      curly: ["error", "all"],
      complexity: ["warn", 10],
      "default-case": "error",
      "default-param-last": "off",
      eqeqeq: ["error", "always"],
      "max-depth": ["warn", 8],
      "max-lines": ["warn", 300],
      "max-statements": ["warn", 20],
      "no-alert": "error",
      "no-console": ["error", { allow: ["warn", "error", "debug"] }],
      "no-debugger": "error",
      "no-else-return": "error",
      "no-implicit-coercion": "error",
      "no-implied-eval": "error",
      "no-magic-numbers": "off",
      "no-nested-ternary": "error",
      "no-param-reassign": "error",
      "no-undef": "error",
      "no-var": "error",
      "prefer-const": ["error", { destructuring: "all" }],
      "prefer-template": "error",

      "@typescript-eslint/default-param-last": "error",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-unary-minus": "off",
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
      "@typescript-eslint/prefer-enum-initializers": "off",

      "react/react-in-jsx-scope": "off",

      "import/no-cycle": "error",
      "import/no-mutable-exports": "error",

      "sonarjs/pseudo-random": "off",

      "unicorn/no-for-loop": "off",
      "unicorn/no-null": "off",
      "unicorn/prefer-optional-catch-binding": "error",
      "unicorn/prefer-top-level-await": "off",
    },
  },

  { ignores: ["./*", "!./src", "!./public"] },

  {
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
        node: {
          extensions: [".js", ".ts", ".tsx"],
        },
      },
    },
  },
]);
