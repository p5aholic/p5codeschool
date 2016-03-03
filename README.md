# P5 Code School
ゼロから学べるProcessing入門サイトです。
[P5 Code School](http://p5codeschool.net/)

# 制作環境の解説
Markdownからhtmlを生成、sassのコンパイルなどをgulpで自動化してる。

Markdownからhtmlを生成する方法などはICSさんの[CreateJS入門サイト](https://github.com/ics-creative/tutorial-createjs)が非常に参考になった。

## gulpのタスク
docsフォルダにあるMarkdownファイルをhtmlに変換する

```sh
gulp genHTML
```

チュートリアル一覧ページ(tutorial/index.html)をjsonデータから作成

```sh
gulp genTutorial
```

Sassのコンパイル

```sh
gulp compileSass
```

```sh
gulp
```

を実行するとローカルにサーバーが立ってsassファイルとmdファイルの変更を監視して、変更があれば`genHTML`、`compileSass`が実行されブラウザがリロードされる。

## docs
チュートリアルで使う原稿のMarkdownファイルの保存場所

## templates
htmlファイルのテンプレとなるejsファイルの保存場所

## samples
チュートリアルで使うProcessingのサンプルプログラムの保存場所

## sass
sassファイルの格納場所

## upload
サーバーに上げるファイルの格納場所
