import paths from './config/paths'
import restrictedGlobals from 'confusing-browser-globals'

export default {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  env: {
    es6: true,
    commonjs: true,
    browser: true,
    node: true,
    es2020: true,
    jest: true,
  },
  globals: {
    __DEV__: true,
    __BROWSER__: true,
    __SERVER__: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: paths.resolveModules,
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  plugins: ['babel', 'import', 'react', 'react-hooks', 'jsx-a11y', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        bracketSpacing: true,
        jsxSingleQuote: true,
        printWidth: 85,
        quoteProps: 'as-needed',
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        useTabs: false,
        trailingComma: 'es5',
      },
    ],
    'arrow-parens': 0,
    'no-tabs': 'error',
    'no-console': 'off',
    'no-eq-null': 2,
    'no-eval': 2,
    'no-else-return': 2,
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-useless-escape': 2,
    'no-void': 2,
    'no-var': 2,
    eqeqeq: 2,
    'no-restricted-globals': [2].concat(restrictedGlobals),
    'prefer-const': 2,
    'prefer-arrow-callback': 2,
    'babel/no-invalid-this': 2,
    'import/default': 0,
    'import/no-unresolved': 2,
    'import/no-unassigned-import': 0,
    'import/named': 2,
    'import/no-amd': 2,
    'import/no-webpack-loader-syntax': 2,
    'import/no-named-as-default-member': 0,
    'import/no-named-as-default': 0,
    semi: 0,
    'react/prop-types': 'off',
    'react/no-danger': 1,
    'react/prefer-es6-class': 2,
    'react/require-render-return': 2,
    'react/self-closing-comp': 2,
    'react/no-did-mount-set-state': 1,
    'react/no-multi-comp': [2, { ignoreStateless: true }],
    'react/no-unused-prop-types': [2, { skipShapeProps: true }],
    'react/no-string-refs': 2,
    'react/no-typos': 2,
    'react/no-unknown-property': 2,
    'react/sort-comp': 2,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/jsx-pascal-case': 2,
    'react/jsx-no-comment-textnodes': 1,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ['@typescript-eslint/eslint-plugin'],
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {},
        },
      },
      rules: {
        'no-array-constructor': 0,
        'no-useless-constructor': 0,
        'no-unused-vars': 0,
        'no-undef': 0,
        // TODO: this was deprecated in favor of @typescript-eslint/consistent-type-assertions
        // Find out which one is the best option or if this should be used at all.
        // '@typescript-eslint/no-angle-bracket-type-assertion': 1,
        '@typescript-eslint/no-array-constructor': 1,
        '@typescript-eslint/no-namespace': 2,
        '@typescript-eslint/no-useless-constructor': 1,
        // these two cause trouble with type imports. disable until these are resolved:
        // https://github.com/alexgorbatchev/eslint-import-resolver-typescript/issues/17
        'import/no-unresolved': 0,
        // https://github.com/benmosher/eslint-plugin-import/issues/1341
        'import/named': 0,
        'react/prop-types': 0,
      },
    },
    {
      files: ['.d.ts'],
      rules: {
        // I'm not TypeScript expert enough to know if it is ok to simply disable the next
        // two but otherwise it can result in ugly warnings in type declaration files.
        'import/export': 0,
        'no-redeclare': 0,
      },
    },
  ],
}
