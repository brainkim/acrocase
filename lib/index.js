const acrocase = require("./rules/acrocase");

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
