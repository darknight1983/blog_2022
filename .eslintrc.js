// eslint-disable-next-line no-undef
module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    'import/prefer-default-export': 0,
    'no-console': [
      'error',
      {
        allow: ['error'],
      },
    ],
    'no-const-assign': 'warn',
    'no-extra-semi': 'error',
    'no-undef': 'warn',
    'no-unreachable': 'warn',
    'no-unsafe-finally': 'warn',
    'no-unused-vars': 'warn',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: true,
      },
    ],
    'react/no-array-index-key': 'warn',
    'prefer-const': 'warn',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 1,
    'react/no-unused-state': 'warn',
    'react/react-in-jsx-scope': 0,
    semi: ['error', 'always'],
  },
};
