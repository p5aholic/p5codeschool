# P5 Code Schoolについて

P5 Code Schoolはプログラミング未経験者がゼロからProcessingを学ぶことができるWebサイトです。

## Processingとは？

ProcessingはJavaというプログラミング言語のグラフィックス処理機能を扱いやすくした、コンピュータアートのためのプログラミング言語です。操作が容易な専用の開発環境でプログラムが書けて、アイデアがすぐに視覚的なフィードバックとして得られるためプログラミング入門者にも適ています。

余談ですが、ProcessingはよくP5という略称で呼ばれます。Processingという単語は色んな分野で使われているので、プログラミング言語としてのProcessingをProce55ingと書くことにしよう、という流れがありました。「Processing」で検索してもプログラミング言語としてのProcessing以外の情報が多数ヒットしてしまうので、これを防ぐ目的もあります。今はあまりProce55ingという表記は見かけませんが、その略称であるP5は今も使われています。

## Processingの記述例

“マウスの位置に色と大きさがランダムな円を描く”というプログラムを書いてみましょう。記述は以下の9行で済みます。

![](/images/AboutP5/aboutp5.jpg)

[AboutP5.pde](github:AboutP5/AboutP5.pde)

```processing
// プログラム開始時に一度だけ実行される処理
void setup() {
  size(960, 540);  // 画面サイズを設定
  background(255); // 背景色を設定
}

// setup()実行後に繰り返し実行される処理
void draw() {
  // 図形の輪郭線を消す
  noStroke();
  // 白黒のランダムな色を設定
  fill(random(255));
  // マウスの位置にランダムな大きさの楕円を描く
  ellipse(mouseX, mouseY, random(50), random(50));
}
```

このように、Processingで書かれたプログラムはアイデアとは関係のない記述を限界まで省くことができます。
