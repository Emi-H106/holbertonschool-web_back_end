import js from "@eslint/js";
import globals from "globals";
import jestPlugin from "eslint-plugin-jest";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: "module",
      globals: {
        ...globals.es2021,
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
      },
    },
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      "max-classes-per-file": "off",
      "no-underscore-dangle": "off",
      "no-console": "off",
      "no-shadow": "off",
      "no-restricted-syntax": [
        "error",
        "LabeledStatement",
        "WithStatement",
      ],
    },
  },
];
