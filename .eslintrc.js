/**
 * Source
 * https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project
 * https://thesoreon.com/blog/how-to-set-up-eslint-with-typescript-in-vs-code
 */

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],

  ignorePatterns: ['.eslintrc.js', 'webpack.config.js'],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['sort-keys-fix'],
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        pathGroups: [
          {
            group: 'internal',
            pattern: '~/**',
          },
        ],
      },
    ],
    'react/display-name': 0,
    'react/prop-types': ['off'],
    'sort-keys-fix/sort-keys-fix': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
