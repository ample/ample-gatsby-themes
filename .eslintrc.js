module.exports = {
  env: {
    browser: true,
    "jest/globals": true
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:jsx-a11y/recommended"],
  globals: {
    __PATH_PREFIX__: true
  },
  plugins: ["prettier", "jsx-a11y", "jest"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "react/no-unescaped-entities": "off"
  },
  settings: {
    react: {
      version: "detect"
    }
  }
}
