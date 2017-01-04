/**
 * watch タスク
 */
var gulp = require("gulp");

gulp.task("watch", function() {
  gulp.watch(global.Config.SRC_DIR + "**/*.ejs", ["md"]);
  gulp.watch(global.Config.SRC_DIR + "docs/**/*.md", ["md"]);
  gulp.watch(global.Config.SRC_DIR + "css/**/*.scss", ["css"]);
  gulp.watch(global.Config.SRC_DIR + "js/**/*.js", ["js"]);
});
