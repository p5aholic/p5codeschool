# setup()とdraw()

このChapterからちょっとずつ楽しいことができるようになってきます。今回はアニメーション作成の基本となる*setup*関数と*draw*関数について解説していきます。

## setup()、draw()の役割

とりあえず以下のプログラムを動かしてみてください。まだ理解できなくても大丈夫です。マウスの位置に半透明の円が連続して描画されることを確認してください。

![](/images/Chapter5/sketch01.jpg)

[Chapter5/sketch01.pde](github:Chapter5/sketch01/sketch01.pde)

```processing
// 初期設定
void setup() {
  size(960, 540);
  background(255);
  noStroke();
  fill(0, 50);
}

// setup()実行後に繰り返し実行される処理
void draw() {
  // マウスの位置に円を描画
  ellipse(mouseX, mouseY, 50, 50);
}
```

*setup()*と*draw()*がどんな関数でどんな役割があるのかを解説します。*setup()*と*draw()*もこれまでに使ってきた*size()*や*fill()*などと同じで、 Processing側が元々用意してくれている関数です。*setup()*と*draw()*が他の関数と違うのは、中身の処理が具体的に定義されていないというところです。 なので*setup()*と*draw()*を使う場合はこちら側が中身の処理を書いて*setup()*と*draw()*を定義しなおします。

`
void setup() {
  // 中身の処理
} void draw() {
  // 中身の処理
}
`

関数の定義の仕方はChapter8で詳しく解説します。「voidってなんだ」とか色々疑問が浮かぶかもしれませんが今はとりあえず真似しておいてください。フライングしてちょっとだけ説明すると、関数には値を返す関数と返さない関数があって、*void*は関数が値を返さないことを示すキーワードです。

関数の中身の処理を記述するときは中身を{}で囲みます。{}の中の記述に行頭から少し間が空いてるのがわかるかと思います。これはインデント（字下げ）と呼ばれていて、Processingエディターでは自動でインデントが挿入されます。Tabキーを押すことでもインデントができます。インデントが無くてもプログラムの実行には影響がないのですが、プログラムを見やすくするためにはインデントをしていたほうがいいです。この場合では{}で囲まれた中の記述であることを強調するためにインデントをしています。

*setup()*はプログラムの実行時に一度だけ実行される関数です。setupという名前からも分かる通り、プログラムの実行中に変化しないような初期設定を*setup()*の中で行います。プログラム実行中に変化しないような設定とは、例えばウィンドウサイズを決める*size()*だったりがそうです。

*draw()*は*setup()*の実行後に繰り返し実行される関数です。具体的にどれくらいの頻度で繰り返されるかというと、デフォルトで1秒間に60回繰り返されます。これを60fps(frames per second : 一秒あたりのフレーム数)と言います。また1秒間にどれだけ繰り返されるかをフレームレートといい、60fpsの場合はフレームレートが60ということになります。フレームレートの考えかたはノートの右下に描くようなパラパラ漫画と全く同じです。一秒間に60ページ分の絵をめくると60fpsになり、1枚の絵はフレームと呼ばれます。

上のプログラムをもう一度見てください。*setup()*の中でウィンドウサイズと背景色、色と枠線を設定しています。これらは*draw()*が繰り返される中で変わらない設定だからです。*draw()*の中ではマウスの位置に半透明な円を描く処理を記述しています。*mouseX*と*mouseY*は*width*や*height*と同じで、Processing側が用意してくれている変数で、常にマウスの現在の座標を保持しています。*draw()*は1秒間に60回実行されるので１秒間に60個の円がマウスの位置に描画されます。マウスをずっと同じ位置に置いておくと円が重なってすぐに真っ黒になり、マウスを素早く動かすと円が飛び飛びに描画されます。

一つ前のフレームにおけるマウスの座標を保持している*pmouseX*、*pmouseY*という変数もあります。これを使えば繋がった線を描画することができます。*pmouseX*のpは「前」を意味する英語のpreviousのことです。

![](/images/Chapter5/sketch02.jpg)

[Chapter5/sketch02.pde](github:Chapter5/sketch02/sketch02.pde)

```processing
void setup() {
  size(960, 540);
  background(255);
  strokeWeight(10);
  stroke(0, 50);
}

void draw() {
  /* １フレーム前のマウスの座標から
   現在のマウスの座標まで線を引く */
  line(pmouseX, pmouseY, mouseX, mouseY);
}
```

上の2つのプログラムでは、前の*draw()*によって描画された内容が残り続けていました。*draw()*の先頭で*background()*を使うと背景色を初期化することができ、ウィンドウに常に現在の*draw()*による描画内容だけを表示することができます。下のコードを確認してください。ついでにフレームレートを変更できる*frameRate*関数を使ってみました。フレームレートを15まで落としているので、描画がカクカクしているのがわかるかと思います。

[Chapter5/sketch03.pde](github:Chapter5/sketch03/sketch03.pde)

```processing
void setup() {
  size(960, 540);
  strokeWeight(20);
  stroke(0);
  // フレームレートを15に変更
  frameRate(15);
}

void draw() {
  // 背景を初期化
  background(255);
  line(pmouseX, pmouseY, mouseX, mouseY);
}
```

*frameRate()*によって設定できるフレームレートはあくまでも最大のフレームレートです。*frameRate(60)*と設定していても、Processingプログラムを動かすコンピュータの性能が悪かったり、*draw()*の処理内容が高負荷だったりすると60fpsを下回ることがあります。

現在までに更新されたフレームの数は*frameCount*という変数に保存されています。フレームレートが60なら*frameCount*は1秒後に60、2秒後に120、3秒後に180とどんどん増えていきます。これと余りを求める*%*を使うと次のようなプログラムも作れます。

![](/images/Chapter5/sketch04.jpg)

[Chapter5/sketch04.pde](github:Chapter5/sketch04/sketch04.pde)

```processing
void setup() {
  size(960, 540);
  noStroke();
}

void draw() {
  background(0, frameCount % 256, frameCount % 256);
  ellipse(width/2, height/2, frameCount % 256, frameCount % 256);
}
```

*frameCount*はどんどん増えていきますが、*frameCount*を256で割った余りは256以上になることはありません。255になると次はまた0になります。これを背景色と*ellipse()*の大きさに指定しています。

## 変数の寿命

変数には寿命(有効である期間)があります。{}で囲まれた範囲のことをブロックと言うのですが、ブロック内で宣言された変数の寿命は宣言されてからそのブロックが終了するまでです。対して、*setup*関数や*draw*関数のブロックの外側で宣言された変数はプログラム開始からプログラム終了までの寿命を持ちます。次のプログラムでは、*setup*関数と*draw*関数のブロックの外側で*int*型変数の*a*を宣言しています。変数*b*は*setup*関数内で宣言されているので、変数*b*が使える範囲は*setup*関数内の*b*が宣言された行以降のみになります。*draw*関数内で変数*b*を使おうとしても変数*b*は*setup*関数が終わった時点で有効期間が終わっているのでエラーが出ます。

[Chapter5/sketch05.pde](github:Chapter5/sketch05/sketch05.pde)

```processing
int a = 5; // プログラム終了まで生き残る変数

void setup() {
  println(a); // 5
  int b = 10; // setup関数内のこの行以降でのみ生きられる変数
  println(b); // 10
}

void draw() {
  println(a); // 5
  println(b); // エラー
}
```

変数の寿命にはその他にも細かいルールがあるのですが、それらは必要に応じて後のChapterで詳しく解説します。

次のプログラムを見てください。マウスの位置に色が徐々に変化する円を描画しています。

![](/images/Chapter5/sketch06.jpg)

[Chapter5/sketch06.pde](github:Chapter5/sketch06/sketch06.pde)

```processing
int hue = 0;

void setup() {
  size(960, 540);
  background(255);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

void draw() {
  hue = (hue + 1) % 361;
  fill(hue, 80, 60, 20);
  ellipse(mouseX, mouseY, 40, 40);
}
```

HSBカラーモードにして、*setup*関数の上で*int*型変数の*hue*を初期化しています。*draw*関数内で*hue*の値を1ずつ足していき、0から360間で値を循環させています。このように*draw*関数内で継続的に値を更新したりする変数は*setup*関数と*draw*関数の外側で宣言する必要があります。変数*hue*を*setup*関数内で宣言しても*draw*関数では使えませんし、*draw*関数内で宣言すると*draw*関数が実行される度に値がリセットされてしまうので継続的に値を更新することができません。

## 乱数

プログラムで乱数(ランダムな値)を作る*random*関数を紹介します。使い方は次の2通りです。

<dl class="p5-functions">
  <dt>[random(high)](p5ref:random_.html)</dt>
  <dd>0以上high未満のランダムな値を作る</dd>
  <dt>[random(row, high)](p5ref:random_.html)</dt>
  <dd>row以上high未満のランダムな値を作る</dd>
</dl>

次のプログラムではマウスの位置に色と大きさがランダムな円を描画しています。

![](/images/Chapter5/sketch07.jpg)

[Chapter5/sketch07.pde](github:Chapter5/sketch07/sketch07.pde)

```processing
void setup() {
  size(960, 540);
  background(255);
  noStroke();
}

void draw() {
  // ランダムな色を指定
  fill(random(255), random(255), random(255), random(255));
  // マウスの位置にランダムな大きさの楕円を描く
  ellipse(mouseX, mouseY, random(80), random(80));
}
```

*random()*を使うとこういう予測不可能な表現が簡単に作れます。色々な値をランダムにして遊んでみてください。

お疲れさまでした。Chapter5はこれで終了です。
