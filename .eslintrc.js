module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'operator-linebreak': 'off',
    'dot-notation': 'off',
    'comma-dangle': 'off',
    'semi': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
