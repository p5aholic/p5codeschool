var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: {
    "common" : "./assets/js/common.js",
  },

  output: {
    filename: "[name]/bundle.js"
  },

  resolve: {
    root: [
      path.resolve("./assets/js/libs")
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "common",
      filename: "common.js"
    }),
  ]
};
