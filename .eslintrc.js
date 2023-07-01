module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    curly: 'error',
    'no-debugger': 'warn',
    eqeqeq: [2, 'allow-null'],
    'object-shorthand': ['warn', 'always'],
    'no-empty-pattern': 'warn',
    'no-var': 'error',
    'react-hooks/exhaustive-deps': ['warn'],
    'react/display-name': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
  },
  ignorePatterns: ['node_modules', '*.js'],
}
