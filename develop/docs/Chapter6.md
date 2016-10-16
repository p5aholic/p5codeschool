# 条件分岐

条件分岐を使うとプログラムの流れを変えたり、ある処理を特定の条件の時にだけ実行させることができます。例えばellipse()で描く円をボールに見立てて、ボールがウィンドウの端で跳ね返るプログラムを作るなら、ボールがウィンドウの端にあるかどうかを判定して端にある時だけボールの進行方向を反転させます。

## 真偽値と比較演算子

Chapter4でint、float、colorの３つのデータ型を紹介しました。ここではもう一つboolean(ブーリアン)型というデータ型を紹介します。boolean型は真偽値と呼ばれる値を扱うデータ型で、boolean型が扱える値はtrue(真)かfalse(偽)の２つのみです。

[Chapter6/sketch01.pde](github:Chapter6/sketch01/sketch01.pde)

```processing
boolean b1 = true;
boolean b2 = false;
println(b1); // true
println(b2); // false
```

boolean型変数が真ならコッチ、偽ならアッチという風にプログラムの流れを変える場合に使ったりします。

２つの値を比較してtrueかfalseを返す比較演算子と呼ばれるものを紹介します。

<dl class="func-list">
    <dt><</dt>
    <dd>より小さい</dd>
    <dt><=</dt>
    <dd>より小さい、もしくは等しい(以下)</dd>
    <dt>></dt>
    <dd>より大きい</dd>
    <dt>>=</dt>
    <dd>より大きい、もしくは等しい(以上)</dd>
    <dt>==</dt>
    <dd>等しい</dd>
    <dt>!=</dt>
    <dd>等しくない</dd>
</dl>

[Chapter6/sketch02.pde](github:Chapter6/sketch02/sketch02.pde)

```processing
println(5 < 10);   // true
println(10 <= 10); // true
println(5 > 10);   // false
println(9 >= 10);  // false
println(3 == 3);   // true
println(7 != 7);   // false
```

int型やfloat型の算術演算と同じような感覚で演算結果をboolean型変数に代入することもできます。

[Chapter6/sketch03.pde](github:Chapter6/sketch03/sketch03.pde)

```processing
// 5 < 10の結果をb1に代入
boolean b1 = 5 < 10;
println(b1); // true

// 9 == 10の結果をb2に代入
boolean b2 = 9 == 10;
println(b2); // false
```

## 条件分岐

これらの比較演算を使ってプログラム内に条件分岐を作っていきます。条件分岐はif()文を使って作ることができます。

`
if (真偽値) {
  // 処理
}
`

ifと書いた後に真偽値を()で囲みます。{}で囲まれた中の処理は真偽値がtrueのときのみ実行されます。もちろん()の中に比較演算子を用いた条件式を書くこともできます。

`
if (条件式) {
  // 処理
}
`

処理内容が１行だけで書ける場合は{}で囲まなくても大丈夫です。

`
if (条件式) // 処理
`

ただ、見やすさのために１行だけでも{}で囲むことはよくあります。

ウィンドウの端でボールが跳ね返るプログラムを作ってみました。今までと比べてかなり本格的なプログラムですが、詳しく解説していくので安心してください。

<iframe src="/samples/tutorial/Chapter6/sketch04.html" class="sample-sketch"></iframe>

[Chapter6/sketch04.pde](github:Chapter6/sketch04/sketch04.pde)

```processing
int x, y;     // ボールの位置
int vx, vy;   // ボールの速度
int ballSize; // ボールの大きさ

void setup() {
  size(750, 350);
  noStroke();
  fill(255);
  // ボールの初期値を設定
  x = width/2;
  y = height/2;
  vx = 3;
  vy = 2;
  ballSize = 40;
}

void draw() {
  background(180);

  // ボールを描画
  ellipse(x, y, ballSize, ballSize);

  // ボールを動かす
  x += vx;
  y += vy;

  // 左の壁にぶつかったら
  if (x-ballSize/2 <= 0) {
    vx *= -1; // x軸方向の速度反転
  }
  // 右の壁にぶつかったら
  if (x+ballSize/2 >= width) {
    vx *= -1; // x軸方向の速度反転
  }
  // 上の壁にぶつかったら
  if (y-ballSize/2 <= 0) {
    vy *= -1; // y軸方向の速度反転
  }
  // 下の壁にぶつかったら
  if (y+ballSize/2 >= height) {
    vy *= -1; // y軸方向の速度反転
  }
}
```

まず、ellipse()で描画するボールの位置、速度、大きさを表す変数を用意します。vxはx軸方向の速度、vyはy軸方向の速度を表しています。vは速度を意味する英語のvelocityから取っています。

```processing
int x, y;     // ボールの位置
int vx, vy;   // ボールの速度
int ballSize; // ボールの大きさ
```

変数に初期値を設定します。

```processing
x = width/2;
y = height/2;
vx = 3;
vy = 2;
ballSize = 40;
```

ボールをellipse()で描画した後に、位置xにはx軸方向の速度vxを、位置yにはy軸方向の速度vyを足します。こうすることでボールが動いていくように見えます。

```processing
ellipse(x, y, ballSize, ballSize);

// ボールを動かす
x += vx;
y += vy;
```

ウィンドウの端にボールが来た時に速度に-1をかけることでボールを跳ね返えらせます。ボールの位置x、yはボールの中心座標を表しています。ウィンドウの左端にぶつかるのはボールの左端(x-ballSize/2)なので左端にぶつかった時を表すif文の条件式を

`x-ballSize/2 <= 0`

としています。ウィンドウの右端にぶつかるのはボールの右端(x+ballSize/2)なので右端にぶつかった時を表すif文の条件式を

`x+ballSize/2 >= width`

としています。ウィンドウの上端と下端も同様です。

```processing
// 左の壁にぶつかったら
if (x-ballSize/2 <= 0) {
  vx *= -1; // x軸方向の速度反転
}
// 右の壁にぶつかったら
if (x+ballSize/2 >= width) {
  vx *= -1; // x軸方向の速度反転
}
// 上の壁にぶつかったら
if (y-ballSize/2 <= 0) {
  vy *= -1; // y軸方向の速度反転
}
// 下の壁にぶつかったら
if (y+ballSize/2 >= height) {
  vy *= -1; // y軸方向の速度反転
}
```

これら４つのif文の{}で囲まれた中の処理はそれぞれのif文の条件式がtrueを返したときのみ実行されます。それぞれの条件式で使う比較演算子に <= と >= を使って、ボールの端がウィンドウの端と等しい場合だけでなく、超えた場合についても対応しています。vxとvyの値によってはボールの端とウィンドウの端が完全に一致せずに超えてしまうこともあるからです。

## 論理演算子

上の４つのif文は論理演算子というものを使うと２つのif文にまとめることができます。論理演算子には以下の３つがあります。

<dl class="func-list">
    <dt>||</dt>
    <dd>または(論理和)、OR</dd>
    <dt>&&</dt>
    <dd>かつ(論理積)、AND</dd>
    <dt>!</dt>
    <dd>でなければ(論理否定)、NOT</dd>
</dl>

論理和は２つの真偽値を比べて２つとも偽(false)だった場合のみfalseを返します。それ以外はtrueを返します。論理積は２つの真偽値を比べて２つとも真(true)だった場合のみtrueを返します。それ以外はfalseを返します。論理否定はtrueをfalseに、falseをtrueにして返します

[Chapter6/sketch05.pde](github:Chapter6/sketch05/sketch05.pde)

```processing
boolean b1 = (5 == 5) || (4 == 4); // true OR true
boolean b2 = (5 == 5) || (4 == 3); // true OR false
boolean b3 = (5 == 3) || (4 == 3); // false OR false
println(b1); // true
println(b2); // true
println(b3); // false
println("-----");

boolean b4 = (5 == 5) && (4 == 4); // true AND true
boolean b5 = (5 == 5) && (4 == 3); // true AND false
boolean b6 = (5 == 3) && (4 == 3); // false AND false
println(b4); // true
println(b5); // false
println(b6); // false
println("-----");

println(!true); // false
println(!false); // true
```

(5 == 5)のように()で囲っているのは見やすくするためだけです。

論理和を使ってボールがウィンドウの端で跳ね返る処理を２つのif文にまとめると次のようになります。

```processing
// 左右の壁との当たり判定
if (x-ballSize/2 <= 0 || x+ballSize/2 >= width) {
  vx *= -1;
}
// 上下の壁との当たり判定
if (y-ballSize/2 <= 0 || y+ballSize/2 >= height) {
  vy *= -1;
}
```

## if else文

if文ではある条件に当てはまった場合のみの制御しかできませんでした。if else文を使うと、条件に当てはまらなかった場合の制御ができるようになります。

`
if (条件式) {
  // 真の場合の処理
} else {
  // 偽の場合の処理
}
`

通常のif文の後にelse文を書くと、if文の条件式が偽(false)だった場合にelse文の処理が実行されます。次のプログラムは、マウスがウィンドウの左半分にあるときは円を表示、そうでない(ウィンドウの右半分にある)ときは正方形を表示するプログラムです。

<iframe src="/samples/tutorial/Chapter6/sketch06.html" class="sample-sketch"></iframe>

[Chapter6/sketch06.pde](github:Chapter6/sketch06/sketch06.pde)

```processing
void setup() {
  size(750, 350);
  noFill();
  strokeWeight(5);
  rectMode(CENTER);
}

void draw() {
  background(128);

  // 左半分
  if (mouseX <= width/2) {
    stroke(255);
    ellipse(mouseX, mouseY, 50, 50);
  }
  // 右半分
  else {
    stroke(0);
    rect(mouseX, mouseY, 50, 50);
  }
}
```

このif else文は次のようにif文だけで書いても見た目上の動きは同じです。

```processing
// 左半分
if (mouseX <= width/2) {
  stroke(255);
  ellipse(mouseX, mouseY, 50, 50);
}
// 右半分
if (mouseX > width/2) {
  stroke(0);
  rect(mouseX, mouseY, 50, 50);
}
```

でも、マウスがウィンドウの左半分にあり、かつ右半分にもあるということはありえません。このif文ではマウスがウィンドウの右半分にないとわかっていても、右半分にあるかを確かめることになります。左半分にあるならば右半分にないことはわかりきっています。こういう場合はif else文を使うのが適切です。

## else if文

if else文で２つの分岐を作ることができました。分岐をさらに増やすにはelse if文を使います。else if文は通常のif文の後に書いて分岐を増やすために使います。else if文はいくらでも書けます。else if文をずらーーっと書いた最後にelse文を書くと、全ての条件式に当てはまらなかった場合の処理が書けます。 最後のelse文は無くてもいいです。必要に応じて書くものです。

`
if (条件式1) {
  // 条件式1が真の場合の処理
} else if (条件式2) {
  // 条件式1が偽かつ条件式2が真の場合の処理
} else if (条件式3) {
  // 条件式1、2が偽かつ条件式3が真の場合の処理
} else {
  // どの条件式にも当てはまらなかった場合の処理
}
`

else if文は、それ以前にあるif文とelse if文が偽かつ自身が真の場合のみ実行されます。先頭のif文が真ならばそれ以降のelse if文と最後のelseは無視されます。

ウィンドウを４分割してそれぞれの領域で別々の図形を描くプログラムを作りました。

<iframe src="/samples/tutorial/Chapter6/sketch07.html" class="sample-sketch"></iframe>

[Chapter6/sketch07.pde](github:Chapter6/sketch07/sketch07.pde)

```processing
void setup() {
  size(750, 350);
  noFill();
  strokeWeight(5);
  rectMode(CENTER);
}

void draw() {
  background(0);

  // ４分割した左端
  if (mouseX >= 0 && mouseX < width/4) {
    stroke(220, 90, 20);
    ellipse(mouseX, mouseY, 50, 50);
  }
  // 4分割した左端から２番目
  else if (mouseX >= width/4 && mouseX < 2*width/4) {
    stroke(50, 110, 150);
    line(mouseX-25, mouseY-25, mouseX+25, mouseY+25);
    line(mouseX+25, mouseY-25, mouseX-25, mouseY+25);
  }
  // ４分割した右端から２番目
  else if (mouseX >= 2*width/4 && mouseX < 3*width/4) {
    stroke(230, 175, 150);
    rect(mouseX, mouseY, 50, 50);
  }
  // ４分割した右端
  else {
    stroke(65, 180, 110);
    triangle(mouseX-25, mouseY+25, mouseX, mouseY-25, mouseX+25, mouseY+25);
  }
}
```

else if文の中では論理演算子&&を使ってウィンドウの領域を区切っています。

## if文の中のif文

if文の中にif文を書いて、その中にif文を書いて・・・という風に入れ子状に書いていくことができます。次のプログラムはウィンドウを縦横に４分割して、それぞれの領域で別々の図形を描くプログラムです。

<iframe src="/samples/tutorial/Chapter6/sketch08.html" class="sample-sketch"></iframe>

[Chapter6/sketch08.pde](github:Chapter6/sketch08/sketch08.pde)

```processing
void setup() {
  size(750, 350);
  noFill();
  strokeWeight(5);
  rectMode(CENTER);
}

void draw() {
  background(0);

  // 左半分
  if (mouseX <= width/2) {
    // 上半分
    if (mouseY <= height/2) {
      stroke(220, 90, 20);
      ellipse(mouseX, mouseY, 50, 50);
    }
    // 下半分
    else {
      stroke(50, 110, 150);
      line(mouseX-25, mouseY-25, mouseX+25, mouseY+25);
      line(mouseX+25, mouseY-25, mouseX-25, mouseY+25);
    }
  }
  // 右半分
  else {
    // 上半分
    if (mouseY <= height/2) {
      stroke(230, 175, 150);
      rect(mouseX, mouseY, 50, 50);
    }
    // 下半分
    else {
      stroke(65, 180, 110);
      triangle(mouseX-25, mouseY+25, mouseX, mouseY-25, mouseX+25, mouseY+25);
    }
  }
}
```

まずウィンドウの左半分か右半分かで分岐させて、その中でさらに上半分か下半分で分岐させています。この入れ子状のif文も以下のように４つのif文で書くこともできますが、あまり適切ではないことはさきほど言った通りです。

```processing
// 左半分かつ上半分
if (mouseX <= width/2 && mouseY <= height/2) {
    stroke(220, 90, 20);
    ellipse(mouseX, mouseY, 50, 50);
}
// 左半分かつ下半分
if (mouseX <= width/2 && mouseY > height/2) {
    stroke(50, 110, 150);
    line(mouseX-25, mouseY-25, mouseX+25, mouseY+25);
    line(mouseX+25, mouseY-25, mouseX-25, mouseY+25);
}
// 右半分かつ上半分
if (mouseX > width/2 && mouseY <= height/2) {
    stroke(230, 175, 150);
    rect(mouseX, mouseY, 50, 50);
}
// 右半分かつ下半分
if (mouseX > width/2 && mouseY > height/2) {
    stroke(65, 180, 110);
    triangle(mouseX-25, mouseY+25, mouseX, mouseY-25, mouseX+25, mouseY+25);
}
```

## switch文

if文ともうひとつ、switch文でも条件分岐を行えます。switch文は次のように使います。

`
switch (条件式) {
  case 数値:
    実行分;
    break;
  case 数値:
    実行分;
    break;
    .
    .
}
`

switch文は条件式に指定された値と同じ数値を持つcaseへジャンプします。そして、そのcase内の実行分を実行し、break文を見つけるとswitch文のブロックを抜けます。次のプログラムでは変数rによって描く図形を分岐させています。

<iframe src="/samples/tutorial/Chapter6/sketch09.html" class="sample-sketch"></iframe>

[Chapter6/sketch09.pde](github:Chapter6/sketch09/sketch09.pde)

```processing
size(750, 350);
background(255);
noStroke();
fill(30);

int r = (int)random(3);

// rの値で分岐する
switch(r) {
  // 0の場合
  case 0:
    ellipse(width/2, height/2, 150, 150);
    break; // switchのブロックを抜ける
  // 1の場合
  case 1:
    rect(width/2-75, height/2-75, 150, 150);
    break; // switchのブロックを抜ける
  // 2の場合
  case 2:
    background(random(255), random(255), random(255));
    break; // switchのブロックを抜ける
}
```

caseの最後にbreakを書くのを忘れないようにしてください。breakが無いとswitchのブロックを抜けずに次のcaseの実行文に移ってしまいます。

switch文の条件式に使うことができるのは整数値のみです。if文のように値を比較したりすることができません。なので、条件分岐の能力はif文に比べると劣るのですが、整数値による分岐をしたい場合はif文で書くよりもコンパクトに書くことができます。今はあまり使い時がわからないかもしれませんが、頭の片隅に置いておいてください。

switch文ではdefaultを使うとどの値にも当てはまらなかった場合の分岐ができます。if文でいうとelseに当たります。

`
switch (値) {
  case 値:
    実行分;
    break;
  case 値:
    実行分;
    break;
  default:
    実行分;
    break;
}
`

<iframe src="/samples/tutorial/Chapter6/sketch10.html" class="sample-sketch"></iframe>

[Chapter6/sketch10.pde](github:Chapter6/sketch10/sketch10.pde)

```processing
size(750, 350);
background(255);
noStroke();
fill(30);

int r = (int)random(5);

// rの値で分岐する
switch(r) {
  // 0の場合
  case 0:
    ellipse(width/2, height/2, 150, 150);
    break;
  // 1の場合
  case 1:
    rect(width/2-75, height/2-75, 150, 150);
    break;
  // それ以外の場合
  default:
    background(random(255), random(255), random(255));
    break;
}
```

お疲れさまでした。Chapter6はこれで終了です。
