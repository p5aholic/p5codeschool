/**
 * default タスク
 */
const gulp        = require('gulp');
const gutil       = require('gulp-util');
const runSequence = require('run-sequence');

gulp.task('default', () => {
  // npm run build:css - cssタスクを実行
  if (gutil.env.task && gutil.env.task == 'build:css') {
    return runSequence('css');
  }
  // npm run build:md - mdタスクを実行
  else if (gutil.env.task && gutil.env.task == 'build:md') {
    return runSequence('md');
  }
  // npm start - serverタスクを実行
  else {
    return runSequence('server', 'watch');
  }
});
