# 3D図形とカメラ

3D空間に描くことができる図形とカメラの扱い方を解説します。

## 3D図形
3D図形を描くには、まず3D空間を扱えるレンダリングエンジンに切り替える必要があります。Processingではsize関数の第3パラメータにレンダリングエンジンを指定することができます。Processingで使えるレンダリングエンジンは4種類あるのですが、3D空間を扱うにはP3Dを指定します。

`size(960, 540, P3D);`

これで3D図形が描画できるようになりました。3D空間の座標について確認しておきます。3D空間の座標は(x, y, z)という形で表現します。原点(0, 0, 0)は2Dの場合と変わらずウィンドウの左上の角になります。z軸のプラス方向は、私たちがPC画面の真正面に座っているとして、画面から私たちの方向に向いています。逆にマイナス方向はPC画面の奥に向かっています。x軸方向の描画範囲は0 ～ width-1、y軸方向の描画範囲は0 ~ height-1と決まっていますが、z軸方向の描画範囲は決まっていません。PC画面の手前と奥に無限に広がっていると考えます。

Processingで扱える3D図形は次の2つです。

<dl class="p5Functions">
    <dt>[box(size) || box(w, h, d)](p5ref:box_.html)</dt>
    <dd>・１辺がsizeの箱を描画する<br>・幅w、高さh、奥行きdの箱を描画する</dd>
    <dt>[sphere(r)](p5ref:sphere_.html)</dt>
    <dd>半径rの球体を描画する</dd>
</dl>

3D図形として用意されているのは箱と球体だけなんです。自由な形の3D図形を自作できる方法があるのですが、それはまた別のChapterで解説します。

ところで、box()とsphere()には座標が指定できません。「は？」ってなると思いますが、まぁそうなんです。box()とsphere()は原点にしか描画できないんです。なので、ウィンドウ内の任意の場所にbox()とsphere()を描画したい場合はtranslate()でその場所まで原点を移す必要があります。面倒臭いですが仕方ありません。次のプログラムで2つの箱を描画しています。

![](/images/Chapter11/sketch01.jpg)

[Chapter11/sketch01.pde](github:Chapter11/sketch01/sketch01.pde)

```processing
void setup() {
  // レンダラをP3Dに
  size(960, 540, P3D);
  noLoop();
  stroke(220);
  strokeWeight(5);
}

void draw() {
  background(0);

  pushMatrix();
  // 座標(width/2-100, height/2, 100)にboxを描く
  translate(width/2-100, height/2, 100);
  fill(128);
  // 幅、高さ、奥行きが100pxの箱
  box(100);
  popMatrix();

  pushMatrix();
  // 座標(width/2+100, height/2, -100)にboxを描く
  translate(width/2+100, height/2, -100);
  noFill();
  // 幅100px、高さ50px、奥行き200pxの箱
  box(100, 50, 200);
  popMatrix();
}
```

sphere()も描画してみましょう。

![](/images/Chapter11/sketch02.jpg)

[Chapter11/sketch02.pde](github:Chapter11/sketch02/sketch02.pde)

```processing
void setup() {
  size(960, 540, P3D);
  noLoop();
}

void draw() {
  background(0);

  pushMatrix();
  translate(width/2-100, height/2, 0);
  noStroke();
  fill(128);
  // 半径100の球体
  sphere(100);
  popMatrix();

  pushMatrix();
  translate(width/2+100, height/2, 0);
  stroke(128);
  noFill();
  // 半径100の球体
  sphere(100);
  popMatrix();
}
```

球体は小さな面の集まりでできています。sphereDetail()を使うと、球体をいくつの面で分割するかを変えることができます。sphereDetail(30)とした場合、球体の水平方向と垂直方向に面が30個できます。水平方向は１周360度なので12(360÷30)度間隔で面が作られ、垂直方向は上から下まで180度なので6(180÷30)度間隔で面が作られます。sphereDetail()を指定しなかった場合のデフォルト値は30です。パラメータを２つ与えると水平方向と垂直方向の面の数を別々に指定できます。次のプログラムを実行してみてください。マウスが左端に近いほど水平方向の面の数が増え、下端に近いほど垂直方向の面の数が増えます。

![](/images/Chapter11/sketch03.jpg)

[Chapter11/sketch03.pde](github:Chapter11/sketch03/sketch03.pde)

```processing
void setup() {
  size(960, 540, P3D);
  stroke(255);
  noFill();
}

void draw() {
  background(0);

  // 水平方向の解像度(resolution)
  int uRes = (int)map(mouseX, 0, width, 3, 30);
  // 垂直方向の解像度(resolution)
  int vRes = (int)map(mouseY, 0, height, 2, 30);

  translate(width/2, height/2, 0);
  // 面の細かさを設定
  sphereDetail(uRes, vRes);
  sphere(100);
}
```

マウスの座標をmap()で面の数に変換しています。水平方向は最低でも３面で分割しないと平面になってしまうので、hResの最小値は3にしています。

## 3D座標の回転

今までの2Ｄ空間でのrotate()による回転はz軸中心の回転でした。3Ｄ空間ではx軸中心の回転とy軸中心の回転が使えるようになります。

<dl class="p5Functions">
    <dt>[rotateX(angle)](p5ref:rotateX_.html)</dt>
    <dd>x軸を中心にして回転する</dd>
    <dt>[rotateY(angle)](p5ref:rotateY_.html)</dt>
    <dd>y軸を中心にして回転する</dd>
    <dt>[rotateZ(angle)](p5ref:rotateZ_.html)</dt>
    <dd>z軸を中心にして回転する</dd>
    <dt>[rotate(angle)](p5ref:rotate_.html)</dt>
    <dd>z軸を中心にして回転する</dd>
</dl>

rotate()とrotateZ()の違いは名前だけです。

次のプログラムでは赤緑青の箱をrotateX()、rotateY()、rotateZ()で回しています。

![](/images/Chapter11/sketch04.jpg)

[Chapter11/sketch04.pde](github:Chapter11/sketch04/sketch04.pde)

```processing
void setup() {
  size(960, 540, P3D);
  stroke(0);
  strokeWeight(2);
}

void draw() {
  background(255);

  // x軸中心に回転する赤色の箱
  pushMatrix();
  translate(width/2, height/2-100, 0);
  rotateX(frameCount*0.03);
  fill(255, 0, 0);
  box(50);
  popMatrix();

  // y軸中心に回転する緑色の箱
  pushMatrix();
  translate(width/2, height/2, 0);
  rotateY(frameCount*0.03);
  fill(0, 255, 0);
  box(50);
  popMatrix();

  // z軸中心に回転する青色の箱
  pushMatrix();
  translate(width/2, height/2+100, 0);
  rotateZ(frameCount*0.03); // rotate()でも可
  fill(0, 0, 255);
  box(50);
  popMatrix();
}
```

次のプログラムのほうが軸で回転しているのがわかりやすいです。実行してマウスを動かしてみてください。マウスの上下の動きがx軸中心の回転角度、左右の動きがy軸中心の回転角度になっています。このプログラムで6つのパラメータを持つline()を使っています。解説は後ほど。

![](/images/Chapter11/sketch05.jpg)

[Chapter11/sketch05.pde](github:Chapter11/sketch05/sketch05.pde)

```processing
void setup() {
  size(960, 540, P3D);
}

void draw() {
  background(255);
  // 原点を画面中心に移動
  translate(width/2, height/2, 0);

  // マウスの座標を回転角度に変換
  float rotationX = map(mouseY, 0, height, -PI, PI);
  float rotationY = map(mouseX, 0, width, -PI, PI);
  // x軸中心の回転
  rotateX(rotationX);
  // y軸中心の回転
  rotateY(rotationY);

  // 画面中心の箱
  stroke(0);
  fill(220);
  box(50);

  // x軸を示す赤色の線
  stroke(255, 0, 0);
  line(0, 0, 0, 500, 0, 0);
  // y軸を示す緑色の線
  stroke(0, 255, 0);
  line(0, 0, 0, 0, 500, 0);
  // x軸を示す青色の線
  stroke(0, 0, 255);
  line(0, 0, 0, 0, 0, 500);
}
```

## 3D空間内の2D図形

point()とline()は3D空間内で使うこともできます。

<dl class="p5Functions">
    <dt>[point(x, y, z)](p5ref:point_.html)</dt>
    <dd>座標(x, y, z)に点を描画</dd>
    <dt>[line(x1, y1, z1, x2, y2, z2)](p5ref:line_.html)</dt>
    <dd>座標(x1, y1, z1)と座標(x2, y2, z2)をつなぐ線を描画</dd>
</dl>

![](/images/Chapter11/sketch06.jpg)

[Chapter11/sketch06.pde](github:Chapter11/sketch06/sketch06.pde)

```processing
void setup() {
  size(960, 540, P3D);
  noLoop();
  stroke(0);
  strokeWeight(15);
}

void draw() {
  background(255);
  translate(width/2, height/2, 0);

  // 縦横に５つの点を表示
  for (int x = -2; x <= 2; x++) {
    for (int y = -2; y <= 2; y++) {
      float pointX = x * 50;
      float pointY = y * 50;
      float pointZ = -x * 50;
      point(pointX, pointY, pointZ);
    }
  }
}
```

z座標用のパラメータが用意されている2D図形はpoint()とline()だけですが、translate()を使えば他の2D図形も3D空間内に描画できます。次のプログラムでは3D空間にellipse()を使って円を描画しています。

![](/images/Chapter11/sketch07.jpg)

[Chapter11/sketch07.pde](github:Chapter11/sketch07/sketch07.pde)

```processing
void setup() {
  size(960, 540, P3D);
  stroke(0);
  strokeWeight(3);
  fill(128);
}

void draw() {
  background(255);
  translate(width/2, height/2, 0);

  float rotationX = map(mouseY, 0, height, -PI, PI);
  float rotationY = map(mouseX, 0, width, -PI, PI);
  rotateX(rotationX);
  rotateY(rotationY);

  /* 画面中心に原点を移動してから
   さらにx、y、z軸方向に100、-100移動したところに円を描画する */

  /* 元々の原点(左上角)から見て
   (width/2+100, height/2, 0)にある円 */
  pushMatrix();
  translate(100, 0, 0);
  // 画面中心に円が向くように90度回転させる
  rotateY(HALF_PI);
  ellipse(0, 0, 100, 100);
  popMatrix();

  /* 元々の原点(左上角)から見て
   (width/2-100, height/2, 0)にある円 */
  pushMatrix();
  translate(-100, 0, 0);
  rotateY(HALF_PI);
  ellipse(0, 0, 100, 100);
  popMatrix();

  pushMatrix();
  translate(0, 100, 0);
  rotateX(HALF_PI);
  ellipse(0, 0, 100, 100);
  popMatrix();

  pushMatrix();
  translate(0, -100, 0);
  rotateX(HALF_PI);
  ellipse(0, 0, 100, 100);
  popMatrix();

  pushMatrix();
  translate(0, 0, 100);
  ellipse(0, 0, 100, 100);
  popMatrix();

  pushMatrix();
  translate(0, 0, -100);
  ellipse(0, 0, 100, 100);
  popMatrix();
}
```

## カメラ

2D空間の場合はカメラという存在は必要ありません。ピクセルで指定した位置や大きさがそのままディスプレイに映るだけだからです。ですが3D空間では、最終的にディスプレイに描かれるものはカメラによって切り取られたものです。なので、カメラによってどの位置からどこを見ているのかということを設定しないといけません。カメラの設定をしなかった場合勝手にいい感じに設定してくれますが、camera()を使って自分で設定できます。camera()は9つのパラメータを持ちます。

<dl class="p5Functions">
    <dt>[camera(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ)](p5ref:camera_.html)</dt>
    <dd>カメラの座標、カメラが注視する座標、カメラの上方向を設定</dd>
</dl>

最初の3つのパラメータ(eyeX, eyeY, eyeZ)はカメラの位置、次の3つのパラメータ(centerX, centerY, centerZ)はカメラが注視する座標、最後の3つのパラメータ(upX, upY, upZ)はカメラの上方向の向きを表します。最後の3つのパラメータについて補足します。3Dの場合、ディスプレイに描画されるのはカメラによって切り取られた空間です。このカメラは次の画像のようになっています(画像はProcessingとは違う座標系で表現されています)。

![](/images/Chapter11/camera1.jpg)

![](/images/Chapter11/camera2.jpg)

[OpenGL Programming Guide](http://www.glprogramming.com/red/chapter03.html)より引用

カメラによって切り取られた空間がディスプレイに描画されるので、カメラが傾いているとディスプレイに描画される画像も傾きます。なので、camera()の最後の3つのパラメータにはカメラの上方向の向きを指定します。カメラが傾いていない状態は(0, 1, 0)になるので、特に変わったことをしない場合は最後の3つのパラメータは(0, 1, 0)にします。

次のプログラムではカメラの座標を(camX, camY, 200)、カメラの注視点を原点(0, 0, 0)にしています。camXとcamYはキーボードの矢印キーで操作できるようにしています。

![](/images/Chapter11/sketch08.jpg)

[Chapter11/sketch08.pde](github:Chapter11/sketch08/sketch08.pde)

```processing
// カメラのx座標とy座標
float camX = 0, camY = 0;
// カメラが動くスピード
float speed = 12;

void setup() {
  size(960, 540, P3D);
}

void draw() {
  background(255);
  translate(width/2, height/2, 0);

  // カメラを動かす
  if (keyPressed) {
    if (keyCode == LEFT) camX -= speed;
    if (keyCode == RIGHT) camX += speed;
    if (keyCode == UP) camY -= speed;
    if (keyCode == DOWN) camY += speed;
  }
  // カメラの設定
  camera(camX, camY, 200, 0, 0, 0, 0, 1, 0);

  stroke(0);
  fill(220);
  box(50);

  stroke(255, 0, 0);
  line(0, 0, 0, 500, 0, 0);
  stroke(0, 255, 0);
  line(0, 0, 0, 0, 500, 0);
  stroke(0, 0, 255);
  line(0, 0, 0, 0, 0, 500);
}
```

お疲れさまでした。Chapter11はこれで終了です。
