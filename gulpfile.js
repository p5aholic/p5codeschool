/**
 * gulp処理のエントリーポイント
 */
const requireDir = require('require-dir');

// 設定
global.Config = {
  SRC_DIR : './develop/assets/',
  DEST_DIR: './public/',
  HASH    : '' // URL末尾に付けるハッシュ
};

requireDir('./gulptasks', {
  recurse: true
});
