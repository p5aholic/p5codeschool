/**
 * sprite-texture タスク
 */
var fs = require("fs");
var path = require("path");
var gulp = require("gulp");
var spritesmith = require("gulp.spritesmith");
var texturepacker = require("spritesmith-texturepacker");
var imagemin = require("gulp-imagemin");
var pngquant = require("imagemin-pngquant");
var buffer = require("vinyl-buffer");
var jsonminify = require("gulp-jsonminify");

var dirNames = [
];

gulp.task("sprite-texture", function() {
  for (var i = 0; i < dirNames.length; i++) {
    createSprite(dirNames[i]);
  }
});

function createSprite(dirName) {
  // sprite画像のパーツのパス
  var srcImgPath = global.Config.SRC_DIR + "image/canvas/" + dirName + "/sprite/*.png";
  // sprite画像の出力パス
  var destImgPath = global.Config.DEST_DIR + "image/sprite/";

  var spriteData = gulp.src(srcImgPath).pipe(spritesmith({
    imgName: "sprite-" + dirName + ".png",
    cssName: "sprite-" + dirName + ".json",
    cssTemplate: texturepacker,
    padding: 4
  }));

  // json書き出し
  spriteData.css
  .pipe(jsonminify())
  .pipe(gulp.dest(destImgPath));

  var minConfig = {
    use: [pngquant({quality: 100})],
  };

  // sprite画像書き出し
  spriteData.img
  .pipe(buffer())
  .pipe(imagemin(minConfig))
  .pipe(gulp.dest(destImgPath))
  .on("end", function() {
    console.log("CREATED SPRITE: " + destImgPath + "sprite-" + dirName + ".png");
  });
};
