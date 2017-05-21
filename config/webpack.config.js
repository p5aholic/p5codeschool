const path = require("path");
const webpack = require("webpack");

const DEVELOP_PATH = path.resolve(__dirname, "../develop");
const PUBLIC_PATH = path.resolve(__dirname, "../public");
const MODULES_PARH = path.resolve(__dirname, "../node_modules");

module.exports = {
  entry: {
    vendor: ["jquery", "three", "gsap"],
    main: DEVELOP_PATH + "/assets/js/main.js"
  },

  output: {
    path: PUBLIC_PATH + "/assets/js/",
    filename: "[name].js"
  },

  resolve: {
    modules: [
      DEVELOP_PATH + "/assets/js/libs/",
      MODULES_PARH
    ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: MODULES_PARH
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      THREE: "three",
      TweenMax: "gsap"
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "vendor.js"
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
