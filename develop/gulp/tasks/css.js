/**
 * css タスク
 */
var gulp = require("gulp");
var gutil = require("gulp-util");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var nodeSass = require("node-sass");
var hash = "";

gulp.task("css", function(callback) {
  var config = {
    outputStyle: "expanded",
    functions: {
      getHash: getHash
    }
  };

  if (global.Config.HASH) {
    hash = "?" + global.Config.HASH;
  }

  if (gutil.env.env && (gutil.env.env == "production" || gutil.env.env == "development")) {
    config.outputStyle = "compressed";
  }

  gulp.src(global.Config.SRC_DIR + "css/**/*.scss")
  .pipe(sass(config).on("error", sass.logError))
  .pipe(autoprefixer({
    browsers: ["last 2 versions", "Android >= 4", "ios_saf >= 9"]
  }))
  .pipe(gulp.dest(global.Config.DEST_DIR + "css/"))
  .on("end", function() {
    callback();
  });
});

function getHash() {
  return nodeSass.types.String(hash);
}

function getCdn() {
  return nodeSass.types.String(cdn);
}
