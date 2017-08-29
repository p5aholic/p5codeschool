/**
 * css タスク
 */
const gulp         = require('gulp');
const gutil        = require('gulp-util');
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('css', () => {
  const config = {
    outputStyle: 'expanded'
  };

  gulp.src(global.Config.SRC_DIR + 'css/**/*.scss')
  .pipe(sass(config).on('error', sass.logError))
  .pipe(autoprefixer({
    browsers: ['last 2 versions', 'Android >= 4', 'ios_saf >= 9']
  }))
  .pipe(gulp.dest(global.Config.DEST_DIR + 'assets/css/'));
});