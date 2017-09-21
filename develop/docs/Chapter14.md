# クラス基礎 Part2

## クラスの作り方

プログラムを作っていると、複数の情報(変数)をまとめて扱えると便利な状況が多々あります。例えばボールについての複数の情報だったり、ブロックについての複数の情報だったりです。クラスは複数の情報をまとめる機能を持ちます。今回はボールについての情報をまとめたクラスを作りながら解説していきます。

クラスは以下のようにして作ることができます。

`
class クラス名 {
}
`

波カッコの中に必要な変数を書き込みます。次のプログラムではボールについての情報をまとめたクラスを作っています。クラス名はそのクラスを端的に表す名前が良いのでBallとしています。クラス内にはボールの情報を表す位置、半径、色の変数を書き込んでいます。クラス内に書く変数のことをプログラミング用語でフィールドと呼ぶので覚えておいてください。

[Chapter14/sketch01.pde](github:Chapter14/sketch01/sketch01.pde)

```processing
void setup() {
  size(960, 540);
}

// ボールについての情報をまとめたBallクラス
class Ball {
  // フィールド
  float x, y; // 位置
  int radius; // 半径
  color c;    // 色
}
```

これからこのBallクラスをもっと便利になるように拡張していきますが、とりあえずこれで最低限の機能を持つクラスが出来ました。

## クラスの性質

ここで、このChapterで最も重要となるクラスというものの性質を述べておきます。<br>
<br>
性質１：クラスはあるモノについての複数の情報をまとめたもの<br>
性質２：クラスは存在の定義であり、具体的なあるモノではない<br>
性質３：クラスをもとに、具体的なあるモノを作ることができる<br>
<br>
性質１はこれまでに説明した通りです。性質２と３について解説していきます。今、プログラム内にBallクラスというものを作りました。このBallクラスはボールというものの存在の定義でしかなく、具体的なあるボール、例えば赤色で半径が24pxのボールではありません。Ballクラスを作ることで、このプログラム内にボールという存在は位置と半径と色の情報を持つものだということを定義したわけです。そしてこのBallクラスをもとに具体的なボールを作ることができます。Ballクラスをもとに具体的なボールを作るには次のようにします。

`(例) Ball b1 = new Ball();`

b1が変数名になります。配列のときにも出てきたnewという単語がありますが、まだこのnewの説明はできません。new Ball();と書くことで何が起こっているのか、b1に何を代入したのかはもう少し後で解説します。今はとにかくこう書くことでBallクラスから具体的なボールを作ることができるという理解に留めておいてください。さて、具体的なボールb1を作ることができましたので、b1に値を設定します。b1が持っているフィールドには

`
b1.radius
b1.x
b1.c
`

のようにb1のあとにドットを繋げてさらに変数名を書くことでアクセスできます。次のプログラムではb1のフィールドに値を設定して描画しています。

[Chapter14/sketch02.pde](github:Chapter14/sketch02/sketch02.pde)

```processing
Ball b1 = new Ball();

void setup() {
  size(960, 540);

  // b1のフィールドに値を設定
  b1.radius = (int)random(25, 50);
  b1.x = random(b1.radius, width-b1.radius);
  b1.y = random(b1.radius, height-b1.radius);
  b1.c = color(random(255), random(255), random(255), random(128, 255));
}

void draw() {
  background(255);

  noStroke();
  // b1を描画
  fill(b1.c);
  ellipse(b1.x, b1.y, b1.radius*2, b1.radius*2);
}

// ボールについての情報をまとめたBallクラス
class Ball {
  // フィールド
  float x, y; // 位置
  int radius; // 半径
  color c;    // 色
}
```

具体的なボールはコンピュータのメモリが許す限りいくつでも作ることができます。次のプログラムではBallクラスからボールb1とb2を作って描画しています。 画面上に位置、半径、色の異なる２つのボールが描画されることを確認してください。

[Chapter14/sketch03.pde](github:Chapter14/sketch03/sketch03.pde)

```processing
Ball b1 = new Ball(); // Ball型のオブジェクトを生成
Ball b2 = new Ball(); // Ball型のオブジェクトを生成

void setup() {
  size(960, 540);

  // b1のフィールドに値を設定
  b1.radius = (int)random(25, 50);
  b1.x = random(b1.radius, width-b1.radius);
  b1.y = random(b1.radius, height-b1.radius);
  b1.c = color(random(255), random(255), random(255), random(128, 255));
  // b2のフィールドに値を設定
  b2.radius = (int)random(25, 50);
  b2.x = random(b2.radius, width-b2.radius);
  b2.y = random(b2.radius, height-b2.radius);
  b2.c = color(random(255), random(255), random(255), random(128, 255));
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
}

// ボールについての情報をまとめたBallクラス
class Ball {
  // フィールド
  float x, y;
  int radius;
  color c;
}
```

位置も大きさも色も異なる２つのボールが画面内にあることから、b1.でアクセスする変数とb2.でアクセスする変数は全く別の変数だということがわかると思います。

## クラスとインスタンス

これまでのことをもう一度１通り解説します。Ballクラスを定義することによって、プログラム内に位置、半径、色の情報を持つボールという存在を定義できました。Ballクラスはボールの存在の定義でしかなく、具体的なあるボールを表しているわけではありません。このBallクラスから具体的なボールをいくつでも作ることができます。Ballクラスから作ったb1とb2はそれぞれが自分だけの情報(x, y, radius, c)を持っているのでb1.でアクセスする変数とb2.でアクセスする変数は全く別の変数です。

Ballクラスから作った具体的なボールは、プログラミング用語ではインスタンスと呼ばれます。インスタンス(instance)は日本語で「実例」というような意味を持ちます。ボールという存在の定義であるBallクラスから実例としてのボールを作ったわけです。しつこいようですがもう一度クラスの性質２と３を説明すると、<br>
<br>
性質２：クラスは存在の定義であり、具体的なあるモノではない<br>
性質３：クラスをもとに、具体的なあるモノを作ることができる<br>
<br>
この具体的なあるモノというのがインスタンスのことです。そしてインスタンスは

`
クラス名 変数名 = new クラス名();
(例) Ball b1 = new Ball();
`

とすることで作ることができます。

インスタンスのことをオブジェクトと呼ぶ場合があります。上のプログラムでは

`Ball b1 = new Ball(); // Ball型のオブジェクトを生成`

という表現をしていますが、これは「Ball型のインスタンスを生成」と同じ意味です。私が使っていたプログラミングの入門書が、クラスからインスタンスを作ることを「オブジェクトを生成する」という表現を使っていたので、私もそれにならうことにします。

## new演算子

さて、配列の解説にも登場し説明を後回しにしてきたnewという単語は、演算子の一つでnew演算子と呼ばれるものです。このnew演算子はクラスからインスタンスを作るときに必要となる演算子です。配列は

`(例) int[] data = new int[5];`

のようにして作られていました。すると、「配列も何らかのクラスのインスタンスなのか」という疑問が浮かびます。答えはイエスですが、詳しくはもうちょっと後で解説します。

new演算子がクラスからインスタンスを作る時に必要な演算子だということは言いましたが、new Ball();で何が起こっているのか、b1 = new Ball();としたとき、b1に何が代入されているのかについてはまだなので、解説していきます。

## 参照

b1に何が代入されているかを解説します。結論から言うと、b1には参照と呼ばれるものが代入されています。参照はインスタンスが記憶されているコンピュータのメモリ上の場所を示しています。まとめると、

`Ball b1 = new Ball();`

と書くことで、new Ball();によってBallクラスのインスタンスが作られ、b1にはそのインスタンスの場所を示す参照が代入される、ということになります。さらに、

`Ball b2 = new Ball();`

と書くと、new Ball();によって新しいBallクラスのインスタンスが作られ、b2にそのインスタンスの場所を示す参照が代入されます。下の図のようなイメージで理解しておいてください。

<img src="/images/Chapter14/class_1.png" width="655" height="363">

「b1.radius」は「b1が参照するインスタンスがもつ変数radius」、「b2.radius」は「b2が参照するインスタンスがもつ変数radius」という意味です。ですので、b1とb2には別の参照が代入されているのでb1.radiusとb2.radiusが異なる変数だというのは当たり前のことです。b1.radiusのことをいちいち「b1が参照するインスタンスが持つ変数radius」と呼ぶのは手間なので、単に「b1のradius」と呼ぶことにします。ですが頭の中では「b1が参照するインスタンスが持つ変数radius」という風に読みかえてください。

b1やb2のようなインスタンスの場所を示す参照が代入されている変数は、参照型変数と呼ばれます。対して、

`
int a;
float b;
`

などのaやbは基本データ型変数と呼ばれます。

次のプログラムを通して参照についての理解を深めます。

[Chapter14/sketch04.pde](github:Chapter14/sketch04/sketch04.pde)

```processing
Ball b1 = new Ball(); // Ball型のオブジェクトを生成
Ball b2 = new Ball(); // Ball型のオブジェクトを生成

void setup() {
  size(960, 540);

  b1.radius = 40;     // b1のradiusに40を代入
  b2.radius = 20;     // b2のradiusに20を代入
  println(b1.radius); // 出力：40
  println(b2.radius); // 出力：20
  println("--");
  b2 = b1;            // b2にb1の参照を代入
  println(b1.radius); // 出力：40
  println(b2.radius); // 出力：40
}

// ボールについての情報をまとめたBallクラス
class Ball {
  // フィールド
  float x, y;
  int radius;
  color c;
}
```

参照型変数b1、b2のradiusに、それぞれ40と20の値を代入します。println()でそれぞれのradiusを出力すると、当然、40と20が出力されます。次にb2 = b1としたあとにもう一度radiusを出力すると、今度はどちらも40になります。b2 = b1を実行したとき、プログラムでは次の図のようなことが起こっています。

<img src="/images/Chapter14/class_2.png" width="655" height="363">

つまり、b1が持っていた参照をb2に代入したことにより、b1とb2が参照するインスタンスが同じになったのです。当然、b1.radiusとb2.radiusは同じ変数なのでprintln()で出力すると同じ値が出力されます。

この参照とインスタンスの関係を理解したうえで、今までの解説をもう一度読み返すことをオススメします。

## コンストラクタ

コンストラクタと呼ばれるものについて解説します。コンストラクト(construct)は日本語で「組み立てる」という意味の英語で、コンストラクタ(constructor)は「組み立てるもの」というような意味になります。コンストラクタはクラスに最低でも１つは書かれているものなのですが、クラス定義にコンストラクタを書かなかった場合、デフォルトコンストラクタと呼ばれるものがあるとみなされます。デフォルトコンストラクタは次のように書きます。

`
クラス名() {
}
`

[Chapter14/sketch05.pde](github:Chapter14/sketch05/sketch05.pde)

```processing
class Ball {
  float x, y;
  int radius;
  color c;

  /*
    コンストラクタを１つもクラス定義に書かなかったら
    このデフォルトコンストラクタがあるとみなされる
  */
  Ball() {
  }
}
```

コンストラクタはクラスからインスタンスを作る時に必要となるもので、実は

`Ball b1 = new Ball();`

のBall()の部分がコンストラクタです。new演算子に続いて、クラスに定義されている(とみなされている)コンストラクタを呼び出すことによってインスタンスを作っていたわけです。コンストラクタにはインスタンスを作るという最も重要な機能が初めから備わっているのですが、コンストラクタの中身にコードを加えて機能を付け足すことができます。次のプログラムではコンストラクタの中身にフィールドの代入処理を加えています。

[Chapter14/sketch06.pde](github:Chapter14/sketch06/sketch06.pde)

```processing
Ball b1, b2;

void setup() {
  size(960, 540);
  // size()使用後にBall()を呼び出す
  b1 = new Ball();
  b2 = new Ball();
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
}

class Ball {
  // フィールド
  float x, y;
  int radius;
  color c;

  // コンストラクタ
  Ball() {
    // フィールドの代入処理
    radius = (int)random(25, 50);
    x = random(radius, width-radius);
    y = random(radius, height-radius);
    c = color(random(255), random(255), random(255), random(128, 255));
  }
}
```

コンストラクタに代入処理を書き込むことによって、setup関数内でいちいち個別に代入文を書く必要がなくなりました。

`b1 = new Ball();`

を書く位置に注意が必要です。Ballクラスにあるフィールドx、yの代入処理にはwidthとheightが使われています。このwidthとheightはsize関数の使用後に値が設定されます。なので、widthとheightを使う代入処理を書き込んだBallコンストラクタはsize()を行ってから呼び出す必要があります。もし、今までのようにsetup関数の上側で

`Ball b1 = new Ball();`

のように書いていたら、widthとheightのデフォルト値である100を使ってフィールドx、yの代入処理を行うことになります。

コンストラクタは関数のように仮引数を持つことができます。次のプログラムでは、bx、by、rad、bcを仮引数とするコンストラクタを作り、フィールドx、y、radius、cに代入することで値の代入処理をしています。コンストラクタを呼び出すときは、仮引数を持つコンストラクタに合わせて実引数を書き込んだコンストラクタを使います。

[Chapter14/sketch07.pde](github:Chapter14/sketch07/sketch07.pde)

```processing
Ball b1, b2, b3;

void setup() {
  size(960, 540);
  // 実引数ありのコンストラクタを呼び出す
  // 赤
  b1 = new Ball(280, height/2, 100, color(255, 0, 0));
  // 青
  b2 = new Ball(480, height/2, 100, color(0, 255, 0));
  // 緑
  b3 = new Ball(680, height/2, 100, color(0, 0, 255));
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

今までは全てのフィールドにランダムな値を代入していたので、仮引数による代入処理が必要ありませんでしたが、青、黄、赤のボールを作り横一列に並ばせるといった場合には、仮引数ありのコンストラクタによってフィールドの値の代入処理をする方法が有効です。

クラス定義に書くフィールドには、デフォルト値を設定しておくことができます。

[Chapter14/sketch08.pde](github:Chapter14/sketch08/sketch08.pde)

```processing
Ball b1, b2, b3;

void setup() {
  size(960, 540);
  b1 = new Ball();
  b2 = new Ball();
  b3 = new Ball();
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
  int radius = 50;    // デフォルト値：50
  color c = color(0); // デフォルト値：黒

  // コンストラクタ
  Ball() {
    // フィールドの代入処理
    radius = (int)random(25, 50);
    x = random(radius, width-radius);
    y = random(radius, height-radius);
  }
}
```

`b1 = new Ball();`

が実行されたときの実行過程は、まずnew Ball()によりインスタンスが作られ、インスタンスが持つフィールドにクラス定義に書かれたデフォルト値が設定されます。そのあとBall()に書かれたフィールドの代入処理が実行されます。上のプログラムではコンストラクタの代入処理によってフィールドradius、x、yの値が決められますが、色だけはデフォルト値のままになっています。

## メソッド

今までに解説してきたクラスを使って、ボールがウィンドウを跳ね回るプログラムを作りました。Ballクラスには速度を表すフィールドvx、vyを追加しています。

[Chapter14/sketch09.pde](github:Chapter14/sketch09/sketch09.pde)

```processing
Ball b1, b2;

void setup() {
  size(960, 540);
  b1 = new Ball();
  b2 = new Ball();
}

void draw() {
  background(255);

  // b1を動かす
  b1.x += b1.vx;
  b1.y += b1.vy;
  // b1の壁との衝突処理
  if (b1.x-b1.radius <= 0 || b1.x+b1.radius >= width) {
    b1.vx *= -1;
  }
  if (b1.y-b1.radius <= 0 || b1.y+b1.radius >= height) {
    b1.vy *= -1;
  }

  // b2を動かす
  b2.x += b2.vx;
  b2.y += b2.vy;
  // b2の壁との衝突処理
  if (b2.x-b2.radius <= 0 || b2.x+b2.radius >= width) {
    b2.vx *= -1;
  }
  if (b2.y-b2.radius <= 0 || b2.y+b2.radius >= height) {
    b2.vy *= -1;
  }

  noStroke();
  // b1を描画
  fill(b1.c);
  ellipse(b1.x, b1.y, b1.radius*2, b1.radius*2);
  // b2を描画
  fill(b2.c);
  ellipse(b2.x, b2.y, b2.radius*2, b2.radius*2);
}

class Ball {
  // フィールド
  float x, y;
  float vx, vy; // 速度
  int radius;
  color c;

  // コンストラクタ
  Ball() {
    radius = (int)random(25, 50);
    x = random(radius, width-radius);
    y = random(radius, height-radius);
    vx = random(-5, 5);
    vy = random(-5, 5);
    c = color(random(255), random(255), random(255), random(128, 255));
  }
}
```

インスタンスがもつフィールドにアクセスするたびにb1.やb2.と書かなければならず、ちょっと面倒臭いですね。それに、ボールを動かす処理、壁との衝突処理、ボールの描画処理をb1とb2のそれぞれに書かなければならず、これも面倒です。実はクラスには、インスタンスが持つ変数だけでなく、インスタンスが行う処理もまとめることができます。言葉での解説は後回しにして、まずは次のプログラムを見てください。

[Chapter14/sketch10.pde](github:Chapter14/sketch10/sketch10.pde)

```processing
Ball b1, b2, b3;

void setup() {
  size(960, 540);

  b1 = new Ball();
  b2 = new Ball();
  b3 = new Ball();
}

void draw() {
  background(255);

  // ３つボールを動かす
  b1.update();
  b2.update();
  b3.update();
  // ３つのボールを描画する
  b1.display();
  b2.display();
  b3.display();
}

class Ball {
  // フィールド
  float x, y;   // 位置
  float vx, vy; // 速度
  int radius;   // 半径
  color c;      // 色

  // コンストラクタ
  Ball() {
    radius = (int)random(25, 50);
    x = random(radius, width-radius);
    y = random(radius, height-radius);
    vx = random(-5, 5);
    vy = random(-5, 5);
    c = color(random(255), random(255), random(255), random(128, 255));
  }

  // 値の更新、当たり判定を行うupdateメソッド
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

  // 図形の描画を行うdisplayメソッド
  void display() {
    noStroke();
    fill(c);
    ellipse(x, y, radius*2, radius*2);
  }
}
```

クラスにはインスタンスが行う処理を関数としてまとめる機能があります。例えばBallクラスのインスタンスに、動いて壁で跳ね返る処理と円を描画する処理を持たせたい場合は、Ballクラスにその処理を関数としてまとめることができるんです。上のプログラムでは、動いて壁で跳ね返る処理をupdateという名前の関数に、円を描画する処理をdisplayという名前の関数にまとめて、Ballクラス内で定義しています。インスタンスに対してクラスに定義した関数を呼び出す場合は

`
b1.update();
b1.display();
`

という風に、フィールドにアクセスするのと同じように参照型変数にドットで繋げて関数を呼び出します。クラス定義に書く関数のことをプログラミング用語でメソッドと呼ぶことがあるので覚えておいてください。

クラス定義に書くフィールドはインスタンスごとに保持されているので、b1.でアクセスするフィールドとb2.でアクセスするフィールドは別の変数でした。細かい話になるのですが、メソッドはインスタンスごとに保持されません。b1.display()と書いて呼び出すdisplayメソッドと、b2.display()と書いて呼び出すdisplayメソッドは、Ballクラス内に定義されている同じメソッドなんです。ですがProcessingの言語機能として、メソッド内に書かれたフィールドを、呼び出した参照型変数が参照するインスタンスが持つフィールドだと勝手に解釈してくれます。 例えばb1.update()を呼び出したときに実行されるupdate()メソッドは次のように解釈されて実行されます。

```processing
// b1に対して呼び出されたupdate関数
void update() {
  b1.x += b1.vx;
  b1.y += b1.vy;
  if (b1.x-b1.radius <= 0 || b1.x+b1.radius >= width) {
    b1.vx *= -1;
  }
  if (b1.y-b1.radius <= 0 || b1.y+b1.radius >= height) {
    b1.vy *= -1;
  }
}
```

b2.update()を呼び出したときも同じで、b2が参照するインスタンスが持つフィールドだと解釈されて実行されます。

```processing
// b2に対して呼び出されたupdate関数
void update() {
  b2.x += b2.vx;
  b2.y += b2.vy;
  if (b2.x-b2.radius <= 0 || b2.x+b2.radius >= width) {
    b2.vx *= -1;
  }
  if (b2.y-b2.radius <= 0 || b2.y+b2.radius >= height) {
    b2.vy *= -1;
  }
}
```

お疲れさまでした。かなり難しい概念の話を長々としてきました。ですがまだ続きます。次のChapterでさらに便利なクラスの使い方を解説していきます。
