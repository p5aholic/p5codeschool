# setup()とdraw()

このChapterからちょっとずつ楽しいことができるようになってきます。今回はアニメーション作成の基本となるsetup()関数とdraw()関数について解説していきます。

## setup()、draw()の役割

とりあえず以下のプログラムを動かしてみてください。まだ理解できなくても大丈夫です。マウスの位置に半透明の円が連続して描画されることを確認してください。

<iframe src="/samples/tutorial/Chapter5/sketch01.html" class="sample-sketch"></iframe>

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

setup()とdraw()がどんな関数でどんな役割があるのかを解説します。setup()とdraw()もこれまでに使ってきたsize()やfill()などと同じで、 Processing側が元々用意してくれている関数です。setup()とdraw()が他の関数と違うのは、中身の処理が具体的に定義されていないというところです。 なのでsetup()とdraw()を使う場合はこちら側が中身の処理を書いてsetup()とdraw()を定義しなおします。

`
void setup() {
  // 中身の処理
} void draw() {
  // 中身の処理
}
`

関数の定義の仕方はChapter8で詳しく解説します。「voidってなんだ」とか色々疑問が浮かぶかもしれませんが今はとりあえず真似しておいてください。フライングしてちょっとだけ説明すると、関数には値を返す関数と返さない関数があって、voidは関数が値を返さないことを示すキーワードです。

関数の中身の処理を記述するときは中身を{}で囲みます。{}の中の記述に行頭から少し間が空いてるのがわかるかと思います。これはインデント（字下げ）と呼ばれていて、Processingエディターでは自動でインデントが挿入されます。Tabキーを押すことでもインデントができます。インデントが無くてもプログラムの実行には影響がないのですが、プログラムを見やすくするためにはインデントをしていたほうがいいです。この場合では{}で囲まれた中の記述であることを強調するためにインデントをしています。

setup()関数はプログラムの実行時に一度だけ実行される関数です。setupという名前からも分かる通り、プログラムの実行中に変化しないような初期設定をsetup()関数の中で行います。プログラム実行中に変化しないような設定とは、例えばウィンドウサイズを決めるsize()だったりがそうです。

draw()関数はsetup()の実行後に繰り返し実行される関数です。具体的にどれくらいの頻度で繰り返されるかというと、デフォルトで１秒間に60回繰り返されます。言い直すと、draw()関数の中に書いた処理は１秒間に60回繰り返し実行されるんです。これを60fps(frames per second : 一秒あたりのフレーム数)と言います。また１秒間にどれだけ繰り返されるかをフレームレートといい、60fpsの場合はフレームレートが60ということになります。フレームレートの考えかたはノートの右下に描くようなパラパラ漫画と全く同じです。一秒間に60ページ分の絵をめくると60fpsになり、１枚の絵はフレームと呼ばれます。

上のプログラムをもう一度見てください。setup()関数の中でウィンドウサイズと背景色、色と枠線を設定しています。これらはdraw()関数が繰り返される中で変わらない設定だからです。draw()の中ではマウスの位置に半透明な円を描く処理を記述しています。mouseXとmouseYはwidthやheightを同じで、Processing側が用意してくれている変数で、常にマウスの現在の座標を保持しています。draw()関数は１秒間に60回実行されるので１秒間に60個の円がマウスの位置に描画されます。マウスをずっと同じ位置に置いておくと円が重なってすぐに真っ黒になり、マウスを素早く動かすと円が飛び飛びに描画されます。一つ前のフレームにおけるマウスの座標を保持しているpmouseX、pmouseYという変数もあります。これを使えば繋がった線を描画することができます。pmouseXのpは「前」を意味する英語のpreviousのことです。

<iframe src="/samples/tutorial/Chapter5/sketch02.html" class="sample-sketch"></iframe>

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

上の２つのプログラムでは、前のdraw()関数によって描画された内容が残り続けていました。draw()関数の先頭でbackground()を使うと背景色を初期化することができ、ウィンドウに常に現在のdraw()関数による描画内容だけを表示することができます。下のコードを確認してください。ついでにフレームレートを変更できるframeRate()関数を使ってみました。フレームレートを１５まで落としているので、描画がカクカクしているのがわかるかと思います。カクカクはしていますが、なかなか味のある動きになっているかと思います。 レートを色々変えて遊んでみてください。

<iframe src="/samples/tutorial/Chapter5/sketch03.html" class="sample-sketch"></iframe>

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

フレームレートは高ければ高いほど１秒間に表示する絵が多くなってアニメーションは滑らかに見えます。ほとんどの場合はフレームレートは高いほうがいいのですが、作るプログラムによってはレートを下げることによって面白い動きが生まれることもあります。１秒ごとにdraw()を実行したい場合などはframeRate(1)とすればいいです。

frameRate()関数によって設定できるフレームレートはあくまでも最大のフレームレートです。frameRate(30)と設定していても、Processingプログラムを動かすコンピュータの性能が悪かったり、draw()関数の処理内容が高負荷だったりすると30fpsを下回ることがあります。

現在までに更新されたフレームの数はframeCountという変数に保存されています。フレームレートが60ならframeCountは1秒後に60、2秒後に120、3秒後に180とどんどん増えていきます。これと余りを求める%を使うと次のようなプログラムも作れます。

<iframe src="/samples/tutorial/Chapter5/sketch04.html" class="sample-sketch"></iframe>

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

frameCountはどんどん増えていきますが、frameCountを256で割った余りは256以上になることはありません。255になると次はまた0になります。これを背景色とellipse()の大きさに指定しています。

## 変数の寿命

変数には寿命(有効である期間)があります。{}で囲まれた範囲のことをブロックと言うのですが、ブロック内で宣言された変数の寿命は宣言されてからそのブロックが終了するまでです。対して、setup関数やdraw関数のブロックの外側で宣言された変数はプログラム開始からプログラム終了までの寿命を持ちます。次のプログラムでは、setup関数とdraw関数のブロックの外側でint型変数のaを宣言しています。変数bはsetup関数内で宣言されているので、変数bが使える範囲はsetup関数内のbが宣言された行以降のみになります。draw関数内で変数bを使おうとしても変数bはsetup関数が終わった時点で有効期間が終わっているのでエラーが出ます。

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

<iframe src="/samples/tutorial/Chapter5/sketch06.html" class="sample-sketch"></iframe>

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

HSBカラーモードにして、setup関数の上でint型変数のhueを初期化しています。draw関数内でhueの値を1ずつ足していき、0から360間で値を循環させています。このようにdraw関数内で継続的に値を更新したりする変数はsetup関数とdraw関数の外側で宣言する必要があります。変数hueをsetup関数内で宣言してもdraw関数では使えませんし、draw関数内で宣言するとdraw関数が実行される度に値がリセットされてしまうので継続的に値を更新することができません。

## 乱数

プログラムで乱数(ランダムな値)を作るrandom()関数を紹介します。使い方は次の２通りです。

<dl class="p5Functions">
    <dt>[random(high)](p5ref:random_.html)</dt>
    <dd>0以上high未満のランダムな値を作る</dd>
    <dt>[random(row, high)](p5ref:random_.html)</dt>
    <dd>row以上high未満のランダムな値を作る</dd>
</dl>

次のプログラムではマウスの位置に色と大きさがランダムな円を描画しています。

<iframe src="/samples/tutorial/Chapter5/sketch07.html" class="sample-sketch"></iframe>

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

random()関数を使うとこういう予測不可能な表現が簡単に作れます。色々な値をランダムにして遊んでみてください。

お疲れさまでした。Chapter5はこれで終了です。
