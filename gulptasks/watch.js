/**
 * watch タスク
 */
const gulp = require('gulp');

gulp.task('watch', () => {
  gulp.watch(global.Config.SRC_DIR + '**/*.ejs', ['md', 'tutorial']);
  gulp.watch(global.Config.SRC_DIR + 'docs/**/*.md', ['md']);
  gulp.watch(global.Config.SRC_DIR + 'css/**/*.scss', ['css']);
});
