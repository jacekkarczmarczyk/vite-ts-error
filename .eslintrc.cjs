/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: ['jkarczm/vue'],
  ignorePatterns: ['dist/'],
  parserOptions: {
    project: 'tsconfig.json',
  }
};
