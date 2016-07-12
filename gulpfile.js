"use strict";

var fs = require("fs");
var gulp = require("gulp");
var ejs = require("gulp-ejs");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var plumber = require("gulp-plumber");
var changed = require('gulp-changed');
var rename = require("gulp-rename");
var browser = require("browser-sync");
var marked = require("marked");
var hljs = require("highlight.js");

var DEST = "public";
var jsonData = JSON.parse(fs.readFileSync("templates/tutorial/data.json"));

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
    browser.reload();
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

    gulp.src("templates/index.ejs")
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
        .pipe(gulp.dest(DEST));
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

    gulp.src("templates/tutorial/index.ejs")
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
    .pipe(gulp.dest(DEST));
});

gulp.task("server", function(){
    browser({
        server: {
            baseDir: DEST
        }
    });
});

gulp.task("compileSass", function(){
    gulp.src("sass/*.scss")
        .pipe(plumber())
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(autoprefixer())
        .pipe(gulp.dest(DEST+"/css"))
        .pipe(browser.reload({stream:true}));
});

gulp.task("default", ["server"], function() {
    gulp.watch("sass/*.scss", ["compileSass"]);
    gulp.watch("docs/*.md", ["genHTML"]);
    gulp.watch("templates/**/*.ejs", ["genHTML", "genTutorial"]);
});
