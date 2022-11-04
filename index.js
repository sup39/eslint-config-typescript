// SPDX-License-Identifier: MIT
// Copyright (c) 2022 sup39[サポミク]

module.exports = {
  extends: [
    '@sup39/eslint-config-basic',
  ],
  plugins: [
    '@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-use-before-define': 'off',
    // '@typescript-eslint/no-use-before-define': ['error'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', {
      args: 'after-used',
      varsIgnorePattern: '^_',
      argsIgnorePattern: '^_',
      ignoreRestSiblings: true,
      // allow _* and 1-letter var (e.g. `k`)
      destructuredArrayIgnorePattern: "^_|^.$"
    }]
  },
};
