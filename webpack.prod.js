const path = require("path");
const common = require("./webpack.config");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "main.[contenthash].js",
    publicPath: "/",
  },
  plugins: [new CleanWebpackPlugin()],
});
