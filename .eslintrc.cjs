module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-prettier',
    'eslint-plugin-unicorn',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  rules: {},
  overrides: [
    {
      files: ["**/*.cjs"],
      globals: {
        module: "readonly"
      }
    }
  ]
};