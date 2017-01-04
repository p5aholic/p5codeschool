/**
 * server タスク
 */
var fs = require("fs");
var path = require("path");
var gulp = require("gulp");
var browserSync = require("browser-sync");

gulp.task("server", function() {
  var watchFiles = [
    global.Config.DEST_DIR + "**/*.html",
    global.Config.DEST_DIR + "css/**/*.css",
    global.Config.DEST_DIR + "js/**/*.js",
  ];

  gulp.watch(watchFiles).on("change", function() {
    browserSync.reload();
  });
  
  browserSync.init({
    server: {
      baseDir: global.Config.DEST_DIR,
    },
    ui: false,
    ghostMode: false
  });
});
