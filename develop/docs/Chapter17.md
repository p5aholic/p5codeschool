# クラス基礎 Part3

## クラス型配列

配列のことを思い出してみます。要素数100個のint型配列dataを作るには次のようにしていました。

`int[] data = new int[100];`

実はdataのような配列変数も参照型変数なんです。言語仕様として配列を表す仮想的なクラスがあり、new データ型[要素数]と書くことでその仮想的な配列クラスのインスタンスが生成され、dataのような変数にはそのインスタンスへの参照が代入されます。配列を表す仮想的なクラスがあることと、dataが参照型変数であることの証明として、配列の要素数を表すフィールド、lengthがあります。lengthは配列の仮想クラスに定義されているフィールドです。

[Chapter15_3/sketch01.pde](github:Chapter15_3/sketch01/sketch01.pde)

```processing
int[] data = new int[50];  // 配列の宣言と代入
println(data.length);      // dataの要素数を出力
// dataの要素に値を入れる
for (int i = 0; i < data.length; i++) {
  data[i] = (int)random(height);
}
println(data);
```

dataはint型の要素を持つint型配列ですが、クラスのインスタンスを持つクラス型配列というものを作ることができます。次のようにしてクラス型配列を作ることができます。

`クラス名[] 配列変数名 = new クラス名[要素数];`

次のプログラムでは、100個のBallクラスのインスタンスを持つ配列を作って画面内に100個のボールを描画しています。

[Chapter15_3/sketch02.pde](github:Chapter15_3/sketch02/sketch02.pde)

```processing
// 要素数100個のBallクラス型配列ballsを生成
Ball[] balls = new Ball[100];

void setup() {
  size(960, 540);

  // ballsの要素のBallクラス型オブジェクトを生成
  for (int i = 0; i < balls.length; i++) {
    balls[i] = new Ball();
  }
}

void draw() {
  background(255);

  // ballsの要素全てに対してupdateメソッドとdisplayメソッドを実行
  for (int i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].display();
  }
}

class Ball {
  // フィールド
  float x, y;
  float vx, vy;
  int radius;
  color c;

  // コンストラクタ
  Ball() {
    radius = (int)random(10, 20);
    x = random(radius, width-radius);
    y = random(radius, height-radius);
    vx = random(-5, 5);
    vy = random(-5, 5);
    c = color(random(255), random(255), random(255), random(255));
  }

  // メソッド
  void update() {
    x += vx;
    y += vy;
    if (x-radius <= 0 || x+radius >= width) {
      vx *= -1;
    }
    if (y-radius <= 0 || y+radius >= height) {
      vy *= -1;
    }
  }

  void display() {
    noStroke();
    fill(c);
    ellipse(x, y, 2*radius, 2*radius);
  }
}
```

次のように書いてBallクラスのインスタンスを要素とするBallクラス型配列を要素数100個で生成しています。

`Ball[] balls = new Ball[100];`

注意が必要なのは、この時点ではBallクラス型配列を生成しただけで、個々の要素となるBallクラスのインスタンスは生成していないということです。配列ballsの個々の要素となるインスタンスは次のようにして生成します。

`
for (int i = 0; i < balls.length; i++) {
  balls[i] = new Ball();
}
`

クラスを使わない場合のプログラムと比較してみると、setup関数とdraw関数の中がスッキリして非常に見やすいプログラムになっていることがわかると思います。

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

## this参照

仮引数を持つコンストラクタによるフィールドの代入処理を思い出してください。

[Chapter15_3/sketch03.pde](github:Chapter15_3/sketch03/sketch03.pde)

```processing
Ball b1, b2, b3;

void setup() {
  size(960, 540);
  // 青
  b1 = new Ball(200, height/2, 60, color(0, 0, 180));
  // 黄
  b2 = new Ball(540, height/2, 60, color(180, 180, 0));
  // 赤
  b3 = new Ball(500, height/2, 60, color(180, 0, 0));
}

void draw() {
  background(255);

  noStroke();
  // b1を描画
  fill(b1.c);
  ellipse(b1.x, b1.y, b1.radius*2, b1.radius*2);
  // b2を描画
  fill(b2.c);
  ellipse(b2.x, b2.y, b2.radius*2, b2.radius*2);
  // b3を描画
  fill(b3.c);
  ellipse(b3.x, b3.y, b3.radius*2, b3.radius*2);
}

class Ball {
  // フィールド
  float x, y;
  int radius;
  color c;

  // 仮引数を持つコンストラクタ
  Ball(float bx, float by, int rad, color bc) {
    // 仮引数に対応するフィールドに代入を行う
    x = bx;
    y = by;
    radius = rad;
    c = bc;
  }
}
```

フィールドxには仮引数bx、フィールドcには仮引数bcのように対応付けて代入をしていました。bxやbcのbはballのbのつもりです。実は、仮引数の変数名をフィールドと同じ変数名にする方法があります。ここで一つルールを紹介します。次のプログラムを実行してみてください。

[Chapter15_3/sketch04.pde](github:Chapter15_3/sketch04/sketch04.pde)

```processing
Ball b1;

void setup() {
  size(960, 540);
  b1 = new Ball(40, 50);
}

class Ball {
  float x = 10, y = 20;

  Ball(float x, float y) {
    // xを出力
    println(x);
    // yを出力
    println(y);
  }
}
```

コンストラクタ内でxとyの値を出力していますが、このとき40と50が出力されます。つまり、クラス内に書かれたフィールドx、yよりも、コンストラクタの仮引数であるx、yが出力されていることになります。コンストラクタの仮引数がフィールドと同名の変数だった場合、フィールドよりもそれらが優先されるというルールがあるからです。このルールがわかったところで、次のプログラムを見てください。コンストラクタの仮引数にフィールドと同じ名前の変数名を使っていますが、this参照と呼ばれるものを使ってフィールドと仮引数の区別をしています。

[Chapter15_3/sketch05.pde](github:Chapter15_3/sketch05/sketch05.pde)

```processing
Ball b1, b2, b3;

void setup() {
  size(960, 540);
  // 青
  b1 = new Ball(200, height/2, 60, color(0, 0, 180));
  // 黄
  b2 = new Ball(540, height/2, 60, color(180, 180, 0));
  // 赤
  b3 = new Ball(500, height/2, 60, color(180, 0, 0));
}

void draw() {
  background(255);

  noStroke();
  // b1を描画
  fill(b1.c);
  ellipse(b1.x, b1.y, b1.radius*2, b1.radius*2);
  // b2を描画
  fill(b2.c);
  ellipse(b2.x, b2.y, b2.radius*2, b2.radius*2);
  // b3を描画
  fill(b3.c);
  ellipse(b3.x, b3.y, b3.radius*2, b3.radius*2);
}

class Ball {
  // フィールド
  float x, y;
  int radius;
  color c;

  // コンストラクタ
  Ball(float x, float y, int radius, color c) {
    // this参照を明示的に使う
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.c = c;
  }
}
```

this参照について詳しく解説します。上のプログラムで

`this.x`

という表現をしています。この表現は

`参照型変数.フィールド`

の形になっているので、thisは参照型変数であることがわかります。そして、コンストラクタ内でthisを使った場合、thisには生成中のインスタンスへの参照が代入されます。

`b1 = new Ball(200, height/2, 60, color(0, 0, 180));`

を実行すると、まず、new Ball()によってBallクラスのインスタンスが生成されます。次にBall()コンストラクタの実行に移るのですが、その際、thisにnew Ball()によって生成されたインスタンスへの参照が代入されます。すると、this.xは生成されたインスタンスが持つフィールドxを表し、ただのxは仮引数のxのことになります。こうすることで、コンストラクタの仮引数にフィールドと同じ変数名を使っても区別することができるのです。

このthis参照は、コンストラクタだけでなくメソッドでも有効です。次のプログラムでは、座標をセットするsetPositionメソッドの仮引数にフィールドと同じ名前の変数名を使いthis参照により、フィールドと仮引数の区別をしています。

[Chapter15_3/sketch06.pde](github:Chapter15_3/sketch06/sketch06.pde)

```processing
Ball b1 = new Ball();

void setup() {
  size(960, 540);
  // 座標をセット
  b1.setPosition(width/2, height/2);
}

class Ball {
  float x, y;
  int radius;
  color c;

  Ball() {
  }

  // 座標をセットするメソッド
  void setPosition(float x, float y) {
    this.x = x;
    this.y = y;
  }
}
```

コンストラクタ内でthis参照を使った場合は生成したインスタンスへの参照がthisに代入されていましたが、メソッド内でthis参照を使った場合は、呼び出した参照型変数に代入されている参照がthisに代入されて実行されます。例えばb1.setPosition()を実行するとsetPosition()内のthisにはb1の参照が代入されます。

実は、コンストラクタやメソッドの仮引数にフィールドと同じ変数名を使わなかった場合、コンストラクタ内やメソッド内で使われるフィールドの前には暗黙的にthis.が付けられていると解釈されて実行されます。そしてそのthisには、コンストラクタなら生成したインスタンスへの参照が、メソッドなら呼び出した参照型変数に代入されている参照が代入されて実行されていたわけです。コンストラクタやメソッドの仮引数にフィールドと同じ変数名を使わない場合はthis.は省略可能なので今まで書きませんでしたが、以下のように明示的に書くこともできます。

[Chapter15_3/sketch07.pde](github:Chapter15_3/sketch07/sketch07.pde)

```processing
// 要素数１００個のBallクラス型配列ballsを生成
Ball[] balls = new Ball[100];

void setup() {
  size(960, 540);

  // ballsの要素のBallクラス型オブジェクトを生成
  for (int i = 0; i < balls.length; i++) {
    balls[i] = new Ball();
  }
}

void draw() {
  background(255);

  // ballsの要素全てに対してupdateメソッドとdisplayメソッドを実行
  for (int i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].display();
  }
}

class Ball {
  // フィールド
  float x, y;
  float vx, vy;
  int radius;
  color c;

  // コンストラクタ
  Ball() {
    this.radius = (int)random(10, 20);
    this.x = random(this.radius, width-this.radius);
    this.y = random(this.radius, height-this.radius);
    this.vx = random(-5, 5);
    this.vy = random(-5, 5);
    this.c = color(random(255), random(255), random(255), random(255));
  }

  // メソッド
  void update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x-this.radius <= 0 || this.x+this.radius >= width) {
      this.vx *= -1;
    }
    if (this.y-radius <= 0 || this.y+this.radius >= height) {
      this.vy *= -1;
    }
  }

  void display() {
    noStroke();
    fill(c);
    ellipse(x, y, 2*radius, 2*radius);
  }
}
```

お疲れさまでした。これで今の段階で必要なクラスの知識は一通り解説しました。クラスにはまだまだ色んな機能があるのですが、それは追々解説します。
