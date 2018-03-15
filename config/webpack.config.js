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
    ],
    alias: {
      'TweenLite': 'gsap/src/uncompressed/TweenLite.js',
      'TweenMax': 'gsap/src/uncompressed/TweenMax.js',
      'gsap.easing': 'gsap/src/uncompressed/EasePack.js',
      'gsap.plugins': 'gsap/src/uncompressed/plugins/'
    }
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
