module.exports = {
  env: {
    browser: true,
    es6: true,
    jquery: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:vue/essential"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["vue"],
  globals: {
    document: true,
    window: true,
  },
  rules: {
    'vue/multi-word-component-names': "off"
  },

};
