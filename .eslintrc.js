module.exports = {
  "parser": "babel-eslint",
  "env" : {
    es6: true,
    browser: true
  },
  "parserOptions": {
    ecmaversion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      experimentalObjectSpread: true
    }
  },
  "plugins": [
    "react"
  ],
  "extends": ["eslint:recommended", "plugin:react/recommended", "standard"],
    "rules": {
    "no-console": [2, {allow: ["warn", "error"]}],
    "comma-dangle" : [2, "always-multiline"],
    "semi": [2, "never"],
    "no-extra-semi": 2,
    "jsx-quotes": [2, "prefer-single"],
    "react/jsx-boolean-value": [2, "always"],
    "react/jsx-closing-bracket-location": [2, {selfClosing: "after-props", nonEmpty: "after-props"}],
    "react/jsx-curly-spacing": [2, "never", {"allowMultiline": false}],
    "react/jsx-max-props-per-line": [2, {maximum: 3}],
    "react/jsx-no-literals": 2,
    "react/self-closing-comp": 2,
    "react/sort-comp": 2
  },
};