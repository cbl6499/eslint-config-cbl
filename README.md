# eslint-config-cbl

General ESLint and TypeScript configuration for React and React Native.

## Usage

You will need eslint if not already installed: 

```sh
npm install -D eslint
```

Install config:

```sh
npm install -D eslint-config-cbl
```

Extend config in `.eslintrc.js`:

```js
module.exports = { 
    extends: ['eslint-config-cbl'], 
} 
```

## React Navite adaptions

To use the eslint confing with React Native install `@react-native-community/eslint-config`

```sh
npm install -D @react-native-community/eslint-config
```

Extend `.eslintrc.js`:

```js
module.exports = {
    extends: ['eslint-config-cbl', '@react-native-community'], 
}
```

Specific React Native rules that should be added:

```js
{
    rules: {
        'react-native/no-color-literals': 'error',
        'react-native/no-inline-styles': 'error',
        'react-native/no-unused-styles': 'error',
        'react-native/split-platform-components': 1
    }
}
```

# Typescript

The tsconfig for react has to be extended in `tsconfig.json`:
```json
{
    "extends": "eslint-config-cbl/tsconfig.base"
}
```

For React Native change `jsx` value to `react-native`:

```json
{
    "extends": "eslint-config-cbl/tsconfig.base",
    "compilerOptions": {
        "jsx": "react-native"
    }
}
```

## Used By

This project is used by the following companies:

-   [MASSIVE ART](https://massiveart.com)

## License

[MIT](https://choosealicense.com/licenses/mit/)
