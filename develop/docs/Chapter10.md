# 座標変換

このChapterでは座標の移動、回転、拡大縮小を行う関数を紹介していきます。

## 原点の移動

Processingでは、原点(0, 0)はウィンドウの左上の角にありましたが、translate関数を使うと原点をウィンドウの好きな位置に変えることができます。次のプログラムでは原点を画面中心に移動させたあと、３つの円を描画しています。

![](/images/Chapter10/sketch01.jpg)

[Chapter10/sketch01.pde](github:Chapter10/sketch01/sketch01.pde)

```processing
size(750, 350);
background(255);
noStroke();

// 原点を画面中心に移動
translate(width/2, height/2);

// 座標(-200, -100)に赤色の円を描画
fill(255, 0, 0);
ellipse(-200, -100, 80, 80);

// 原点に緑色の円を描画
fill(0, 255, 0);
ellipse(0, 0, 80, 80);

// 座標(200, 100)に青色の円を描画
fill(0, 0, 255);
ellipse(200, 100, 80, 80);
```

translate(width/2, height/2)を実行すると、ウィンドウの座標は次のように変わります。

![](/images/Chapter10/translate.jpg)

原点の位置がウィンドウの左上角にあるよりも画面中心にあったほうが考えやすい場合も多いので、translate(width/2, height/2)はこの先よく使うことになると思います。

translate()を２回以上使うと、原点の移動量は加算されていきます。次のプログラムを見てください。

![](/images/Chapter10/sketch02.jpg)

[Chapter10/sketch02.pde](github:Chapter10/sketch02/sketch02.pde)

```processing
size(750, 350);
background(255);
noStroke();

// 原点を座標(100, 50)に移動
translate(100, 50);

// 原点に赤色の円を描画
fill(255, 0, 0);
ellipse(0, 0, 80, 80);

// 原点を座標(200, 100)に移動
translate(100, 50);

// 原点に緑色の円を描画
fill(0, 255, 0);
ellipse(0, 0, 80, 80);

// 原点を座標(300, 150)に移動
translate(100, 50);

// 原点に青色の円を描画
fill(0, 0, 255);
ellipse(0, 0, 80, 80);
```

translate(100, 50)を３回使っていますが、その時の原点は座標(100, 50)、(200, 100)、(300, 150)に移動されます。

pushMatrix()とpopMatrix()を使うとtranslate()によって移動された原点の位置を、移動する前の位置に戻すことができます。

![](/images/Chapter10/sketch03.jpg)

[Chapter10/sketch03.pde](github:Chapter10/sketch03/sketch03.pde)

```processing
size(750, 350);
background(255);
noStroke();

// 現在の座標情報を保存
pushMatrix();
// 原点を座標(width/2-200, height/2-100)に移動
translate(width/2-200, height/2-100);
// 原点に赤色の円を描画
fill(255, 0, 0);
ellipse(0, 0, 80, 80);
// 現在の座標情報を変換前に戻す
popMatrix();

pushMatrix();
// 原点を座標(width/2, height/2)に移動
translate(width/2, height/2);
// 原点に緑色の円を描画
fill(0, 255, 0);
ellipse(0, 0, 80, 80);
popMatrix();

pushMatrix();
// 原点を座標(width/2+200, height/2+100)に移動
translate(width/2+200, height/2+100);
// 原点に青色の円を描画
fill(0, 0, 255);
ellipse(0, 0, 80, 80);
popMatrix();
```

translate()を３回使っていますが、原点の移動量が加算されていないことがわかると思います。pushMatrix()によって現在の座標情報を保存し、popMatrix()によって変換前の座標情報に戻しているからです。pushMatrix()とpopMatrix()には数学における行列の話が絡んでくるのですが、パパッと解説できるようなものではないので止めておきます。pushMatrix()とpopMatrix()を使う分には、とりあえずpushMatrix()で現在の座標情報を保存してpopMatrix()で戻す、という理解で十分かと思います。

translate()やこのあと解説するrotate()、scale()などによって変換された座標情報はdraw()の度にリセットされます。次のプログラムでは、pushMatrix()、popMatrix()を使わずにdraw()の中でtranslate()を実行していますが、draw()の度に原点の移動量が増えるわけではないことがわかります。

[Chapter10/sketch04.pde](github:Chapter10/sketch04/sketch04.pde)

```processing
void setup() {
  size(750, 350);
  noStroke();
  fill(0);
}

void draw() {
  background(255);
  // 原点を画面中心に移動
  translate(width/2, height/2);
  // 原点に円を描画
  ellipse(0, 0, 150, 150);
}
```

## 回転
rotate()を使うと座標を回転させることができます。パラメータにはラジアンで表された角度を指定します。次のプログラムではx軸に平行な(傾いていない)長方形と30度回転した長方形、60度回転した長方形を描画しています。

![](/images/Chapter10/sketch05.jpg)

[Chapter10/sketch05.pde](github:Chapter10/sketch05/sketch05.pde)

```processing
size(750, 350);
background(255);
noStroke();

// 回転していない赤色の長方形
fill(255, 0, 0);
rect(0, 0, 350, 50);

// 30度回転した青色の長方形
rotate(radians(30));
fill(0, 255, 0);
rect(0, 0, 350, 50);

// 60度回転した青色の長方形
rotate(radians(30));
fill(0, 0, 255);
rect(0, 0, 350, 50);
```

translate()による原点の移動量が加算されていったように、rotate()による座標の回転も加算されていきます。上のプログラムでは２回目のrotate(30)で座標が60度回転されています。

rotate()による座標の回転は常に原点を中心にして回転されます。translate()で原点を画面中心に移動させた場合は次のようになります。

![](/images/Chapter10/sketch06.jpg)

[Chapter10/sketch06.pde](github:Chapter10/sketch06/sketch06.pde)

```processing
size(750, 350);
background(255);
rectMode(CENTER);
noStroke();

// 原点を画面中心に移動
translate(width/2, height/2);

// 回転していない赤色の長方形
fill(255, 0, 0);
rect(0, 0, 300, 100);

// 30度回転した青色の長方形
rotate(radians(30));
fill(0, 255, 0);
rect(0, 0, 300, 100);

// 60度回転した青色の長方形
rotate(radians(30));
fill(0, 0, 255);
rect(0, 0, 300, 100);
```

注意が必要なのは、rotate()は座標全体、いわば図形が描画される世界全体を回転させます。上のプログラムでは、傾いた世界に平行な線を描画しています。平行な世界に傾いた線を描画しているわけではないです。translate()やrotate()とこれから解説するscale()は、個々の図形を移動させたり回転させたり拡大縮小させたりする関数ではありません。translate()は世界の原点を移動させ、rotate()は世界全体を回転させ、scale()は世界全体を拡大縮小させます。ただ、pushMatrix()とpopMatrix()を上手く使うと、個々の図形が回転や拡大縮小をしているように見せることはできます。方法はscale()を紹介したあとに解説します。

## 拡大縮小
scale()を使うと座標全体を拡大縮小することができます。scale()のパラーメータには何倍するかを表す数値をfloat型で指定します。2.5倍したい場合は

`scale(2.5);`

とします。パラメータを２つ与えた場合は、１つ目がx軸方向に何倍するかを表し、２つ目がy軸方向に何倍するかを表します。

`scale(4.0, 0.5);`

![](/images/Chapter10/sketch07.jpg)

[Chapter10/sketch07.pde](github:Chapter10/sketch07/sketch07.pde)

```processing
size(750, 350);
background(255);
fill(220);

// 赤色の円
stroke(255, 0, 0);
ellipse(50, 50, 50, 50);

// 2倍に拡大された緑色の円
scale(2.0);
stroke(0, 255, 0);
ellipse(50, 50, 50, 50);

// 4倍に拡大された青色の円
scale(2.0);
stroke(0, 0, 255);
ellipse(50, 50, 50, 50);
```

![](/images/Chapter10/sketch08.jpg)

[Chapter10/sketch08.pde](github:Chapter10/sketch08/sketch08.pde)

```processing
size(750, 350);
background(255);
fill(220);

stroke(255, 0, 0);
ellipse(50, 50, 50, 50);

// x軸方向に4倍、y軸方向に2倍拡大された緑色の円
scale(4.0, 2.0);
stroke(0, 255, 0);
ellipse(50, 50, 50, 50);
```

scale()によって座標を拡大縮小すると、描かれる図形の枠線の太さも拡大縮小されます。図形だけを拡大縮小して枠線の太さをそのままに保ちたい場合は次のようにします。

![](/images/Chapter10/sketch09.jpg)

[Chapter10/sketch09.pde](github:Chapter10/sketch09/sketch09.pde)

```processing
size(750, 350);
background(255);
fill(220);

// 赤色の円
stroke(255, 0, 0);
ellipse(50, 50, 50, 50);

float s = 2.0;

// 2倍に拡大された緑色の円
scale(2.0);
stroke(0, 255, 0);
// 枠線の太さを維持
strokeWeight(1.0/s);
ellipse(50, 50, 50, 50);

// 4倍に拡大された青色の円
scale(2.0);
stroke(0, 0, 255);
// 枠線の太さを維持
strokeWeight(1.0/(s*s));
ellipse(50, 50, 50, 50);
```

translate()で原点を画面中心に移動させた場合は次のようになります。

![](/images/Chapter10/sketch10.jpg)

[Chapter10/sketch10.pde](github:Chapter10/sketch10/sketch10.pde)

```processing
size(750, 350);
background(255);
noFill();

// 原点を画面中心に移動
translate(width/2, height/2);

// 赤色の円
stroke(255, 0, 0);
ellipse(0, 0, 50, 50);

// 2倍に拡大された緑色の円
scale(2.0);
stroke(0, 255, 0);
ellipse(0, 0, 50, 50);

// 4倍に拡大された青色の円
scale(2.0);
stroke(0, 0, 255);
ellipse(0, 0, 50, 50);
```

## 個々の図形の変形

今までに解説してきた、pusuMatrix()、popMatrix()、translate()、rotate()、scale()を使って、個々の図形が回転したり拡大縮小してるように見せる方法を解説します。次のような手順を踏めば、図形ごとの回転と、拡大縮小を表現できます。

１：pushMatrix()で現在の座標情報を保存する<br>
２：translate()で図形を描画する位置に原点を移動させる<br>
３：rotate()やscale()で回転、拡大縮小を行う<br>
４：原点に図形を描画<br>
５：popMatrix()で座標情報を戻す

![](/images/Chapter10/sketch11.jpg)

[Chapter10/sketch11.pde](github:Chapter10/sketch11/sketch11.pde)

```processing
size(750, 350);
background(255);
stroke(0);
strokeWeight(5);
rectMode(CENTER);

// 現在の座標情報を保存
pushMatrix();
// 原点を画面中心に移動
translate(200, height/2);
// 回転と拡大
rotate(radians(45));
scale(2.0);
fill(255, 0, 0);
// 原点に長方形と点を描く
rect(0, 0, 100, 40);
point(0, 0);
// 座標情報を変換前に戻す
popMatrix();

pushMatrix();
translate(width/2, height/2);
// 回転と拡大
rotate(radians(-45));
scale(1.5, 2.0);
fill(0, 255, 0);
rect(0, 0, 100, 40);
point(0, 0);
popMatrix();

pushMatrix();
translate(500, height/2);
// 回転と拡大
rotate(radians(90));
scale(3.0);
fill(0, 0, 255);
rect(0, 0, 100, 40);
point(0, 0);
popMatrix();
```

図形の１つ１つをpushMatrix()とpopMatrix()で囲っているので、前に行った座標変換のことを気にする必要がありません。translate()で図形を描画したい位置に原点を移動させ、原点に図形を描画しているので、rotate()とscale()が個々の図形を回転させたり拡大縮小を行っているように見えます。

draw()を使ってアニメーションにしてみましょう。

<iframe src="/samples/tutorial/Chapter10/sketch12.html" class="sample-sketch"></iframe>

[Chapter10/sketch12.pde](github:Chapter10/sketch12/sketch12.pde)

```processing
void setup() {
  size(750, 350);
  rectMode(CENTER);
  stroke(0);
  strokeWeight(5);
  fill(128);
}

void draw() {
  background(255);

  // 時計周りに回転する正方形
  pushMatrix();
  translate(width/2-100, height/2);
  rotate(frameCount*0.05);
  rect(0, 0, 100, 100);
  popMatrix();

  // 反時計回りに回転する正方形
  pushMatrix();
  translate(width/2+100, height/2);
  rotate(-frameCount*0.05);
  rect(0, 0, 100, 100);
  popMatrix();
}
```

rotate()のパラメータにframeCountを使いました。回転するアニメーションを作る場合はrotate()に指定する角度を少しずつ増加させなければいけません。frameCountはdraw()ごとに+1ずつされていくので、回転するアニメーションなどに使うと便利です。frameCountに掛ける値を増加させると回転速度が上がります。

これで、本来個々の図形を回転させたり拡大縮小させるものではないrotate()とscale()を、pushMatrix()、translate()、popMatrix()を使って個々の図形が回転したり拡大縮小したりしてるように見せる方法がわかったかと思います。

お疲れさまでした。Chapter10はこれで終了です。
