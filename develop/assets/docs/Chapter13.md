# クラス基礎 Part1

クラスはプログラムを作りやすくする便利な機能なのですが、このChapterではクラスというものを作る理由を説明します。今はピンとこないかもしれませんが、そういうものなのかなーくらいに思っていてください。

## クラスを作る理由
プログラムを作っていると、あるものについての情報をまとめて扱いたいといった状況に頻繁に出くわします。例えばブロック崩しゲームの場合、ゲーム内には最低でもブロック、ボール、ラケット(ボールを跳ね返す板)があります。それぞれが持つであろう情報は例えば以下のようなものです。<br>
ブロック<br>
・位置、大きさ、色、ボールによって潰されたかどうか<br>
ボール<br>
・位置、速度、大きさ、色<br>
ラケット<br>
・位置、速度、大きさ、色<br>
ここで前回のChapterで作った画面内をボールが飛び回るプログラムを思い出してみると、ボールが持つ情報を表すだけでも６つの変数(x, y, vx, vy, radius, c)が必要だったことがわかります。

[Chapter12/sketch07.pde](github:Chapter12/sketch07/sketch07.pde)

```processing
int numBalls = 100; // ボールの数
float[] x = new float[numBalls];  // x座標の配列
float[] y = new float[numBalls];  // y座標の配列
float[] vx = new float[numBalls]; // x軸方向の速度の配列
float[] vy = new float[numBalls]; // y軸方向の速度の配列
int[] radius = new int[numBalls]; // 半径の配列
color[] c = new color[numBalls];  // 色の配列

void setup() {
  size(960, 540);
  // 初期値を設定
  for (int i = 0; i < numBalls; i++) {
    radius[i] = (int)random(10, 20);
    x[i] = random(radius[i], width-radius[i]);
    y[i] = random(radius[i], height-radius[i]);
    vx[i] = random(-5, 5);
    vy[i] = random(-5, 5);
    c[i] = color(random(255), random(255), random(255));
  }
}

void draw() {
  background(255);

  for (int i = 0; i < numBalls; i++) {
    // ボールの位置を更新
    x[i] += vx[i];
    y[i] += vy[i];
    // 左右の壁との当たり判定
    if (x[i]-radius[i] <= 0 || x[i]+radius[i] >= width) {
      vx[i] *= -1;
    }
    // 上下の壁との当たり判定
    if (y[i]-radius[i] <= 0 || y[i]+radius[i] >= height) {
      vy[i] *= -1;
    }
    // ボールを描画
    noStroke();
    fill(c[i]);
    ellipse(x[i], y[i], 2*radius[i], 2*radius[i]);
  }
}
```

このプログラムにラケットを加えてみました。ラケットを描画するための変数を用意しているだけなので、ラケットに当たってもボールは跳ね返りません。

![](/images/Chapter13/sketch01.jpg)

[Chapter13/sketch01.pde](github:Chapter13/sketch01/sketch01.pde)

```processing
int numBalls = 5; // ボールの数
float[] x = new float[numBalls];  // x座標の配列
float[] y = new float[numBalls];  // y座標の配列
float[] vx = new float[numBalls]; // x軸方向の速度の配列
float[] vy = new float[numBalls]; // y軸方向の速度の配列
int[] radius = new int[numBalls]; // 半径の配列
color[] c = new color[numBalls];  // 色の配列

// ラケットの情報
int racketX, racketY; // 位置
int racketVx;         // 速度
int racketW, racketH; // 横幅と高さ
color racketC;        // 色

void setup() {
  size(960, 540);
  // ボール初期値を設定
  for (int i = 0; i < numBalls; i++) {
    radius[i] = (int)random(10, 20);
    x[i] = random(radius[i], width-radius[i]);
    y[i] = random(radius[i], height-radius[i]);
    vx[i] = random(-5, 5);
    vy[i] = random(-5, 5);
    c[i] = color(random(255), random(255), random(255));
  }
  // ラケットの初期値を設定
  racketX = width/2;
  racketY = height-50;
  racketVx = 5;
  racketW = 120;
  racketH = 25;
  racketC = color(0);
}

void draw() {
  background(255);

  for (int i = 0; i < numBalls; i++) {
    // ボールの位置を更新
    x[i] += vx[i];
    y[i] += vy[i];
    // 左右の壁との当たり判定
    if (x[i]-radius[i] <= 0 || x[i]+radius[i] >= width) {
      vx[i] *= -1;
    }
    // 上下の壁との当たり判定
    if (y[i]-radius[i] <= 0 || y[i]+radius[i] >= height) {
      vy[i] *= -1;
    }
    // ボールを描画
    noStroke();
    fill(c[i]);
    ellipse(x[i], y[i], 2*radius[i], 2*radius[i]);
  }

  // ラケットを描画
  fill(racketC);
  rectMode(CENTER);
  rect(racketX, racketY, racketW, racketH);
}
```

ここからさらにブロックを足そうとすると、ブロックは複数あるものなので変数を配列で管理しなければいけません。プログラム中に配列が大量に記述されることになり非常にプログラムが見づらくなり、書くのも面倒になります。クラスには情報をまとめておく機能があるので、変数ごとに配列を作成する必要がなくなりプログラムの見通しがよくなります。クラスの機能やクラスを使う利点は他にも色々あります。では次のChapterでクラスの作り方を解説していきます。
