/**
 * js タスク
 */
var fs            = require("fs");
var path          = require("path");
var gulp          = require("gulp");
var gutil         = require("gulp-util");
var plumber       = require("gulp-plumber");
var webpack       = require("webpack");
var webpackStream = require("webpack-stream");
var config        = require("../config/webpack.config.js");

gulp.task("js", function(callback) {
  if (gutil.env.env && (gutil.env.env == "production" || gutil.env.env == "development")) {
    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin({ minimize: true })
    );
  }

  gulp.src(global.Config.SRC_DIR + "js/")
  .pipe(plumber())
  .pipe(webpackStream(config))
  .pipe(gulp.dest(global.Config.DEST_DIR + "js/"));

  callback();
});
