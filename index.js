module.exports = {
    'parser': '@typescript-eslint/parser',
    'root': true,
    'env': {
        'browser': true,
        'jest': true,
        'es6': true,
    },
    'globals': {
        '__APP__': true,
        '__DEV__': true,
        '__ENV__': true,
    },
    'extends': ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'prettier'],
    "plugins": ['react', 'react-hooks', 'import'],
    'settings': {
        'react': {
            'version': 'detect',
        },
    },
    'rules': {
        'arrow-parens': ['error', 'always'],
        'class-methods-use-this': 0,
        'newline-before-return': 'error',
        'no-console': 'error',
        'no-extra-boolean-cast': 0,
        'no-underscore-dangle': ['error', { 'allow': ['__ENV__', '__DEV__', '__APP__'] }],
        '@typescript-eslint/array-type': ['error', { 'default': 'array-simple' }],
        '@typescript-eslint/ban-ts-comment': 1,
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/explicit-member-accessibility': ['error', { 'accessibility': 'explicit' }],
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-inferrable-types': 0,
        '@typescript-eslint/no-non-null-assertion': 1,
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/ban-types': [
            'error',
            {
                'types': {
                    'AnyType': 'Do not use outside ecommerce API.',
                    'GlobalFetch': 'Do not use outside ecommerce API.',
                },
            },
        ],
        '@typescript-eslint/member-ordering': [
            'warn',
            {
                'default': {
                    'memberTypes': [
                        // Index signature
                        'signature',

                        // Fields
                        'public-static-field',
                        'protected-static-field',
                        'private-static-field',
                        'public-static-method',
                        'protected-static-method',
                        'private-static-method',

                        'public-instance-field',
                        'public-decorated-field',
                        'protected-instance-field',
                        'protected-decorated-field',
                        'private-instance-field',
                        'private-decorated-field',
                        'public-abstract-field',
                        'protected-abstract-field',
                        'private-abstract-field',

                        // Constructors
                        'constructor',

                        // Methods
                        'public-instance-method',
                        'public-decorated-method',
                        'protected-instance-method',
                        'protected-decorated-method',
                        'private-instance-method',
                        'private-decorated-method',
                        'public-abstract-method',
                        'protected-abstract-method',
                        'private-abstract-method',
                    ],
                },
            },
        ],
        'import/order': [
            'error',
            {
                'alphabetize': {
                    'order': 'asc',
                    'caseInsensitive': true,
                },
                'newlines-between': 'never',
            },
        ],
        'import/no-dynamic-require': 'error',
        'import/no-webpack-loader-syntax': 'error',
        'import/export': 'error',
        'import/no-extraneous-dependencies': 'error',
        'import/no-nodejs-modules': 'error',
        'import/first': 'error',
        'import/no-duplicates': 'error',
        'import/no-absolute-path': 'error',
        'import/no-unused-modules': 'error',
        'import/newline-after-import': ['error', { 'count': 1 }],
        'react/display-name': 1,
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/prop-types': 0,
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
    },
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module',
        'ecmaFeatures': {
            'legacyDecorators': true,
        },
    },
    'overrides': [
        {
            /*
             * Disabling this rule for `.ts` files because, it throws an error for
             * exporting interfaces, and we can safely disable it since TypeScript
             * will fail to compile with undefined vars, more info:
             * https://github.com/typescript-eslint/typescript-eslint/issues/342
             * https://github.com/eslint/typescript-eslint-parser/issues/437#issuecomment-435526531
             */
            'files': '*.ts',
            'rules': {
                'no-undef': 'off',
            },
        },
    ],
}