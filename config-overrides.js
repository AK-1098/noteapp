const webpack = require("webpack");

module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    assert: require.resolve("assert/")
  };
  return config;
};
