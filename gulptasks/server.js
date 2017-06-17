/**
 * server タスク
 */
const gulp        = require('gulp');
const browserSync = require('browser-sync');

gulp.task('server', () => {
  const watchFiles = [
    global.Config.DEST_DIR + '**/*.html',
    global.Config.DEST_DIR + 'css/**/*.css',
    global.Config.DEST_DIR + 'js/**/*.js',
  ];

  gulp.watch(watchFiles).on('change', () => {
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
