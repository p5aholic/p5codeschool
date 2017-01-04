/**
 * gulp処理のエントリーポイント
 */
var requireDir = require("require-dir");

// 設定
global.Config = {
  SRC_DIR : "./assets/",
  DEST_DIR: "../public/",
  HASH    : "", // URL末尾に付けるハッシュ
};

requireDir("./gulp/tasks", {
  recurse: true
});
