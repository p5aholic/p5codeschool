# クラス基礎 Part1

クラスはプログラムを作りやすくする便利な機能なのですが、このChapterではクラスというものを作る理由を説明します。

## クラスを作る理由
クラスを作る理由を説明しておきたいと思います。今はピンとこないかもしれませんが、そういうものなのかなーくらいに思っていてください。

プログラムを作っていると、あるものについての情報をまとめて扱いたいといった状況に頻繁に出くわします。例えばブロック崩しゲームの場合、ゲーム内には最低でもブロック、ボール、ラケット(ボールを跳ね返す板)があります。それぞれが持つであろう情報を思いつく限り書いてみると、以下のようになります。<br>
ブロック<br>
・位置、大きさ、色、ボールによって潰されたかどうか<br>
ボール<br>
・位置、速度、大きさ、色<br>
ラケット<br>
・位置、速度、大きさ、色<br>
ここで前回のChapterで作った画面内をボールが飛び回るプログラムを思い出してみると、ボールが持つ情報を表すだけでも６つの変数(x, y, vx, vy, radius, c)が必要だったことがわかります。

```processing
int numBalls = 100; // ボールの数
float[] x = new float[numBalls];  // x座標の配列
float[] y = new float[numBalls];  // y座標の配列
float[] vx = new float[numBalls]; // x軸方向の速度の配列
float[] vy = new float[numBalls]; // y軸方向の速度の配列
int[] radius = new int[numBalls]; // 半径の配列
color[] c = new color[numBalls];  // 色の配列

void setup() {
  size(750, 350);
  // 初期値を設定
  for (int i = 0; i < numBalls; i++) {
    radius[i] = (int)random(10, 20);
    x[i] = random(radius[i], width-radius[i]);
    y[i] = random(radius[i], height-radius[i]);
    vx[i] = random(-5, 5);
    vy[i] = random(-5, 5);
    c[i] = color(random(255), random(255), random(255), random(255));
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
  size(750, 350);
  // ボール初期値を設定
  for (int i = 0; i < numBalls; i++) {
    radius[i] = (int)random(10, 20);
    x[i] = random(radius[i], width-radius[i]);
    y[i] = random(radius[i], height-radius[i]);
    vx[i] = random(-5, 5);
    vy[i] = random(-5, 5);
    c[i] = color(random(255), random(255), random(255), random(255));
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

このプログラムにブロックを追加して、ボールとラケットの当たり判定、ボールとブロックの当たり判定を加えればブロック崩しができそうですが、面倒臭いのでやりません。面倒臭い理由は以下の３つです。<br>
１：変数名が長い<br>
２：変数ごとに配列を作らなければいけない<br>
３：プログラムが見にくい<br>
ボールを表す変数にx, y, vxなど短い名前の変数を使ってしまっているのでラケットとブロックの変数名にはracketXやblockXなどを使わなければならず、面倒臭いです。またブロックは大量にあるものなので、ボールのように変数ごとに配列で管理しなければいけません。ただでさえボールに配列をたくさん使っているのに、また配列を使うとなるととても面倒です。また、理由１、２の結果として、プログラムが非常に見にくくなります。見にくいプログラムはエラーとバグを生み出しやすく、見つけずらいので面倒臭いです。

上に挙げた３つの問題は、クラスを使うときれいさっぱり解決できます。クラスには情報をまとめる機能があるからです(他にも色々な機能があります)。では、次回のChapter15_2からクラスの作り方を解説していきます。
