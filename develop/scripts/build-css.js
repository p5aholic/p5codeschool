const fs           = require('fs');
const path         = require('path');
const sass         = require('node-sass');
const postcss      = require('postcss');
const autoprefixer = require('autoprefixer');

const srcDir  = path.resolve(__dirname, '../assets/css/');
const srcFile = path.resolve(__dirname, '../assets/css/style.scss');
const dstFile = path.resolve(__dirname, '../../public/assets/css/style.css');

// css書き出し実行関数
const renderCss = () => {
  sass.render({
    file: srcFile,
    outputStyle: process.argv[2] === '-prd' ? 'compressed' : 'expanded',
    outFile: dstFile,
    includePaths: [path.resolve(__dirname, '../assets/css'), path.resolve(__dirname, '../../node_modules/normalize.css')]
  }, (error, result) => {
    if (error) {
      console.log(`Error on line ${error.line}. ${error.message}`);
    } else {
      const cssCode = result.css.toString();
      postcss([autoprefixer]).process(cssCode, { from: srcFile, to: dstFile } ).then( (postcssResult) => {
        // dstFileにcssコードを書き込む
        fs.writeFileSync(dstFile, postcssResult.css);
        console.log('CSS build task successfully ended.');
      });
    }
  });
};

// -w (ファイル変更監視オプション) が付いていたら監視を実行
if (process.argv[2] === '-w') {
  fs.watch(srcDir, { recursive: true }, renderCss);
  console.log(`${srcDir} is being watched for changes.`);
}
// 付いていないならcssを書き出して終了
else {
  renderCss();
}