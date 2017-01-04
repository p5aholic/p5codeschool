/**
 * sprite-image タスク
 */
var fs = require("fs");
var path = require("path");
var gulp = require("gulp");
var spritesmith = require("gulp.spritesmith");
var imagemin = require("gulp-imagemin");
var pngquant = require("imagemin-pngquant");
var buffer = require("vinyl-buffer");

var dirNames = [
];

gulp.task("sprite-image", function() {
  for (var i = 0; i < dirNames.length; i++) {
    createSprite(dirNames[i]);
  }
});

function createSprite(dirName) {
  // sprite画像のパーツのパス
  var srcImgPath = global.Config.SRC_DIR + "image/" + dirName + "/sprite/*.png";
  // sprite画像の出力パス
  var destImgPath = global.Config.DEST_DIR + "image/sprite/";
  // 出力されるscssファイルに記述されるsprite画像のパス
  var cssImgPath = "../image/sprite/" + "sprite-" + dirName + ".png";

  var spriteData = gulp.src(srcImgPath).pipe(spritesmith({
    imgName: "sprite-" + dirName + ".png",
    cssName: "_sprite-" + dirName + ".scss",
    imgPath: cssImgPath,
    cssFormat: "scss",
    padding: 4,
    cssOpts: {
      functions: false
    }
  }));

  // 出力されるscssファイルのパス
  var scssPath = global.Config.SRC_DIR + "css/sprite/";

  // scss書き出し
  spriteData.css.pipe(gulp.dest(scssPath));

  var data = {
    use: [pngquant({quality: 50})],
  };

  // sprite画像書き出し
  spriteData.img
  .pipe(buffer())
  .pipe(imagemin(data))
  .pipe(gulp.dest(destImgPath))
  .on("end", function() {
    console.log("CREATED SPRITE: " + destImgPath + "sprite-" + dirName + ".png");
  });
};
