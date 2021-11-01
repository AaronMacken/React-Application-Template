const path = require("path");

// merge these settings with the base settings using webpack-merge
// 1. require your base config file and the npm module
const common = require("./webpack.config");
const { merge } = require("webpack-merge");

// 2. Use the webpack-merge package to wrap the exported config settings,
// and pass to the function the base config to merge
module.exports = merge(common, {
  mode: "development",
  output: {
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
  },
});
