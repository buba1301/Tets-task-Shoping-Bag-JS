module.exports = {
  env: {
    browser: true,
  },
  extends: ['airbnb', 'prettier', 'plugin:jest/recommended'],
  parser: 'babel-eslint',
  plugins: ['prettier', 'prettier', 'jest', 'babel'],
  rules: {
    'no-console': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
};
