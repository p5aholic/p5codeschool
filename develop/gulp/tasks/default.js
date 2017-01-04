/**
 * default タスク
 */
var gulp = require("gulp");
var gutil = require("gulp-util");
var runSequence = require("run-sequence");

gulp.task("default", function(callback) {
  // npm run build - hash, css, jsタスクを実行
  if (gutil.env.task && gutil.env.task == "build") {
    return runSequence("hash", "css", "js", callback);
  }
  // npm run build:hash - hashタスクを実行
  else if (gutil.env.task && gutil.env.task == "build:hash") {
    return runSequence("hash", callback);
  }
  // npm run build:css - cssタスクを実行
  else if (gutil.env.task && gutil.env.task == "build:css") {
    return runSequence("css", callback);
  }
  // npm run build:js - jsタスクを実行
  else if (gutil.env.task && gutil.env.task == "build:js") {
    return runSequence("js", callback);
  }
  // npm run build:md - mdタスクを実行
  else if (gutil.env.task && gutil.env.task == "build:md") {
    return runSequence("md", callback);
  }
  // npm run sprite - sprite-imageタスクを実行
  else if (gutil.env.task && gutil.env.task == "sprite") {
    return runSequence("sprite-image", callback);
  }
  // npm run texture - sprite-textureタスクを実行
  else if (gutil.env.task && gutil.env.task == "texture") {
    return runSequence("sprite-texture", callback);
  }
  // npm run init - 初期化、全タスクを実行
  else if (gutil.env.task && gutil.env.task == "init") {
    return runSequence("hash", "css", "js", "sprite-image", "sprite-texture", "server", "watch", callback);
  }
  // npm start - serverタスクを実行
  else {
    return runSequence("server", "watch", callback);
  }
});
