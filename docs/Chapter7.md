# 繰り返し

## whileループ

とりあえず次のプログラムを実行してみてください。

<iframe src="/samples/tutorial/Chapter7/sketch01.html" class="sample-sketch"></iframe>

[Chapter7/sketch01.pde](github:Chapter7/sketch01/sketch01.pde)

```processing
void setup() {
  size(750, 350);
  stroke(255);
}

void draw() {
  background(128);

  int i = 0;
  while (i <= 50) {
    line(i * (width/50), height/2, mouseX, mouseY);
    i++;
  }
}
```

全部で51本の線が描画されていますが、プログラム内にline()関数は１つしか書いていません。繰り返し文を使うとこのように何度も繰り返したい文を簡単に書くことができます。

繰り返し文にはwhileループとforループがあります。while文による繰り返しは次のようにして書くことができます。

`
while (条件式) {
  // 繰り返したい処理
}
`

if文とかなり似ていますが、while文は条件式が真の間ブロック{}で囲んだ中の処理が繰り返し実行されます。条件式が偽になるとループを抜けます。 whileループによるプログラムの実行過程を図示すると次のようになります。

![](/images/Chapter7/WhileLoop.jpg)

上のプログラムでは、まずループ回数のカウント用変数iを宣言しています。 while文の条件式にi <= 50、while文のブロック内でi++としているので、一回のループごとにiが1ずつ足されていき、iが51になるまでブロック内の処理が繰り返されます。i = 0からi = 50までのループなので、総ループ数は51回になります。iはline()の１つ目のパラメータにも使います。i * 14(700 ÷ 50 = 14)とすることで14px間隔で線を描画できます。

## forループ

for文による繰り返し文の書き方を解説していきます。for文は以下のように書きます。

`
for (初期化; 条件式; 更新) {
  // 繰り返したい処理
}
`

for文の()内に書く初期化は、for文の実行時に１度だけ実行されます。ループの度に実行されるわけではありません。次の条件式はwhile文と同じで、この条件式が真の間ループが続きます。最後の更新は１ループが終わるごとに実行されます。forループによるプログラムの実行過程を図示すると次のようになります。

![image](/images/Chapter7/ForLoop.jpg)

上のプログラムをwhile文の代わりにfor文で書き換えたのが次のプログラムです。動作は全く同じです。上のプログラムでのwhile文による繰り返し文と、次のプログラムでのfor文による繰り返し文が対応していることを確認してください。

<iframe src="/samples/tutorial/Chapter7/sketch02.html" class="sample-sketch"></iframe>

[Chapter7/sketch02.pde](github:Chapter7/sketch02/sketch02.pde)

```processing
void setup() {
  size(750, 350);
  stroke(255);
}

void draw() {
  background(128);

  for (int i = 0; i <= 50; i++) {
    line(i * (width/50), height/2, mouseX, mouseY);
  }
}
```

for文で用いるカウンタ変数は、for文内で宣言する場合は同じ変数名をもう一度使うことができます。

[Chapter7/sketch03.pde](github:Chapter7/sketch03/sketch03.pde)

```processing
void setup() {
  for (int i = 0; i < 5; i++) {
    println(i);
  }
  // もう一度変数名にiを使う
  for (int i = 10; i < 15; i++) {
    println(i);
  }
}
```

変数の寿命のことを思い出してみましょう。変数は、その変数が宣言された行以降の同じブロック内が有効範囲です。ブロックを抜けるとその変数の有効範囲が終わります。for文の中で宣言されたiなどのカウンタ変数の有効範囲はfor文のブロック内になります。変数iの有効範囲内で同名の変数は使えませんが、１つ目のfor文がループを抜けた時点で変数iの有効範囲を抜けているので、２つ目のfor文でもう一度変数名にiを使うことができるわけです。

## ２重for文

for文の中にfor文を作って2重for文を作ることもできます。

<iframe src="/samples/tutorial/Chapter7/sketch04.html" class="sample-sketch"></iframe>

[Chapter7/sketch04.pde](github:Chapter7/sketch04/sketch04.pde)

```processing
void setup() {
  size(750, 350);
  stroke(255);
}

void draw() {
  background(128);

  for (int x = 0; x <= width; x += 150) {
    for (int y = 0; y <= height; y += 50) {
      line(x, y, mouseX, mouseY);
    }
  }
}
```

この２重for文の実行過程をfor文を使わずに全て書き出すと次のようになります。

[Chapter7/sketch05.pde](github:Chapter7/sketch05/sketch05.pde)

```processing
void setup() {
  size(750, 350);
  stroke(255);
}

void draw() {
  background(128);

  // x = 0のとき
  line(0, 0, mouseX, mouseY);
  line(0, 50, mouseX, mouseY);
  line(0, 150, mouseX, mouseY);
  line(0, 200, mouseX, mouseY);
  line(0, 250, mouseX, mouseY);
  line(0, 300, mouseX, mouseY);
  line(0, 350, mouseX, mouseY);
  // x = 150のとき
  line(150, 0, mouseX, mouseY);
  line(150, 50, mouseX, mouseY);
  line(150, 150, mouseX, mouseY);
  line(150, 200, mouseX, mouseY);
  line(150, 250, mouseX, mouseY);
  line(150, 300, mouseX, mouseY);
  line(150, 350, mouseX, mouseY);
  // x = 300のとき
  line(300, 0, mouseX, mouseY);
  line(300, 50, mouseX, mouseY);
  line(300, 150, mouseX, mouseY);
  line(300, 200, mouseX, mouseY);
  line(300, 250, mouseX, mouseY);
  line(300, 300, mouseX, mouseY);
  line(300, 350, mouseX, mouseY);
  // x = 450のとき
  line(450, 0, mouseX, mouseY);
  line(450, 50, mouseX, mouseY);
  line(450, 150, mouseX, mouseY);
  line(450, 200, mouseX, mouseY);
  line(450, 250, mouseX, mouseY);
  line(450, 300, mouseX, mouseY);
  line(450, 350, mouseX, mouseY);
  // x = 600のとき
  line(600, 0, mouseX, mouseY);
  line(600, 50, mouseX, mouseY);
  line(600, 150, mouseX, mouseY);
  line(600, 200, mouseX, mouseY);
  line(600, 250, mouseX, mouseY);
  line(600, 300, mouseX, mouseY);
  line(600, 350, mouseX, mouseY);
  // x = 750のとき
  line(750, 0, mouseX, mouseY);
  line(750, 50, mouseX, mouseY);
  line(750, 150, mouseX, mouseY);
  line(750, 200, mouseX, mouseY);
  line(750, 250, mouseX, mouseY);
  line(750, 300, mouseX, mouseY);
  line(750, 350, mouseX, mouseY);
}
```

外側のfor文でx座標、内側のfor文でy座標を表す場合と、その逆の場合では次のような違いがあります。


<iframe src="/samples/tutorial/Chapter7/sketch06.html" class="sample-sketch"></iframe>

[Chapter7/sketch06.pde](github:Chapter7/sketch06/sketch06.pde)

```processing
size(750, 350);
background(255);
colorMode(HSB, 360, 100, 100);

int boxW = width/10;  // 長方形の幅
int boxH = height/10; // 長方形の高さ
int brightness = 0;   // 明度

noStroke();
for (int x = 0; x < 10; x++) {
  for (int y = 0; y < 10; y++) {
    fill(210, 80, brightness);
    rect(x*boxW, y*boxH, boxW, boxH);
    // 徐々に明るくしていく
    brightness++;
  }
}
```

<iframe src="/samples/tutorial/Chapter7/sketch07.html" class="sample-sketch"></iframe>

[Chapter7/sketch07.pde](github:Chapter7/sketch07/sketch07.pde)

```processing
size(750, 350);
background(255);
colorMode(HSB, 360, 100, 100);

int boxW = width/10;
int boxH = height/10;
int brightness = 0;

noStroke();
for (int y = 0; y < 10; y++) {
  for (int x = 0; x < 10; x++) {
    fill(210, 80, brightness);
    rect(x*boxW, y*boxH, boxW, boxH);
    brightness++;
  }
}
```

２重for文による図形の描画順を番号で示すと次のようになります。

外側のfor文でx座標、内側のfor文でy座標を表す場合

![image](/images/Chapter7/NestedFor1.jpg)

外側のfor文でy座標、内側のfor文でx座標を表す場合

![image](/images/Chapter7/NestedFor2.jpg)

for文の中で条件分岐を使い、描画する図形を切り替えることもできます。

<iframe src="/samples/tutorial/Chapter7/sketch08.html" class="sample-sketch"></iframe>

[Chapter7/sketch08.pde](github:Chapter7/sketch08/sketch08.pde)

```processing
size(750, 350);
background(255);

int boxW = width/10;
int boxH = height/10;
int brightness = 0;

for (int x = 0; x < 10; x++) {
  for (int y = 0; y < 10; y++) {
    // xが偶数のとき
    if (x % 2 == 0) {
      noStroke();
      fill(30);
    }
    // xが奇数のとき
    else {
      stroke(30);
      strokeWeight(2);
      noFill();
    }
    rect(x*boxW, y*boxH, boxW, boxH);
  }
}
```

次のプログラムでは、マウスと重なっている長方形にだけｘを描画しています。

<iframe src="/samples/tutorial/Chapter7/sketch09.html" class="sample-sketch"></iframe>

[Chapter7/sketch09.pde](github:Chapter7/sketch09/sketch09.pde)

```processing
int boxW, boxH;

void setup() {
  size(750, 350);
  noFill();
  stroke(30);
  strokeWeight(3);
  boxW = width/10;
  boxH = height/10;
}

void draw() {
  background(255);

  for (int x = 0; x < 10; x++) {
    for (int y = 0; y < 10; y++) {
      // マウスと重なっている長方形に×を描画
      if (mouseX >= x*boxW && mouseX <= x*boxW+boxW && mouseY >= y*boxH && mouseY <= y*boxH+boxH) {
        line(x*boxW, y*boxH, x*boxW+boxW, y*boxH+boxH);
        line(x*boxW, y*boxH+boxH, x*boxW+boxW, y*boxH);
      }
      rect(x*boxW, y*boxH, boxW, boxH);
    }
  }
}
```

長方形の角の座標は、左上の角(x*boxW, y*boxH)、右下の角(x*boxW+boxW, y*boxH+boxH) のように表せるので、この範囲にマウスがあるかどうかをif文で判定しています。

お疲れさまでした。Chapter7はこれで終了です。
