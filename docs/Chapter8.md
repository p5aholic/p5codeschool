# 関数

このChapterではProcessingに標準で備わっている便利な関数を紹介し、関数の自作方法も解説します。

## 計算関数

Processingに標準で備わっている様々な計算をしてくれる関数を紹介します。

<dl class="func-list">
    <dt>[abs(n)](p5ref:abs_.html)</dt>
    <dd>nの絶対値を返す</dd>
    
    <dt>[round(n)](p5ref:round_.html)</dt>
    <dd>nの小数点以下を四捨五入した整数を返す</dd>
    
    <dt>[ceil(n)](p5ref:ceil_.html)</dt>
    <dd>nの小数点以下を切り上げた整数を返す</dd>
    
    <dt>[floor(n)](p5ref:floor_.html)</dt>
    <dd>nの小数点以下を切り下げた整数を返す</dd>
    
    <dt>[min(a, b, [c])](p5ref:min_.html)</dt>
    <dd>与えられた引数の最小値を返す</dd>
    
    <dt>[max(a, b, [c])](p5ref:max_.html)</dt>
    <dd>与えられた引数の最大値を返す</dd>
    
    <dt>[constrain(value, low, high)](p5ref:constrain_.html)</dt>
    <dd>valueの値をlow～highに制限した値を返す</dd>
    
    <dt>[map(value, start1, stop1, start2, stop2)](p5ref:map_.html)</dt>
    <dd>start1～stop1の範囲にあるvalueをstart2～stop2の範囲にある数値にしたものを返す</dd>
    
    <dt>[norm(value, start, stop)](p5ref:norm_.html)</dt>
    <dd>start～stopの範囲にあるvalueを0～1の範囲にある数値にしたものを返す</dd>
    
    <dt>[lerp(start, stop, amt)](p5ref:lerp_.html)</dt>
    <dd>startからstopまでをamt(0～1)で線形補間した値を返す</dd>
    
    <dt>[mag(x, y, [z])](p5ref:mag_.html)</dt>
    <dd>原点から座標(x, y, [z])までの長さを返す</dd>
    
    <dt>[dist(x1, y1, [z1], x2, y2, [z2])](p5ref:dist_.html)</dt>
    <dd>２点間の距離を返す</dd>
    
    <dt>[pow(n, e)](p5ref:pow_.html)</dt>
    <dd>nのe乗を返す</dd>
    
    <dt>[sq(n)](p5ref:sq_.html)</dt>
    <dd>nの2乗を返す</dd>
    
    <dt>[sqrt(n)](p5ref:sqrt_.html)</dt>
    <dd>nの平方根(ルート)を返す</dd>
    
    <dt>[exp(n)](p5ref:exp_.html)</dt>
    <dd>自然対数の低eのn乗を返す</dd>
    
    <dt>[log(n)](p5ref:log_.html)</dt>
    <dd>nの自然対数を返す</dd>
</dl>

上記の関数の中からこれからよく使うであろうconstrain関数とdist関数、map関数を使ったプログラムを紹介します。

constrain関数は変数の取りうる値の範囲を制限することができます。１つ目のパラメータに制限の対象となる変数を、２つ目と３つ目のパラメータに変数を制限する範囲の最小値と最大値を与えます。constrain関数は、変数が最小値未満なら最小値を、最大値より大きいなら最大値を、最小値～最大値の間にあれば変数の値をそのまま返します。つまり変数が最小値～最大値の間で収まるように制限しているわけです。次のプログラムでは変数aを0～100の間に制限しています。

[Chapter8/sketch01.pde](github:Chapter8/sketch01/sketch01.pde)

```processing
int a;
a = 50;
a = constrain(a, 0, 100); // aに50を代入
println(a);
a = -10;
a = constrain(a, 0, 100); // aに0を代入
println(a);
a = 200;
a = constrain(a, 0, 100); // aに100を代入
println(a);
```

関数には結果の値を返す関数と返さない関数があります。fill()やstrokeWeight()などは値を返さない関数で、constrain関数は結果として値を返す関数です。 Chapter 2で

`arc(88, 175, 100, 100, radians(45), radians(315));`

のようにarc関数の５つ目と６つ目のパラメータにradians関数を使っていたのを思い出してください。radians関数も結果としてラジアンを返す関数です。arc関数の５つ目と６つ目のパラメータにはradians関数によって返された値を指定していたわけです。上のプログラムでは

`a = constrain(a, 0, 100);`

と代入文を書くことで変数aにconstrain関数が返した値を代入しています。

`constrain(a, 0, 100);`

と書いただけでは変数aの値が変わらないことに注意してください。

次のプログラムはマウスの位置にrect関数で箱を表示していますが、箱の座標をconstrain関数で制限することで檻の外に出られないようにしています。

<iframe src="/samples/tutorial/Chapter8/sketch02.html" class="sample-sketch"></iframe>

[Chapter8/sketch02.pde](github:Chapter8/sketch02/sketch02.pde)

```processing
int x, y, size; // 箱の座標と大きさ
int cageSize;   // 檻の大きさ

void setup() {
  size(750, 350);
  rectMode(CENTER);
  x = width/2;
  y = height/2;
  size = 60;
  cageSize = 200;
}

void draw() {
  background(128);

  // 檻を描画
  stroke(0);
  strokeWeight(5);
  noFill();
  rect(width/2, height/2, cageSize, cageSize);

  // マウスの座標を檻の中の範囲に制限した値を箱の座標とする
  x = constrain(mouseX, width/2-cageSize/2+size/2, width/2+cageSize/2-size/2);
  y = constrain(mouseY, height/2-cageSize/2+size/2, height/2+cageSize/2-size/2);

  // 箱を描画
  fill(0);
  rect(x, y, size, size);
}
```

dist関数の使い方を解説していきます。dist関数は２点間の距離を計算して返す関数です。dist関数が返す値の型はfloatなのでfloat型の変数に代入しなければいけません。

[Chapter8/sketch03.pde](github:Chapter8/sketch03/sketch03.pde)

```processing
// 座標(0, 0)と座標(3, 4)の距離を計算
float d1 = dist(0, 0, 3, 4);
println(d1); // 出力 : 5.0

// 座標(20, 40)と座標(80, 120)の距離を計算
float d2 = dist(20, 40, 80, 120);
println(d2); // 出力 : 100.0
```

dist関数を使うと円とマウスの接触判定ができるようになります。円の中心からマウスまでの距離がd、円の半径がrとするとd <= rのときマウスは円内にあります。

<iframe src="/samples/tutorial/Chapter8/sketch04.html" class="sample-sketch"></iframe>

[Chapter8/sketch04.pde](github:Chapter8/sketch04/sketch04.pde)

```processing
int x, y, diameter; // 円の座標と直径
color c1, c2;       // 円の色と線の色

void setup() {
  size(750, 350);
  x = width/2;
  y = height/2;
  diameter = 150;
  c1 = color(0);
  c2 = color(0, 255, 0);
}

void draw() {
  background(128);

  // 円の中心座標とマウス座標の距離を計算
  float d = dist(x, y, mouseX, mouseY);
  // マウスが円内にあるとき
  if (d <= diameter/2) {
    c1 = color(255);
    c2 = color(255, 0, 0);
  } else {
    c1 = color(0);
    c2 = color(0, 255, 0);
  }

  // 円
  noStroke();
  fill(c1);
  ellipse(x, y, diameter, diameter);
  // 線
  stroke(c2);
  line(x, y, mouseX, mouseY);
}
```

map関数はある範囲にある値から別の範囲の数値を作りたいときに便利です。言葉で説明してもわかりにくいので次のプログラムを見てください。マウスがウィンドウの右端にあるほど縦線の太さが太く、下端にあるほど横線の太さが太くなります。

<iframe src="/samples/tutorial/Chapter8/sketch05.html" class="sample-sketch"></iframe>

[Chapter8/sketch06.pde](github:Chapter8/sketch06/sketch06.pde)

```processing
void setup() {
  size(750, 350);
  stroke(0);
}

void draw() {
  background(255);

  // マウスのx座標を縦線の太さに変換
  int xWeight = (int)map(mouseX, 0, width, 1, 50);
  // マウスのy座標を横線の太さに変換
  int yWeight = (int)map(mouseY, 0, height, 1, 50);

  strokeWeight(xWeight);
  for (int x = 0; x <= width; x += 50) {
    line(x, 0, x, height);
  }
  strokeWeight(yWeight);
  for (int y = 0; y <= height; y += 50) {
    line(0, y, width, y);
  }
}
```

map関数の１つ目のパラメータには変換の対象となる変数、２つ目と３つ目のパラメータにはその変数の最小値と最大値、４つ目と５つ目のパラメータには変換後の値の最小値と最大値を指定します。上のプログラムでは次のようにしてマウスの座標から線の太さの値を作っています。

`int xWeight = (int)map(mouseX, 0, width, 1, 50);`

こうすると、mouseXが0のときはmap()は1を返し、mouseXがwidthのときは50を返してくれます。map()はfloat型を返すのでint型変数に代入するときは(int)もしくはint()で型変換をします。

## 関数を作る理由
関数は一部の機能をまとめたパーツのようなものです。パーツ(関数)を色々組み合わせて使うことでプログラムが出来上がります。今まで使ってきたline()やfill()、radians()などはProcessingの土台のプログラムで定義されている関数です。今まで当然のようにline()と書くだけで線を描くことができましたが、 実はプログラムでコンピュータのディスプレイ上に線を描いたり色を指定したりするのは簡単なことではありません。多くの煩雑な処理をしないとディスプレイに図形を描画することはできないんです。Processingの土台のプログラム側がそういった煩雑な処理を担ってくれているので、私たちユーザー側はline()と１行書くだけで線を描画できるわけです。もしProcessing側にline関数が定義されていなければ、私たちユーザー側は線を書くたびにとても煩雑な処理をプログラムする必要がありますし、radians関数が定義されていなければ、度数をラジアンに変換するたびに自分で変換計算式を書かなければいけません。とても面倒です。これはProcessing開発者側が関数を作る理由です。プログラミングに慣れてきて色々なコードを書くようになると、私たちユーザー側も関数を作る必要性が出てきます。

## 関数の作り方

関数は以下のようにして作ることができます。

`
データ型 関数名() {
  // 中身の処理
  return 値;
}
データ型 関数名(仮引数1, 仮引数2, ...) {
  // 中身の処理
  return 値;
}
`

関数名の前にはその関数が結果として返す値のデータ型(int、float、color...)を書きます。その後、関数名に続いて丸カッコ、丸カッコのあとに波カッコでブロックを作り、ブロック内にその関数の中身の処理を書きます。関数から結果を返すにはreturnと書いたあとに返す値を書きます。これをreturn文と呼びます。丸カッコの中にはその関数のパラメータを好きなだけ書くことができます。パラメータの１つ１つは仮引数(かりひきすう)と呼ばれます。例えばline関数は４つの仮引数を持つように定義されています。仮引数は無くてもいいです。noFill()やnoStroke()は仮引数を持たない関数です。

Processingの土台のプログラムで定義されているconstrain関数を自作してみました。名前はmyConstrainにしています。

[Chapter8/sketch06.pde](github:Chapter8/sketch06/sketch06.pde)

```processing
void setup() {
  // 関数は定義した行より前でも使える
  int a = myConstrain(-10, 0, 100);
  println(a); // 0
  a = myConstrain(50, 0, 100);
  println(a); // 50
  a = myConstrain(300, 0, 100);
  println(a); // 100;
}

// ここから
int myConstrain(int value, int low, int high) {
  // low未満ならlowを返す
  if (value < low) {
    return low;
  }
  // highより大きいならhighを返す
  else if (value > high) {
    return high;
  }
  // 間ならvalueをそのまま返す
  else return value;
}
// ここまでが関数定義
```

myConstrain関数はint型の値を返すので関数名の前にintを、丸カッコ内には３つの仮引数value, low, highを書きます。仮引数に用いる変数は通常の変数の宣言と同じように書き、複数ある場合はコンマで区切ります。関数の中身ではif文を使ってvalueがどの範囲にあるのかを調べてそれぞれの分岐先でreturn文で結果を返しています。このようにreturn文は関数内にいくつでも書けます。

ここまでが関数定義です。関数を定義する位置はどこでも大丈夫です。setup()の下側で定義しても上側で定義してもいいです。書いたプログラムは基本的に上から下に実行されますが、関数定義をした行より前の行でもその関数を使えます。

setup関数内でmyConstrain関数を使った時のプログラムの実行過程を追ってみます。関数定義に書く丸カッコ内の変数のことを仮引数と呼びます。対して、関数を使う時に丸カッコ内に書くパラメータのことは実引数と言います。

`int a = myConstrain(-10, 0, 100);`

上でいうと-10や0、100が実引数です。関数を呼び出すとプログラムの処理がsetup関数内からmyConstrain関数内に移ります。

`int a = myConstrain(-10, 0, 100);`

と書いた場合は仮引数のvalueに-10が、lowに0が、highに100がセットされmyConstrain関数が実行されます。その結果myConstrain関数はreturn文でlowを結果として返します。関数内でreturn文が実行されるとプログラムの処理が呼び出し側のsetup関数内に戻り変数aにmyConstrain関数が返したlowが代入されます。

さらに具体例を紹介していきます。円を２つ配置して、マウスが円内にある時は円の色をランダムに切り替えています。マウスが円内にあるかどうかを確かめる処理をmouseOver関数にまとめました。mouseOver関数には円の座標と半径をパラメータとして渡します。mouseOver関数はboolean型を返すので、if(mouseOver())と書くことで場合わけができます。

<iframe src="/samples/tutorial/Chapter8/sketch07.html" class="sample-sketch"></iframe>

[Chapter8/sketch07.pde](github:Chapter8/sketch07/sketch07.pde)

```processing
int x1, y1, radius1; // 左の円の座標と半径
int x2, y2, radius2; // 右の円の座標と半径

void setup() {
  size(750, 350);
  noStroke();
  // 左の円の座標と半径を設定
  x1 = 150;
  y1 = 100;
  radius1 = 100;
  // 右の円の座標と半径を設定
  x2 = 450;
  y2 = 200;
  radius2 = 50;
}

void draw() {
  background(255);

  // マウスと左の円が重なっているとき
  if (mouseOver(x1, y1, radius1)) {
    fill(random(255), random(255), random(255));
  }
  // 重なっていないとき
  else fill(0);
  ellipse(x1, y1, radius1*2, radius1*2);

  // マウスと右の円が重なっているとき
  if (mouseOver(x2, y2, radius2)) {
    fill(random(255), random(255), random(255));
  }
  // 重なっていないとき
  else fill(0);
  ellipse(x2, y2, radius2*2, radius2*2);
}

// マウスと円が重なっているか調べる関数
boolean mouseOver(int x, int y, int radius) {
  // 距離を計算
  float dist = dist(x, y, mouseX, mouseY);
  // 重なっていればtrueを返す
  if (dist <= radius) {
    return true;
  }
  // 重なっていなければfalseを返す
  else return false;
}
```

mouseOver関数は次のように書くこともできます。

```processing
boolean mouseOver(int x, int y, int radius) {
  float dist = dist(x, y, mouseX, mouseY);
  if (dist <= radius) {
    return true;
  }
  return false;
}
```

else文を省いて直接

`return false;`

としています。myConstrain関数の説明の時も言ったように、関数内でreturn文が実行されるとその時点で関数内での処理が終了し、関数の呼び出し側に処理が移ります。mouseOver関数でreturn trueが実行されたらその時点でmouseOver関数の処理が終了するわけです。if文でマウスが円内にあると判定されなければ当然return falseが実行されるので、else文があるときと全く同じ動きになります。

関数には値を返す関数と返さない関数があると言いました。値を返さない関数は次のようにして作ることができます。

`
void 関数名() {
  // 中身の処理
}
void 関数名(仮引数1, 仮引数2, ...) {
  // 中身の処理
}
`

値を返す関数は関数名の前に返す値のデータ型を書きますが、値を返さない関数はvoidと書きます。ちなみにvoidは「空の～」とか「空虚な～」なんて意味の英語です。値を返さない関数には当たり前ですがreturn文は必要ありません。

値を返さない関数の例として顔を描くface関数を作ってみました。 face関数には顔を描く座標と顔の大きさをパラメータとして渡します。

<iframe src="/samples/tutorial/Chapter8/sketch08.html" class="sample-sketch"></iframe>

[Chapter8/sketch08.pde](github:Chapter8/sketch08/sketch08.pde)

```processing
void setup() {
  size(750, 350);
  background(255);
  // 1秒間に1回実行
  frameRate(1);
}

void draw() {
  // 顔を描く
  face((int)random(width), (int)random(height), (int)random(50, 100));
}

// 顔を描く関数
void face(int x, int y, int size) {
  strokeWeight(2);
  stroke(0);
  noFill();
  // 輪郭
  ellipse(x, y, size, size);
  // 左目
  ellipse(x-size/4, y-size/4, size/5, size/5);
  // 右目
  ellipse(x+size/4, y-size/4, size/5, size/5);
  fill(0);
  // 口
  ellipse(x, y+size/4, size/3, size/3);
}
```

関数定義で関数名の前にintやfloatなどのデータ型を書いた関数は値を返す関数になりますが、値を返す関数は必ず何かしらの値を返さなければいけません。関数内で条件分岐によって返す値を場合わけするときには注意が必要です。次のプログラムのtest1関数は変数rが1未満の場合のみtrueを返すようになっていますが、このプログラムを実行すると、「この関数はboolean型の値を返さなければいけません」という意味のエラーが出ます。

[Chapter8/sketch09.pde](github:Chapter8/sketch09/sketch09.pde)

```processing
void setup() {
  boolean b = test1();
  println(b);
}

boolean test1() {
  int r = (int)random(5);
  if (r < 1) {
    return true;
  }
}
```

このエラーはもっとわかりやすく言うと「この関数は値を返さない場合があります」ということになります。値を返す関数は必ず何かしらの値を返す必要があります。test1関数はif文に当てはまった場合のみしかreturn文を実行しないので、当てはまらなかった場合は何も返しません。エラーはこれのせいで出ています。test1関数を次のようにしても、同じエラーが出ます。

[Chapter8/sketch10.pde](github:Chapter8/sketch10/sketch10.pde)

```processing
void setup() {
  boolean b = test2();
  println(b);
}

boolean test2() {
  int r = (int)random(5);
  if (r < 1) {
    return true;
  } else if (r >= 1) {
    return false;
  }
}
```

else if文を追加して、rが1以上のときはfalseを返すようにしましたが、これでもエラーが出ます。「rは1未満か1以上のどちらかなんだから絶対にtrueかfalseを返すじゃん？」と思うかもしれませんが、エラーを発見してくれるプログラムはそこまで賢くなくて、if文の中身までは見てくれません。test2関数の場合if文にもelse if文にもあてはまらずに何も値を返さない可能性があるとみなされてしまいエラーが出ます。エラーが出ないようにするには次のようにします。

[Chapter8/sketch11.pde](github:Chapter8/sketch11/sketch11.pde)

```processing
void setup() {
  boolean b = test3();
  println(b);
}

boolean test3() {
  int r = (int)random(5);
  if (r < 1) {
    return true;
  } else return false;
}
```

この場合if文に当てはまらなければ必ずelse文でfalseが返されるのでエラーは出ません。

お疲れさまでした。Chapter8はこれで終了です。
