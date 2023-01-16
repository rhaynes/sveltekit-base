module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    allowImportExportEverywhere: true
  },
  env: {
    es6: true,
    browser: true
  },
  extends: ['airbnb-base', 'prettier', 'plugin:prettier/recommended'],
  plugins: ['svelte3'],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    },
    {
      files: ['*.test.js'],
      rules: {
        'max-lines': ['error', 1000]
      }
    }
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-underscore-dangle': 0,
    'no-console': 0,
    'no-unused-vars': 'warn',
    'no-shadow': 'warn',
    'no-param-reassign': ['warn', { props: true, ignorePropertyModificationsFor: ['$P'] }],
    complexity: ['warn', 15],
    'max-lines': ['error', 500],
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    'class-methods-use-this': 'off',
    'import/no-unresolved': 'warn',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 0,
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    // note you must disable the base rule as it can report incorrect errors
    'no-use-before-define': 'off',
    'import/no-import-module-exports ': 'off',
    'import/prefer-default-export': 'off',
    'func-names': 'off',
    eqeqeq: 'off',
    'no-plusplus': 'off',
    'no-bitwise': 'off',
    'no-return-await': 'off',
    'spaced-comment': ['error', 'always', { exceptions: ['#isomorphic'] }],
    'no-await-in-loop': 0,
    'no-restricted-syntax': 0
  },
  settings: {
    // ...
  }
};
