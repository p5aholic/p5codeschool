var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: {
    // "common"       : "./assets/js/common/index.js",
    // "index-phase1" : "./assets/js/index/phase1/index.js",
    // "index-phase2" : "./assets/js/index/phase2/index.js",
    // "index-phase3" : "./assets/js/index/phase3/index.js"
  },

  output: {
    filename: "[name]/bundle.js"
  },

  resolve: {
    root: [
      path.resolve("./assets/js/lib")
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "common",
      filename: "common.js"
    }),
  ]
};
