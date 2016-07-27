# P5 Code Schoolについて

P5 Code Schoolはプログラミング未経験者が一からProcessingを学ぶことができるWebサイトです。

## Processingとは？

ProcessingはJavaというプログラミング言語のグラフィックス処理機能を扱いやすくしたコンピュータアートのためのプログラミング言語です。無料かつ操作が容易な専用の開発環境でプログラムが書けて、アイデアがすぐに視覚的なフィードバックとして得られるためプログラミング入門者にも適ています。

余談ですが、ProcessingはよくP5という略称で呼ばれます。Processingという単語は色んな分野で使われているので、プログラミング言語としてのProcessingをProce55ingと書くことにしよう、という流れがありました。「Processing」で検索してもプログラミング言語としてのProcessing以外の情報が多数ヒットしてしまうので、これを防ぐ目的もあります。今はあまりProce55ingという表記は見かけませんが、その略称であるP5は今も使われています。

## Processingの記述例

“マウスの位置に色と大きさがランダムな円を描く”というプログラムを書いてみましょう。Javaを経験したことがある人なら、「マウスリスナーが必要で、repaint()を・・・」などと考えると思いますが、記述は以下の9行で済みます。下の画面にマウスをオーバーさせるとWeb上でも動作確認ができます。

[AboutP5.pde](github:AboutP5/AboutP5.pde)

<iframe src="/samples/tutorial/AboutP5/sketch01.html" class="sample-sketch"></iframe>

```processing
// プログラム開始時に一度だけ実行される処理
void setup() {
  size(750, 350);  // 画面サイズを設定
  background(255); // 背景色を設定
}

// setup実行後に繰り返し実行される処理
void draw() {
  // 図形の輪郭線を消す
  noStroke();
  // ランダムな色を指定
  fill(random(255), random(255), random(255), random(255));
  // マウスの位置にランダムな大きさの楕円を描く
  ellipse(mouseX, mouseY, random(50), random(50));
}
```

マウスリスナーを作る必要もありませんし、repaint()も要りません。マウスの座標はmouseX、mouseYのみで取得できます。このようにProcessingで書かれたプログラムは、アイデアとは関係のない記述が限界まで省かれていて、アイデアの本質がシンプルに表現されています。ちなみにこのWeb上で動くProcessingのプログラムは、JavaScriptというプログラミング言語で作られたp5.jsというライブラリで作られています。p5.jsではProcessingプログラムの書き方をほぼそのまま使うことができるので、自分の作品をWeb上で公開したくなったらp5.jsを使うと比較的簡単に公開できます。
