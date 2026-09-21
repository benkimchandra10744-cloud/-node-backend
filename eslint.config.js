const js = require("@eslint/js");
const jest = require("eslint-plugin-jest");

module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        require: "readonly",
        module: "readonly",
        process: "readonly",
        console: "readonly",
      },
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },

  {
    files: ["test/**/*.js"],
    plugins: {
      jest,
    },
    languageOptions: {
      globals: {
        describe: "readonly",
        test: "readonly",
        expect: "readonly",
      },
    },
    rules: {
      ...jest.configs["flat/recommended"].rules,
    },
  },
];