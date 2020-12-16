module.exports = {
  root: true,
  "extends": "airbnb",
    "parser": "babel-eslint",
    "env": {
        "node": true,
        "browser": true,
        "es6": true
    },
    "rules": {
        "strict": 0,
        "quotes": [2, "single"],
        "no-else-return": 0,
        "new-cap": 0,
        "no-console": 0,
        "import/no-unresolved": [2, { "caseSensitive": false } ],
        "no-unused-vars": ["error", { "vars": "all", "args": "none" }],
        "no-underscore-dangle": 0,
        "arrow-body-style": 0,
        "one-var": ["error", { "uninitialized": "always", "initialized": "never" }],
        "one-var-declaration-per-line": ["error", "initializations"],
        "max-len": 0,
        "no-extra-parens": 0,
        "no-plusplus": 0,
        "no-restricted-syntax": [
          0,
          "DebuggerStatement"
        ],
        "no-debugger": 1,
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/react-in-jsx-scope": 2,
        "react/prop-types": 0,
        "react/jsx-first-prop-new-line": 0,
        "react/jsx-filename-extension": 0,
        "react/prefer-stateless-function": 0,
        "prefer-destructuring": 1,
        "class-methods-use-this": 0,
        "no-use-before-define": [2, { "variables": false }],
        "import/no-extraneous-dependencies": 0
    },
    "plugins": [
        "react"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "sourceType": "module"
        }
    }
};
