import paths from './config/paths'

export default {
  extends: [
    '@werkzeugkiste',
    '@werkzeugkiste/eslint-config/react',
    '@werkzeugkiste/eslint-config/typescript',
    '@werkzeugkiste/eslint-config/node',
  ],
  globals: {
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
  rules: {
    'import/no-unassigned-import': 0,
    'import/no-named-as-default-member': 0,
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
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'arrow-parens': 0,
        // TODO: add to eslint-config-wiremore
        'import/named': 0,
        'react/prop-types': 0,
      },
    },
  ],
}
