'use strict';

const fs      = require('fs');
const path    = require('path');
const pug     = require('pug');
const marked  = require('marked');
const makeDir = require('make-dir');
const hljs    = require('highlight.js');

const jsonData = JSON.parse(fs.readFileSync('./data.json'));
const renderer = new marked.Renderer();

// set up marked
marked.setOptions({
  highlight: function(code, lang) {
    return hljs.highlightAuto(code, [lang]).value;
  },
  renderer: renderer
});

// set up renderer
renderer.heading = function(text, level) {
  return `<h${level}>${text}</h${level}>`;
};

renderer.link = function(href, title, text) {
  let target;
  if (href.indexOf('p5codeschool.net') === -1) target = '_blank';
  else target = '_self';
  
  if (href.indexOf('github:') !== -1) {
    href = href.replace('github:', '');
    href = 'https://github.com/p5aholic/p5codeschool-samples/tree/master/' + href;
  }
  if (href.indexOf('p5ref:') !== -1) {
    href = href.replace('p5ref:', '');
    href = 'https://www.processing.org/reference/' + href;
  }
  return `<a href='${href}' target='${target}'>${text}</a>`;
};

renderer.codespan = function(text) {
  return `<code class='code-fragment'>${text}</code>`;
};


// watch
if (process.argv[2] && process.argv[2] === '-w') {
  console.log('**************************');
  console.log('***** watching files *****');
  console.log('**************************');
  fs.watch('./docs', (eventType, filename) => {
    if (filename) {
      logChangedFile(filename);
      mdToHTML(filename);
    }
  });

  fs.watch('./html_template/index_article.pug', (eventType, filename) => {
    if (filename) {
      logChangedFile(filename);
      generateArticle();
    }
  });

  fs.watch('./html_template/index_tutorial.pug', (eventType, filename) => {
    if (filename) {
      logChangedFile(filename);
      generateTutorial();
    }
  });
}

function logChangedFile(filename) {
  console.log('-------------------------------');
  console.log(`Change : ${filename}`);
  console.log('-------------------------------');
}


// generate html
generateArticle();
generateTutorial();

function generateArticle() {
  const files = fs.readdirSync('./docs');
  for (let i = 0; i < files.length; i++) {
    const filename = files[i];
    mdToHTML(filename);
  }
}

async function generateTutorial() {
  const html = pug.renderFile('./html_template/index_tutorial.pug', {
    title: 'チュートリアル一覧 : P5 Code School',
    data: jsonData,
    pretty: false
  });

  await makeDir('../public/tutorial');

  fs.writeFileSync(`../public/tutorial/index.html`, html);
  console.log(`Generate : public/tutorial/index.html`);
}

async function mdToHTML(fileName) {
  // get markdown
  const md = fs.readFileSync('./docs/' + fileName, 'utf8');
  // get html
  const article = marked(md);

  let baseName = fileName.replace('.md', '');
  let dir;
  let title;
  let chapterNum;
  let h1 = article.match(/<h1>(.*?)<\/h1>/);

  if (baseName === 'top') {
    dir = '';
    title = 'ゼロから学べるProcessing入門サイト : P5 Code School';
  } else {
    dir = '/tutorial/' + baseName.toLowerCase();
    chapterNum = baseName.replace('Chapter', '');
    title = 'P5 Code School ' + baseName + '「' + h1[1] + '」';
  }

  let html = pug.renderFile('./html_template/index_article.pug', {
    title: title,
    article: article,
    data: jsonData,
    chapterNum: chapterNum,
    pretty: false
  });

  await makeDir(`../public${dir}`);

  fs.writeFileSync(`../public${dir}/index.html`, html);
  console.log(`Generate : public${dir}/index.html`);
}