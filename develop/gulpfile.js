"use strict";

var fs           = require("fs");
var path         = require("path");
var gulp         = require("gulp");
var gutil        = require("gulp-util");
var ejs          = require("gulp-ejs");
var sass         = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var plumber      = require("gulp-plumber");
var changed      = require('gulp-changed');
var rename       = require("gulp-rename");
var browserSync  = require("browser-sync");
var marked       = require("marked");
var hljs         = require("highlight.js");

var Config = {
  DEST: "../public",
};

var jsonData = JSON.parse(fs.readFileSync("html/tutorial/data.json"));

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
  return "<code class='code-fragment'>" + text + "</code>";
};

marked.setOptions({
  highlight: function(code, lang) {
    return hljs.highlightAuto(code, [lang]).value;
  },
  renderer: renderer
});

gulp.task("genHTML", function() {
  var files = fs.readdirSync("docs");
  for (var i = 0; i < files.length; i++) {
    var fileName = files[i];
    mdToHTML(fileName);
  }
  browserSync.reload();
  console.log("Finish !!");
});

function mdToHTML(fileName) {
  var text = fs.readFileSync("docs/" + fileName, "utf8");
  var htmlData = marked(text);
  var baseName = fileName.replace(".md", "");
  var dirName;
  var pageTitle;
  var h1 = htmlData.match(/<h1>(.*?)<\/h1>/);
  var chapterLink = {
    prev: "",
    next: ""
  };

  if (baseName === "top") {
    dirName = "";
    pageTitle = "ゼロから学べるProcessing入門サイト : P5 Code School";
  } else {
    dirName = "tutorial/" + baseName.toLowerCase();
    var index = getChapterIndex(baseName.slice(7));
    if (index >= 1) {
      chapterLink.prev = jsonData.tutorials[index-1].number;
    }
    if (index <= jsonData.tutorials.length-2) {
      chapterLink.next = jsonData.tutorials[index+1].number;
    }
    pageTitle = "P5 Code School " + baseName + "「" + h1[1] + "」";
  }

  gulp.src("html/index.ejs")
    .pipe(ejs(
      {
        pageTitle: pageTitle,
        htmlData: htmlData,
        chapterLink
      },
      { "ext": ".html" }
    ))
    .pipe(rename({
      dirname: dirName,
    }))
    .pipe(gulp.dest(Config.DEST));
}

function getChapterIndex(chapterNum) {
  for (var i = 0; i < jsonData.tutorials.length; i++) {
    if (chapterNum === jsonData.tutorials[i].number) {
      return i;
    }
  }
}

gulp.task("genTutorial", function() {
  var chapterLink = {
    prev: "",
    next: ""
  };

  gulp.src("html/tutorial/index.ejs")
  .pipe(ejs(
    {
      pageTitle: "P5 Code School : チュートリアル",
      data: jsonData,
      chapterLink
    },
    { "ext": ".html" }
  ))
  .pipe(rename({
    dirname: "tutorial"
  }))
  .pipe(gulp.dest(Config.DEST))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task("css", function() {
  var outputStyle = "expanded";
  if (gutil.env.env && gutil.env.env === "prod") {
    outputStyle = "compressed";
  }

  gulp.src("css/**/*.scss")
    .pipe(plumber())
    .pipe(sass({
      outputStyle: outputStyle
    }))
    .on("error", sass.logError)
    .pipe(autoprefixer({
      browsers: ["last 2 versions", "Android >= 4", "ios_saf >= 9"]
    }))
    .pipe(gulp.dest(Config.DEST + "/css"))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task("server", function() {
  browserSync.init({
    server: {
      baseDir: Config.DEST
    }
  });
});

gulp.task("default", ["server"], function() {
  gulp.watch("css/*.scss", ["css"]);
  gulp.watch("docs/*.md", ["genHTML"]);
  gulp.watch("html/**/*.ejs", ["genHTML", "genTutorial"]);
});
