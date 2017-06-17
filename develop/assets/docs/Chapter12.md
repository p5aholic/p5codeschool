# 配列

配列を使うと同じデータ型の値を大量に扱うことができます。配列の直観的なイメージは番号順に一列に並んだ箱です。箱の一つ一つが変数で、値を入れておくことができます。全ての箱(変数)は同じデータ型になります。箱の集合(配列)の名前がAだとすると、先頭の箱(先頭の変数)はA[0]、２番目の箱(２番目の変数)はA[1]になります。

## 配列の作り方

配列を作るにはまず次のようにします。

`
データ型[] 配列変数名;
(例) int[] data;
`

これは配列変数の宣言に当たる部分です。このように書くと箱の集合(配列)の名前がdataになり、箱の一つ一つがint型変数になります。通常の変数の宣言と代入を思い出してみましょう。例えばint型の変数aを宣言して5を代入する場合は次のようにしました。

`int a;`

こう書くことで変数aがint型の値を扱うことになり、

`a = 5;`

これで変数aに具体的なint型の値5が代入されました。配列も同じで、宣言のあとは代入を行う必要があります。代入は次のように行います。

`
配列変数名 = new データ型[要素数];
(例) data = new int[5];
`

こう書くことで配列変数dataにint型を扱う要素数5の配列の実態が代入されます。要素数は配列が扱う箱(変数)の数のことです。「配列の実態ってなんぞや？」とか「newってなんぞや？」っていう疑問には次のChapterで詳しく解説するので今はあまり気にしないでください。残る作業は配列の変数の一つ一つに値を代入することです。配列変数dataの要素である変数一つ一つに値を代入するには次のようにします。

`
(例)
data[0] = 53;
data[1] = 22;
data[2] = 84;
data[3] = 17;
data[4] = 49;
`

配列では先頭の要素を0番目とします。配列変数のi番目の要素は配列変数名[i]と書くことで表します。今までの説明をまとめたものが次のプログラムです。println関数に配列変数を渡すと配列の中身が出力されます。

[Chapter12/sketch01.pde](github:Chapter12/sketch01/sketch01.pde)

```processing
int[] data;        // int型配列のdataを宣言
data = new int[5]; // 要素数5のint型配列の実態をdataに代入
// dataのそれぞれの要素に数値を代入
data[0] = 53;
data[1] = 22;
data[2] = 84;
data[3] = 17;
data[4] = 49;
// dataの中身を出力
println(data);
```

普通の変数と同じように、宣言と代入を１行で書くことも可能です。

[Chapter12/sketch02.pde](github:Chapter12/sketch02/sketch02.pde)

```processing
int[] data = new int[5]; // 宣言と代入
// dataのそれぞれの要素に数値を代入
data[0] = (int)random(100);
data[1] = (int)random(100);
data[2] = (int)random(100);
data[3] = (int)random(100);
data[4] = (int)random(100);
println(data);
```

また次のようにして、配列の宣言、代入、要素の一つ一つの値の代入を一気に書くこともできます。

[Chapter12/sketch03.pde](github:Chapter12/sketch03/sketch03.pde)

```processing
int[] data = {20, 12, 45, 65, 78, 32};
println(data);
```

この場合の配列の要素数は値を書いた分だけ自動的に割り当てられます。

for文を使うと配列の要素に値を代入するのがとても楽になります。次のプログラムでは要素数50のint型配列の要素にfor文を使ってランダムな値を代入しています。for文を使わなかったら50行も代入文を書かなくてはいけないので、配列とfor文の相性がとても良いことがわかると思います。

[Chapter12/sketch04.pde](github:Chapter12/sketch04/sketch04.pde)

```processing
int numData = 50; // 配列の要素数
int[] data = new int[numData]; // 配列の宣言と代入
// dataの要素に値を入れる
for (int i = 0; i < numData; i++) {
  data[i] = (int)random(100);
}
println(data);
```

for文の初期化式、条件式には注意が必要です。

`
for (int i = 0; i < numData; i++) {
}
`

と書いた時のfor文の実行過程は次のようになります。<br>
１回目：i = 0<br>
２回目：i = 1<br>
３回目：i = 2<br>
４回目：i = 3<br>
・<br>
・<br>
・<br>
４８回目：i = 47<br>
４９回目：i = 48<br>
５０回目：i = 49<br>
要素数50の配列の先頭の番号は0、最後の番号は49なので、それに対応するようにfor文を作らなければいけません。配列を使っているときによく起こるエラーを紹介します。for文の条件式を次のように変えて実行してみてくさい。

`
for (int i = 0; i <= numData; i++) {
}
`

"ArrayIndexOutOfBoundsException:50"というエラーがでます。これは配列の範囲外の要素にアクセスしたときに起こるエラーです。配列dataは要素数50の配列なので、配列の最後の要素はdata[49]です。条件式をi <= numDataにした場合の実行過程は<br>
１回目：i = 0<br>
２回目：i = 1<br>
３回目：i = 2<br>
４回目：i = 3<br>
・<br>
・<br>
・<br>
４８回目：i = 47<br>
４９回目：i = 48<br>
５０回目：i = 49<br>
５１回目：i = 50<br>
になります。すると５１回目のfor文ではdata[50]にアクセスすることになり、data[50]は存在しないのでエラーが出るというわけです。ちなみに、data[-1]などにアクセスした場合は"ArrayIndexOutOfBoundsException:-1"というエラーが出ます。エラー文の最後の数字がエラーを起こす原因になった配列の番号というわけです。

次のプログラムでは配列dataの中身を棒グラフにして視覚化しています。マウスクリックでdataの中身にランダムな値を入れなおすことができます。

![](/images/Chapter12/sketch05.jpg)

[Chapter12/sketch05.pde](github:Chapter12/sketch05/sketch05.pde)

```processing
int numData = 50; // 配列の要素数
int[] data = new int[numData]; // 配列の宣言と代入
int rectWidth;    // 棒の横幅

void setup() {
  size(960, 540);
  noLoop();
  // dataの要素に値を入れる
  setData();
  rectWidth = width/numData;
}

// dataの要素に値を入れる関数
void setData() {
  for (int i = 0; i < numData; i++) {
    data[i] = (int)random(height);
  }
}

void draw() {
  background(128);
  // 配列dataの中身を棒グラフで可視化
  for (int i = 0; i < numData; i++) {
    fill(255);
    rect(i*rectWidth, height-data[i], rectWidth, data[i]);
  }
}

// マウスクリックで配列の中身を入れ替える
void mousePressed() {
  setData();
  redraw();
}
```

配列dataの要素にランダムな値を入れる処理は自作関数のsetData()にまとめています。setup関数でもmousePressed関数でも同じ処理をする場合は、その処理を関数にしてまとめておくことでプログラムがコンパクトになります。全く同じ処理が２回以上出てきたら関数にまとめてみるということを意識しておくといいでしょう。

最後に配列を使って、大きさ、座標、速度、色が異なる１００個のボールが画面内を飛び回るプログラムを作ってみます。念のため、配列を使わないで１個のボールが画面内を飛び回るプログラムを見てみます。

![](/images/Chapter12/sketch06.jpg)

[Chapter12/sketch06.pde](github:Chapter12/sketch06/sketch06.pde)

```processing
float x, y;   // ボールの中心座標
float vx, vy; // ボールの速度
int radius;   // ボールの半径
color c;      // ボールの色

void setup() {
  size(960, 540);
  // 初期値を設定
  radius = (int)random(30, 60);
  x = random(radius, width-radius);
  y = random(radius, height-radius);
  vx = random(-5, 5);
  vy = random(-5, 5);
  c = color(random(255), random(255), random(255));
}

void draw() {
  background(255);

  // ボールの位置を更新
  x += vx;
  y += vy;
  // 左右の壁との当たり判定
  if (x-radius <= 0 || x+radius >= width) {
    vx *= -1;
  }
  // 上下の壁との当たり判定
  if (y-radius <= 0 || y+radius >= height) {
    vy *= -1;
  }
  // ボールを描画
  noStroke();
  fill(c);
  ellipse(x, y, 2*radius, 2*radius);
}
```

ボールの座標の初期値に注意が必要です。もしボールの座標の初期値を次のように設定したとします。
x = random(width);
y = random(radius);
xとyはボールの中心座標なので、例えばもしxの初期値が2などになったら、ボールの左側がウィンドウの左端に埋まった状態でスタートしてしまいます。するとdraw関数内の壁とのあたり判定でボールの動きがおかしくなってしまいます。試しにx = 0として試してみるとわかると思います。これを防ぐために、ボールの中心座標の初期値は以下のように設定して、ボールが壁に埋まった状態でスタートしないようにしています。

`
x = random(radius, width-radius);
y = random(radius, height-radius);
`

上のプログラムをもとに、配列を使ってボールが１００個飛び回るようにしたプログラムが次のプログラムです。

![](/images/Chapter12/sketch07.jpg)

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

座標、速度、大きさ、色を全て配列にして、初期値の設定、ボールの座標の更新、当たり判定、描画をfor文で行っています。

お疲れさまでした。Chapter12はこれで終了です。
