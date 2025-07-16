module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: [
    "react",
    "react-hooks",
    "jsx-a11y",
    "@typescript-eslint",
    "prettier",
    "eslint-comments",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended", // обязательно последним
  ],
  ignorePatterns: [
    "firebase-messaging-sw.js",
    "service-worker.js",
    "node_modules/",
    "dist/",
    "build/",
  ],
  rules: {
    "prettier/prettier": "warn",

    "no-useless-escape": "off",
    "no-empty": ["warn", { allowEmptyCatch: true }],
    "no-console": "warn",
    "no-prototype-builtins": "off",
    "no-irregular-whitespace": "error",

    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }],

    "react-hooks/exhaustive-deps": "warn",

    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/ban-ts-comment": [
      "warn",
      { "ts-ignore": "allow-with-description" },
    ],
    "@typescript-eslint/no-empty-function": [
      "warn",
      { allow: ["arrowFunctions", "functions"] },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/no-var-requires": "off",

    "no-empty-pattern": "off",

    "eslint-comments/no-disable-enable-pair": [
      "error",
      { allowWholeFile: false },
    ],
    "eslint-comments/no-unlimited-disable": "error",

    "eslint-comments/no-use": [
      "error",
      {
        allow: [],
      },
    ],

    "eslint-comments/require-description": [
      "error",
      {
        ignore: [],
        minimumDescriptionLength: 5,
      },
    ],
  },
};
