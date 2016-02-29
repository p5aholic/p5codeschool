# 三角関数

三角関数を使うとどのような表現ができるか解説していきます。

## sin()とcos()

高校で習うサインとコサインはsin()とcos()で表現できます。サイン、コサインとは何なのかという話はかなーり奥の深い数学の話になってしまうので、ここでは使い方に重点を置いて解説します。

sin()とcos()のパラメータには角度をラジアン値で渡します。そして、sin()とcos()は渡されたラジアン値をもとに-1～1の値を返します。とりあえずsin()とcos()がどのような値を返すのか見てみましょう。まずはcos()から。

<iframe src="/samples/tutorial/Chapter11/sketch01.html" class="sample-sketch"></iframe>

[Chapter11/sketch01.pde](github:Chapter11/sketch01/sketch01.pde)

```processing
void setup() {
  size(750, 350);
  stroke(255, 0, 0);
  strokeWeight(20);
}

void draw() {
  background(255);
  // 原点を画面中心に移動
  translate(width/2, height/2);

  // cos()が返した値をxに代入
  float x = 100 * cos(frameCount * 0.05);

  // xを表す点を描画してみる
  point(x, 0);
}
```

sin()とcos()が返す値は-1～1なので、わかりやすいように100を掛けています。sin()も同じようにしてどのような値を返すのか見てみましょう。

<iframe src="/samples/tutorial/Chapter11/sketch02.html" class="sample-sketch"></iframe>

[Chapter11/sketch02.pde](github:Chapter11/sketch02/sketch02.pde)

```processing
void setup() {
  size(750, 350);
  stroke(0, 255, 0);
  strokeWeight(20);
}

void draw() {
  background(255);
  // 原点を画面中心に移動
  translate(width/2, height/2);

  // sin()が返した値をyに代入
  float y = 100 * sin(frameCount * 0.05);

  // yを表す点を描画してみる
  point(0, y);
}
```

では、この２つを組み合わせてpoint(x, y)を描画してみましょう。

<iframe src="/samples/tutorial/Chapter11/sketch03.html" class="sample-sketch"></iframe>

[Chapter11/sketch03.pde](github:Chapter11/sketch03/sketch03.pde)

```processing
void setup() {
  size(750, 350);
  stroke(0, 0, 255);
  strokeWeight(20);
}

void draw() {
  background(255);
  translate(width/2, height/2);

  float x = 100*cos(frameCount * 0.05);
  float y = 100*sin(frameCount * 0.05);

  point(x, y);
}
```

どうやらcos()が返す値をx座標とし、sin()が返す値をy座標とするとpoint(x, y)は円を描くようにグルグル回るようです。このことがわかったうえで、高校で習う三角関数がどのようなものかをちょっとだけ解説します。

高校数学では、サインとコサインは次のように表現されています。

半径rの円が原点にあったとして、αはx軸との角度を表し、座標(x, y)はx軸との角度αの円上の点を表しています。このとき、<br>
sin(α) = y / r<br>
cos(α) = x / r<br>
となります。r = 1だったとすると、当然<br>
sin(α) = y<br>
cos(α) = x<br>
になります。この半径1のときのsin(α)とcos(α)が、Processingのsin()とcos()になります。sin()とcos()はパラメータにx軸との角度αを渡すと、角度αで半径1の円上の点の座標を返す関数です。ただし、Processingの座標系は高校数学で使う座標系とは違い、角度が時計回りに増えていくことに注意です。

次のプログラムではsin()とcos()を使って円状に点を描画しています。

<iframe src="/samples/tutorial/Chapter11/sketch04.html" class="sample-sketch"></iframe>

[Chapter11/sketch04.pde](github:Chapter11/sketch04/sketch04.pde)

```processing
void setup() {
  size(750, 350);
  noLoop();
  stroke(0);
  strokeWeight(10);
}

void draw() {
  background(255);
  translate(width/2, height/2);

  // 0度から360度になるまで5度ずつ増やす
  for (int i = 0; i < 360; i += 5) {
    // ラジアンに変換
    float angle = radians(i);
    // 半径150の円上の座標を計算
    float x = 150 * cos(angle);
    float y = 150 * sin(angle);
    // 点を描画
    point(x, y);
  }
}
```

このプログラムでは360度になるまで描画していますが、マウスのx座標をmap()を使って角度に変換すると次のようになります。

<iframe src="/samples/tutorial/Chapter11/sketch05.html" class="sample-sketch"></iframe>

[Chapter11/sketch05.pde](github:Chapter11/sketch05/sketch05.pde)

```processing
void setup() {
  size(750, 350);
  stroke(0);
  strokeWeight(10);
}

void draw() {
  background(255);
  translate(width/2, height/2);

  // マウスのx座標を角度に変換
  float endAngle = map(mouseX, 0, width, 0, 360);

  // 0度からendAngleになるまで5度ずつ増やす
  for (int i = 0; i < endAngle; i += 5) {
    float angle = radians(i);
    float x = 150 * cos(angle);
    float y = 150 * sin(angle);
    point(x, y);
  }
}
```

次のプログラムでは、画面の左端から右端まで15px間隔で円を描画しています。 円のy座標をx座標に応じてsin()で変動させています。

<iframe src="/samples/tutorial/Chapter11/sketch06.html" class="sample-sketch"></iframe>

[Chapter11/sketch06.pde](github:Chapter11/sketch06/sketch06.pde)

```processing
void setup() {
  size(750, 350);
  noLoop();
  noStroke();
  fill(0);
}

void draw() {
  background(255);

  // 左端から右端まで15px間隔で円を描画
  for (int x = 0; x <= width; x += 15) {
    // xに応じて高さを変える
    float y = height/2 + 100 * sin(x * 0.01);
    ellipse(x, y, 15, 15);
  }
}
```

円のy座標は次のように決めています。

`float y = height/2 + 100 * sin(x*0.01);`

まずsin()にx\*0.01を渡します。x\*0.01が角度として扱われるので、画面の右端に行くほど角度は大きくなっていきます。これで100\*sin(x\*0.01)は0 → 100 → 0 → -100 → 0のように値が変わっていくことになります。すると、yはheight/2を中心としてheight/2-100～height/2+100の間を動くことになります。

xの最大値は700なので、x*0.01の最大値は7になります。TWO_PIが約6.28なので、sin(x\*0.01)は一周(TWO_PI)とちょっと回ったことになります。xに掛ける値を大きくすれば高さの変化が速くなり、小さくすれば遅くなります。色々試してみてください。

高さの決め方をちょこっと変えると次のようなものも作れます。

<iframe src="/samples/tutorial/Chapter11/sketch07.html" class="sample-sketch"></iframe>

[Chapter11/sketch07.pde](github:Chapter11/sketch07/sketch07.pde)

```processing
void setup() {
  size(750, 350);
  noStroke();
  fill(0);
}

void draw() {
  background(255);

  for (int x = 0; x <= width; x += 15) {
    float y = height/2 + 100 * sin(frameCount * 0.04 + x * 0.02);
    ellipse(x, y, 15, 15);
  }
}
```

波が右から左に流れているのように見えますが、円を左に動かしているわけではありません。sin()の中にframeCount\*0.04を加えたので１つ１つの円のy座標が変動するようになりました。全ての円でframeCount\*0.04の値は同じで、隣り合った円のy座標の差はsin(x\*0.02)になります。

上の２つのプログラムではsin()を使って円のy座標を変動させていましたが、次のプログラムでは画面左端から右端まで1pxの太さで描画された縦線を描画し、その色を変動させています。

<iframe src="/samples/tutorial/Chapter11/sketch08.html" class="sample-sketch"></iframe>

[Chapter11/sketch08.pde](github:Chapter11/sketch08/sketch08.pde)

```processing
void setup() {
  size(750, 350);
  noLoop();
}

void draw() {
  // 左端から右端まで太さ1pxの縦線を敷き詰める
  for (int x = 0; x <= width; x++) {
    // xに応じて色変える
    float c = 255 * abs(sin(x * 0.01));
    stroke(c);
    line(x, 0, x, height);
  }
}
```

sin()は-1～1の値を返しますが、色にマイナス値はないのでabs()を使ってsin()の絶対値を取っています。sin()の中にframeCountを加えると次のようになります。

<iframe src="/samples/tutorial/Chapter11/sketch09.html" class="sample-sketch"></iframe>

[Chapter11/sketch09.pde](github:Chapter11/sketch09/sketch09.pde)

```processing
void setup() {
  size(750, 350);
}

void draw() {
  for (int x = 0; x <= width; x++) {
    float c = 255 * abs(sin(frameCount * 0.04 + x * 0.04));
    stroke(c);
    line(x, 0, x, height);
  }
}
```

上下に変動する円のプログラムのように、右から左に動いているように見えますが、線の位置は全く動いていません。変わっているのは線の色だけです。

お疲れさまでした。Chapter11はこれで終了です。
