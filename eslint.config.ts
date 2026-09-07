import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  // Files we don't want ESLint to check
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'build/**',
      'coverage/**',
      'docs/**',
      'examples/**',
    ],
  },

  // ESLint's recommended JavaScript rules
  js.configs.recommended,

  // TypeScript support
  ...tseslint.configs.recommended,

  // Rules for our TypeScript files
  {
    files: ['**/*.ts'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        setTimeout: 'readonly',
        setInterval: 'readonly',
        clearTimeout: 'readonly',
        clearInterval: 'readonly',
        global: 'readonly',
        URL: 'readonly',
      },
    },

    rules: {
      // Variables
      'no-unused-vars': 'off',

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      // JavaScript quality
      'no-console': 'off',
      'prefer-const': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-arrow-callback': 'error',
      eqeqeq: 'error',
      'no-duplicate-imports': 'error',
      'no-else-return': 'error',

      // Formatting
      indent: ['error', 2, { SwitchCase: 1 }],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'no-trailing-spaces': 'error',
      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
        },
      ],

      // TypeScript
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },

  // Rules specifically for tests
  {
    files: ['tests/**/*.ts'],

    languageOptions: {
      globals: {
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
      },
    },
  },
];
