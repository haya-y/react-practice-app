module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'react-app', 'react-app/jest'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    /**
     * 全て手動で追加(be-withの設定からコピー)
     */
    'react/no-danger': 'off',
    // 'no-console': 'off',
    'no-unused-vars': 'off',
    'jsx-a11y/label-has-associated-control': 0,
    'react/button-has-type': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/no-array-index-key': 'off',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-one-expression-per-line': 'off',
    // '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-unused-vars': 'off',
    'react/no-unused-prop-types': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'class-methods-use-this': 'off',
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-template-curly-in-string': 'off',
    'no-restricted-syntax': 'off',
    'no-await-in-loop': 'off',
    'import/extensions': ['error', { extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'] }],
    'react/prop-types': 'off',
    'spaced-comment': ['error', 'always', { markers: ['/ <reference'] }],
    'react/react-in-jsx-scope': 'off',
    'linebreak-style': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/require-default-props': 'off',
    camelcase: 'off',

    // ↓を追加すると自動整形されなくなる
    // "arrow-body-style": ["always"],
    // 'arrow-body-style': ['as-needed'],
    // 'arrow-body-style': ['correct'],
  },

  /**
   * 全て手動で追加(be-withの設定からコピー)
   */
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
