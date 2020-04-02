module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:jsx-a11y/recommended"],
  globals: {
    __PATH_PREFIX__: true
  },
  overrides: [
    {
      files: ["**/*.js"]
    },
    {
      files: ["./__mocks__/*.js"],
      rules: {
        "no-unused-vars": 0
      }
    }
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["prettier", "jsx-a11y", "jest"],
  rules: {
    "react/no-unescaped-entities": "off",
    "react/prop-types": [2, { ignore: ["className"] }]
  },
  settings: {
    react: {
      version: "detect"
    }
  }
}
