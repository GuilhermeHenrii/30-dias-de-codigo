module.exports = {
  env: {
    es2021: true,
    browser: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        browser: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'class-methods-use-this': 'off',
  },
};
