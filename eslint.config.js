
// eslint.config.js
import js from "@eslint/js";
import jest from "eslint-plugin-jest";
import babelParser from "@babel/eslint-parser";

export default [
  {
    ...js.configs.recommended,
    ignores: [
      '!.*',
      '**/assets/**',
      '**/node_modules/**',
      '**/dist/**',
      './coverage/**',
      '*.json',
      '**/.git/**'
    ],
    rules: {
      "no-console": "warn", // Warns about console.log statements
      "no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
      "consistent-return": "error", // Ensure consistent return statements in functions
      "curly": ["error", "multi-line"], // Enforce consistent brace style for all control statements
      "eqeqeq": ["error", "always"], // Require the use of === and !==
      "no-duplicate-imports": "error", // Disallow duplicate imports
      "prefer-const": "error", // Prefer const over let for variables that are never reassigned
      "no-var": "error", // Disallow the use of var and encourage let or const
      camelcase: 'off',
      'eslint-comments/no-use': 'off',
      'eslint-comments/no-unused-disable': 'off',
      'import/no-commonjs': 'off',
      'import/no-namespace': 'off',
      semi: 'off'
    },
    plugins: {
      jest
    },
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 2023, // Support for modern ECMAScript features
        requireConfigFile: false, // Optional: If you don't have a Babel config file
        babelOptions: {
          presets: ["jest"] // Ensure you have this preset installed
        },
        sourceType: "module", // Allows for the use of imports
        ecmaFeatures: {
          jsx: true // Enable JSX if you're using React
        }
      }
    },
  }
]
