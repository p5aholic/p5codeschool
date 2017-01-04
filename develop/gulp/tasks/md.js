/**
 * markdown タスク
 */
var fs     = require("fs");
var path   = require("path");
var gulp   = require("gulp");
var gutil  = require("gulp-util");
var rename = require("gulp-rename");
var ejs    = require("gulp-ejs");
var marked = require("marked");
var hljs         = require("highlight.js");

var jsonData = JSON.parse(fs.readFileSync(global.Config.SRC_DIR + "html/data.json"));

var renderer = new marked.Renderer();

renderer.heading = function(text, level) {
  return "<h" + level + ">" + text + "</h" + level + ">";
};

renderer.link = function(href, title, text) {
  var target;
  if (href.indexOf("p5codeschool.net") === -1) target = "_blank";
  else target = "_self";

  if (href.indexOf("github:") !== -1) {
    href = href.replace("github:", "");
    href = "https://github.com/p5aholic/p5codeschool/blob/master/samples/" + href;
  }

  if (href.indexOf("p5ref:") !== -1) {
    href = href.replace("p5ref:", "");
    href = "https://www.processing.org/reference/" + href;
  }

  return "<a href='" + href + "' target='" + target + "'>" + text + "</a>";
};

renderer.codespan = function(text) {
  return "<code class='codeFragment'>" + text + "</code>";
};

marked.setOptions({
  highlight: function(code, lang) {
    return hljs.highlightAuto(code, [lang]).value;
  },
  renderer: renderer
});

gulp.task("md", function() {
  var files = fs.readdirSync(global.Config.SRC_DIR + "docs");
  for (var i = 0; i < files.length; i++) {
    var fileName = files[i];
    mdToHTML(fileName);
  }
});

function mdToHTML(fileName) {
  var text = fs.readFileSync(global.Config.SRC_DIR + "docs/" + fileName, "utf8");
  var htmlData = marked(text);
  var baseName = fileName.replace(".md", "");
  var dirName;
  var pageTitle;
  var chapterNum;
  var h1 = htmlData.match(/<h1>(.*?)<\/h1>/);

  if (baseName === "top") {
    dirName = "";
    pageTitle = "ゼロから学べるProcessing入門サイト : P5 Code School";
  } else {
    dirName = "tutorial/" + baseName.toLowerCase();
    chapterNum = baseName.replace("Chapter", "");
    pageTitle = "P5 Code School " + baseName + "「" + h1[1] + "」";
  }

  gulp.src(global.Config.SRC_DIR + "html/index_article.ejs")
  .pipe(ejs(
    {
      pageTitle: pageTitle,
      htmlData: htmlData,
      data: jsonData,
      chapterNum: chapterNum
    },
    { "ext": ".html" }
  ))
  .pipe(rename({
    basename: "index",
    dirname: dirName,
  }))
  .pipe(gulp.dest(global.Config.DEST_DIR));
}

gulp.task("genTutorial", function() {
  gulp.src("html/tutorial/index.ejs")
  .pipe(ejs(
    {
      pageTitle: "P5 Code School : チュートリアル",
      data: jsonData,
      chapterNum: undefined,
    },
    { "ext": ".html" }
  ))
  .pipe(rename({
    dirname: "tutorial"
  }))
  .pipe(gulp.dest(global.Config.DEST_DIR));
});
