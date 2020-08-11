module.exports = {
  env: {
    browser: true,
    es2020: true,
    amd: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react", "jsx-a11y", "import"],
  rules: {},
};
