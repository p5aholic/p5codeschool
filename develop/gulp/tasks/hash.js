/**
 * hash タスク
 */
var fs = require("fs");
var gulp = require("gulp");

gulp.task("hash", function(callback) {
  // hashの更新
  global.Config.HASH = Date.now();

  var data = {
    hash: '?' + global.Config.HASH
  };

  console.log("UPDATE HASH: " + global.Config.HASH);

  callback();
});
