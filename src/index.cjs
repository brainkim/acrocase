const acrocase = require("./rules/acrocase.cjs");

module.exports = {
  rules: {
    acrocase: acrocase,
  },
  configs: {
    recommended: {
      plugins: ["acrocase"],
      rules: {
        "acrocase/acrocase": "error",
      },
    },
  },
};
