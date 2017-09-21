# 乱数

random()によって作ることができる乱数を復習したあと、パーリンノイズと呼ばれる特殊な乱数について解説します。

## random()で作る乱数

random()は今までに何回か出てきましたがもう一度復習しておきます。random()には次の２通りの使い方があります。

<dl class="p5Functions">
    <dt>[random(high)](p5ref:random_.html)</dt>
    <dd>0以上high未満の乱数を返す</dd>
    <dt>[radnom(low, high)](p5ref:random_.html)</dt>
    <dd>low以上high未満の乱数を返す</dd>
</dl>

返す値がhigh未満だということだけ注意してください。random(5)なら返ってくる値は5を含みません。random(10.4)なら返ってくる値は10.4を含みません。前回解説したsin()とcos()を使って次のプログラムを作りました。

<iframe src="/samples/tutorial/Chapter12/sketch01.html" class="sample-sketch"></iframe>

[Chapter12/sketch01.pde](github:Chapter12/sketch01/sketch01.pde)

```processing
void setup() {
  size(960, 540);
  noLoop();
  stroke(0);
  strokeWeight(5);
}

void draw() {
  background(255);
  translate(width/2, height/2);

  // 長さがランダムな線を放射状に描画する
  for (int i = 0; i < 360; i += 5) {
    float angle = radians(i);
    // ランダムな半径
    float radius = random(200);
    float x = radius * cos(angle);
    float y = radius * sin(angle);
    // 中心から(x, y)に向かう線
    line(0, 0, x, y);
  }
}

// マウスクリックで再描画
void mousePressed() {
  redraw();
}
```

## シード値
通常、random()によって作られる乱数はプログラムが実行されるたびに違った値になります。言葉ではよくわからないと思うので、次のプログラムを実行してみてください。

[Chapter12/sketch02.pde](github:Chapter12/sketch02/sketch02.pde)

```processing
for (int i = 0; i < 10; i++) {
  println(random(100));
}
```

0以上100未満の値を10個出力します。このプログラムを終了してもう１度実行すると、全く異なる10個の乱数が出力されます。次のプログラムも同じように、1度実行して、プログラムを終了してからもう１度実行してみてください。

[Chapter12/sketch03.pde](github:Chapter12/sketch03/sketch03.pde)

```processing
// シード値を設定
randomSeed(10);
for (int i = 0; i < 10; i++) {
  println(random(100));
}
```

このプログラムでは何度実行しても全く同じ10個の乱数が出力されます。randomSeed()を使ってシード値(int型)と呼ばれるものを設定すると、プログラムの実行ごとに同じ乱数列を作ることができます。シード値はint型ならなんでも構いません。randomSeed()を使わなかった場合、シード値は毎回別の値になってrandom()はプログラムの実行ごとに異なる乱数列を作ります。Processingでプログラムを書く限りではrandomSeed()の出番はほとんど無いかと思いますが、まぁそういう機能もあるってことだけ知っていればいいかと思います。

## パーリンノイズ

random()の他にProcessingにはnoise()という関数が用意されていて、noise()を使うとパーリンノイズと呼ばれる乱数を作ることができます。Ken Perlinさんが考えた乱数生成法なのでパーリンノイズと呼ばれます。noise()によって作られた乱数は隣り合った乱数の数値の差がわずかで、全体として滑らかに変化する乱数になります。random()によって作られる乱数は隣り合った乱数の差がとびとびの値を取っていました。次のプログラムではrandom()によってy座標が変動する点を左端から右端まで描画しています。

<iframe src="/samples/tutorial/Chapter12/sketch04.html" class="sample-sketch"></iframe>

[Chapter12/sketch04.pde](github:Chapter12/sketch04/sketch04.pde)

```processing
void setup() {
  size(960, 540);
  noLoop();
  stroke(0);
  strokeWeight(5);
}

void draw() {
  background(255);

  // 左端から右端まで5px間隔で点を描画する
  for (int x = 0; x <= width; x += 5) {
    // 点のy座標をrandom()で変動させる
    float y = height/2 + random(-100, 100);
    // 点を描画
    point(x, y);
  }
}
```

次のプログラムは点のy座標をrandom()ではなくnoise()によって変動させたものです。解説は後で詳しくするのでざっとプログラムを見てください。マウスクリックで再描画できます。

<iframe src="/samples/tutorial/Chapter12/sketch05.html" class="sample-sketch"></iframe>

[Chapter12/sketch05.pde](github:Chapter12/sketch05/sketch05.pde)

```processing
float noise = 0.0;      // noise()に指定する値
float noiseStep = 0.05; // noiseの更新に使う値

void setup() {
  size(960, 540);
  noLoop();
  stroke(0);
  strokeWeight(5);
}

void draw() {
  background(255);

  // 左端から右端まで5px間隔で点を描画する
  for (int x = 0; x <= width; x += 5) {
    // 点のy座標をnoise()で変動させる
    float y = height/2 + noise(noise) * 200 - 100;
    // 点を描画
    point(x, y);
    // noiseを更新
    noise += noiseStep;
  }
}

void mousePressed() {
  redraw();
}
```

random()の場合とは違い、隣り合った点のy座標は近い値を取り、全体として滑らかに変化しているのがわかるかと思います。noise()を使うと滑らかに変化する乱数を作ることができるので、コンピュータグラフィックスの世界では物体のテクスチャを作ったりするのに重宝されています。僕はマインクラフトはやったことがないのですが、マインクラフトでは最初にワールドを作る際地形の生成にパーリンノイズを使っています。もしパーリンノイズではなく普通の乱数で地形を生成していたら、一歩先が崖になっていたり絶壁になっていたりして移動不可能なワールドができてしまいます。

noise()の使い方を解説します。noise()は、パラメータにどんな値を指定しても0～1の間の値を返します。なので、必要に応じてnoise()に値を掛けたりnoise()から値を引いたりして欲しい値を作ります。上のプログラムでは、

`noise(noise) * 200 - 100`

とすることで-100～100の間の値を作っています。

noise()はパラメータにどんな値を指定しても0～1の間の値を返すので、パラメータの値はどうでもいいんです。重要なのはパラメータが増加(または減少)する間隔です。上のプログラムではnoise()に指定するパラメータが変数noiseで、noiseの増加間隔をnoiseStepという変数で用意しています。 noise()はパラメータに同じ値を指定すると同じ値を返します。raddom()とは全然違うので注意してください。noise(1234)を何度実行しても同じ値が返ってきます。noise()が返す値を変動させるには、noise()に指定するパラメータの値を増加させます。なので、上のプログラムではfor文の最後に

`noise += noiseStep;`

を実行してnoise()に指定するパラメータを増加させています。noise()はパラメータの値の増加間隔が大きければ大きいほど隣り合った数値の差が大きくなり、増加間隔が小さければ小さいほど隣り合った数値の差が小さくなります。試しにnoiseStepの値を0.05から1に変えると次のようにrandom()の場合と見分けがつかなくなります。

<iframe src="/samples/tutorial/Chapter12/sketch06.html" class="sample-sketch"></iframe>

noiseStepを0.01まで下げると少し曲がった直線のようになります。

<iframe src="/samples/tutorial/Chapter12/sketch07.html" class="sample-sketch"></iframe>

noiseSeed()を使えばnoise()で生成する乱数にもシード値を設定することができます。

[Chapter12/sketch06.pde](github:Chapter12/sketch06/sketch06.pde)

```processing
ffloat noise = 0.0;
float noiseStep = 0.05;

// シード値を設定して乱数を固定

noiseSeed(10);
for (int i = 0; i < 10; i++) {
  float n = noise(noise) * 100;
  println(n);
  noise += noiseStep;
}
```

お疲れさまでした。Chapter12はこれで終了です。
