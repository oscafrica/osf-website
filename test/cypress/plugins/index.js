require("dotenv").config();

module.exports = (on, config) => {
  require("@cypress/code-coverage/task")(on, config);
  on("file:preprocessor", require("@cypress/code-coverage/use-babelrc"));

  config.baseUrl = process.env.WEBSITE_URL || "http://localhost:8000";
  config.env = config.env || {};
  return config;
};
