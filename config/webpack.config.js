const path    = require('path');
const webpack = require('webpack');

const DEVELOP_PATH = path.resolve(__dirname, '../develop');
const PUBLIC_PATH  = path.resolve(__dirname, '../public');
const MODULES_PARH = path.resolve(__dirname, '../node_modules');

module.exports = {
  entry: {
    main: DEVELOP_PATH + '/assets/js/main.js'
  },

  output: {
    path: PUBLIC_PATH + '/assets/js/',
    filename: 'bundle.js'
  },

  resolve: {
    modules: [
      DEVELOP_PATH + '/assets/js/_libs/',
      MODULES_PARH
    ]
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: MODULES_PARH
      }
    ]
  }
};
