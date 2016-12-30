# 3D図形とカメラとライト

3D空間に描くことができる図形と、カメラとライトの扱い方を解説します。今まではProcessingプログラムの動作をWeb上でも確認できるようにしていましたが、使っているp5.jsの3D対応が完全ではないのでこのChapterでは代わりに画像を使うことにします。

## 3D図形
3D図形を描くには、まず3D空間を扱えるレンダリングエンジンに切り替える必要があります。Processingではsize関数の第３パラメータにレンダリングエンジンを指定することができます。Processingで使えるレンダリングエンジンは４種類あるのですが、3D空間を扱うにはP3Dを指定します。

`size(960, 540, P3D);`

これで3D図形が描画できるようになりました。3D空間の座標について確認しておきます。3D空間の座標は(x, y, z)という形で表現します。原点(0, 0, 0)は2Dの場合と変わらずウィンドウの左上の角になります。z軸のプラス方向は、私たちがPC画面の真正面に座っているとして、画面から私たちの方向に向いています。逆にマイナス方向はPC画面の奥に向かっています。x軸方向の描画範囲は0～width、y軸方向の描画範囲は0~heightと決まっていますが、z軸方向の描画範囲は決まっていません。PC画面の手前と奥に無限に広がっていると考えます。

Processingで扱える3D図形は次の2つです。

<dl class="func-list">
    <dt>[box(size) || box(w, h, d)](p5ref:box_.html)</dt>
    <dd>・１辺がsizeの箱を描画する<br>・幅w、高さh、奥行きdの箱を描画する</dd>
    <dt>[sphere(r)](p5ref:sphere_.html)</dt>
    <dd>半径rの球体を描画する</dd>
</dl>

3D図形として用意されているのは箱と球体だけなんです。自由な形の3D図形を自作できる方法があるのですが、それはまた別のChapterで解説します。

ところで、box()とsphere()には座標が指定できません。「は？」ってなると思いますが、まぁそうなんです。box()とsphere()は原点にしか描画できないんです。なので、ウィンドウ内の任意の場所にbox()とsphere()を描画したい場合はtranslate()でその場所まで原点を移す必要があります。面倒臭いですが仕方ありません。次のプログラムでは２つの箱を描画しています。

![](/images/Chapter13/sketch01.jpg)

[Chapter13/sketch01.pde](github:Chapter13/sketch01/sketch01.pde)

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

![](/images/Chapter13/sketch02.jpg)

[Chapter13/sketch02.pde](github:Chapter13/sketch02/sketch02.pde)

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

左の球体に立体感が無いのがわかるかと思います。立体感が無いのはライトの設定をしていないからです。ライトの設定は後で詳しく解説します。

球体は小さな面の集まりでできています。sphereDetail()を使うと、球体をいくつの面で分割するかを変えることができます。sphereDetail(30)とした場合、球体の水平方向と垂直方向に面が30個できます。水平方向は１周360度なので12(360÷30)度間隔で面が作られ、垂直方向は上から下まで180度なので6(180÷30)度間隔で面が作られます。sphereDetail()を指定しなかった場合のデフォルト値は30です。パラメータを２つ与えると水平方向と垂直方向の面の数を別々に指定できます。次のプログラムを実行してみてください。マウスが左端に近いほど水平方向の面の数が増え、下端に近いほど垂直方向の面の数が増えます。

![](/images/Chapter13/sketch03.jpg)

[Chapter13/sketch03.pde](github:Chapter13/sketch03/sketch03.pde)

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

今までの２Ｄ空間でのrotate()による回転はz軸中心の回転でした。３Ｄ空間ではx軸中心の回転とy軸中心の回転が使えるようになります。

<dl class="func-list">
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

![](/images/Chapter13/sketch04.jpg)

[Chapter13/sketch04.pde](github:Chapter13/sketch04/sketch04.pde)

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

次のプログラムのほうが軸で回転しているのがわかりやすいです。実行してマウスを動かしてみてください。マウスの上下の動きがx軸中心の回転角度、左右の動きがy軸中心の回転角度になっています。このプログラムで６つのパラメータを持つline()を使っています。解説は後ほど。

![](/images/Chapter13/sketch05.jpg)

[Chapter13/sketch05.pde](github:Chapter13/sketch05/sketch05.pde)

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

<dl class="func-list">
    <dt>[point(x, y, z)](p5ref:point_.html)</dt>
    <dd>座標(x, y, z)に点を描画</dd>
    <dt>[line(x1, y1, z1, x2, y2, z2)](p5ref:line_.html)</dt>
    <dd>座標(x1, y1, z1)と座標(x2, y2, z2)をつなぐ線を描画</dd>
</dl>

![](/images/Chapter13/sketch06.jpg)

[Chapter13/sketch06.pde](github:Chapter13/sketch06/sketch06.pde)

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

z座標用のパラメータが用意されている２Ｄ図形はpoint()とline()だけですが、translate()を使えば他の２Ｄ図形も３Ｄ空間内に描画できます。次のプログラムでは３Ｄ空間にellipse()を使って円を描画しています。

![](/images/Chapter13/sketch07.jpg)

[Chapter13/sketch07.pde](github:Chapter13/sketch07/sketch07.pde)

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

２Ｄ空間の場合はカメラという存在は必要ありません。ピクセルで指定した位置や大きさがそのままディスプレイに映るだけだからです。ですが３Ｄ空間では、最終的にディスプレイに描かれるものはカメラによって切り取られたものです。なので、カメラによってどの位置からどこを見ているのかということを設定しないといけません。カメラの設定をしなかった場合勝手にいい感じに設定してくれますが、camera()を使って自分で設定できます。camera()は９つのパラメータを持ちます。

<dl class="func-list">
    <dt>[camera(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ)](p5ref:camera_.html)</dt>
    <dd>カメラの座標、カメラが注視する座標、カメラの上方向を設定</dd>
</dl>

最初の３つのパラメータ(eyeX, eyeY, eyeZ)はカメラの位置、次の３つのパラメータ(centerX, centerY, centerZ)はカメラが注視する座標、最後の３つのパラメータ(upX, upY, upZ)はカメラの上方向の向きを表します。最後の３つのパラメータについて補足します。３Ｄの場合、ディスプレイに描画されるのはカメラによって切り取られた空間です。このカメラは次の画像のようになっています(画像はProcessingとは違う座標系で表現されています)。

![](/images/Chapter13/camera1.jpg)

![](/images/Chapter13/camera2.jpg)

[OpenGL Programming Guide](http://www.glprogramming.com/red/chapter03.html)より引用

カメラによって切り取られた空間がディスプレイに描画されるので、カメラが傾いているとディスプレイに描画される画像も傾きます。なので、camera()の最後の３つのパラメータにはカメラの上方向の向きを指定します。カメラが傾いていない状態は(0, 1, 0)になるので、特に変わったことをしない場合は最後の３つのパラメータは(0, 1, 0)にします。

次のプログラムではカメラの座標を(camX, camY, 200)、カメラの注視点を原点(0, 0, 0)にしています。camXとcamYはキーボードの矢印キーで操作できるようにしています。

![](/images/Chapter13/sketch08.jpg)

[Chapter13/sketch08.pde](github:Chapter13/sketch08/sketch08.pde)

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

## ライト

3D空間でのライトの扱いを解説します。Processingで扱えるライトは以下の４種類です。

<dl class="func-list">
    <dt>[ambientLight(r, g, b)](p5ref:ambientLight_.html)</dt>
    <dd>環境光を3D空間に追加する</dd>
    <dt>[directionalLight(r, g, b, nx, ny, nz)](p5ref:directionalLight_.html)</dt>
    <dd>平行光源を3D空間に追加する</dd>
    <dt>[pointLight(r, g, b, x, y, z)](p5ref:pointLight_.html)</dt>
    <dd>点光源を3D空間に追加する</dd>
    <dt>[spotLight(r, g, b, x, y, z, nx, ny, nz, angle, concentration)](p5ref:spotLight_.html)</dt>
    <dd>スポットライトを3D空間に追加する</dd>
</dl>

まずは、平行光源と呼ばれる光を3D空間に追加してみます。平行光源は太陽光をシミュレーションするのに最適で、directionalLight()によって作ることができます。directionalLight()には光の色と光の射す方向を表す長さ１のベクトルを指定します。光が右から左に射す場合は４、５、６つ目のパラメータを(-1, 0, 0)とし、上から下に射す場合は(0, 1, 0)とします。次のプログラムでは、キーボードの矢印キーを押している間その矢印の方向に平行光源を置くことができます。

![](/images/Chapter13/sketch09.jpg)

[Chapter13/sketch09.pde](github:Chapter13/sketch09/sketch09.pde)

```processing
void setup() {
  size(960, 540, P3D);
  noStroke();
}

void draw() {
  background(0);

  if (keyPressed) {
    if (keyCode == RIGHT) {
      // 白色の平行光源を右に置く(光は右から左に射す)
      directionalLight(255, 255, 255, -1, 0, 0);
    }
    if (keyCode == LEFT) {
      // 白色の平行光源を左に置く(光は左から右に射す)
      directionalLight(255, 255, 255, 1, 0, 0);
    }
    if (keyCode == UP) {
      // 白色の平行光源を上に置く(光は上から下に射す)
      directionalLight(255, 255, 255, 0, 1, 0);
    }
    if (keyCode == DOWN) {
      // 白色の平行光源を下に置く(光は下から上に射す)
      directionalLight(255, 255, 255, 0, -1, 0);
    }
  }

  // 左の球体
  pushMatrix();
  translate(width/2-200, height/2, 0);
  sphere(60);
  popMatrix();
  // 真ん中の球体
  pushMatrix();
  translate(width/2, height/2, 0);
  sphere(60);
  popMatrix();
  // 右の球体
  pushMatrix();
  translate(width/2+200, height/2, 0);
  sphere(60);
  popMatrix();
}
```

矢印キーを何も押していないと白色の平面のような球体しか描画されません。これは、ライトが有効になっていなくてsphere()がデフォルトの白色で塗られているからです。directionalLight()や、これから解説する他のライトも、ライトを有効にするにはdraw()の中でずっと実行されなければいけません。

次は環境光を3D空間に追加してみます。環境光は3D空間のベースとなる光で、光の向きや光源の位置というものはありません。上のdirectinalLight()を使ったプログラムでは、球体の光が当たった部分のみ色がついて光の当たらない部分は完全に見えなくなっていました。次のプログラムでは色が(30, 30, 30)の環境光を置くことで、球体の光の当たらない部分が(30, 30, 30)で塗られています。

![](/images/Chapter13/sketch10.jpg)

[Chapter13/sketch10.pde](github:Chapter13/sketch10/sketch10.pde)

```processing
void setup() {
  size(960, 540, P3D);
  noStroke();
}

void draw() {
  background(0);

  // 環境光を置く
  ambientLight(30, 30, 30);

  if (keyPressed) {
    if (keyCode == LEFT) {
      // 白色の平行光源を右に置く
      directionalLight(255, 255, 255, 1, 0, 0);
    }
    if (keyCode == RIGHT) {
      // 白色の平行光源を左に置く
      directionalLight(255, 255, 255, -1, 0, 0);
    }
    if (keyCode == UP) {
      // 白色の平行光源を上に置く
      directionalLight(255, 255, 255, 0, 1, 0);
    }
    if (keyCode == DOWN) {
      // 白色の平行光源を下に置く
      directionalLight(255, 255, 255, 0, -1, 0);
    }
  }

  // 左の球体
  pushMatrix();
  translate(width/2-200, height/2, 0);
  sphere(60);
  popMatrix();
  // 真ん中の球体
  pushMatrix();
  translate(width/2, height/2, 0);
  sphere(60);
  popMatrix();
  // 右の球体
  pushMatrix();
  translate(width/2+200, height/2, 0);
  sphere(60);
  popMatrix();
}
```

点光源は豆電球のようなもので、全方向に光を放つライトです。点光源はpointLight()で作ることができ、パラメータには色と光源の座標を指定します。 次のプログラムではマウスの位置に点光源を置いています。

![](/images/Chapter13/sketch11.jpg)

[Chapter13/sketch11.pde](github:Chapter13/sketch11/sketch11.pde)

```processing
void setup() {
  size(960, 540, P3D);
  noStroke();
}

void draw() {
  background(0);

  // 座標(mouseX, mouseY, 100)に白色のライトを設置
  pointLight(255, 255, 255, mouseX, mouseY, 100);

  // 左の球体
  pushMatrix();
  translate(width/2-200, height/2, 0);
  sphere(60);
  popMatrix();
  // 真ん中の球体
  pushMatrix();
  translate(width/2, height/2, 0);
  sphere(60);
  popMatrix();
  // 右の球体
  pushMatrix();
  translate(width/2+200, height/2, 0);
  sphere(60);
  popMatrix();
}
```

スポットライトはspotLight()で作ることができ、１１個のパラメータを持ちます。最初の３つのパラメータが光の色、次の３つのパラメータが光源の座標、その次の３つのパラメータが光の射す方向(directionalLightの４，５，６つ目のパラメータと同じ)です。１０個目のパラメータはスポットライトの開き具合を角度(ラジアン)で指定します。スポットライトが大きく開いているほど照らされる範囲が広くなります。１１個目のパラメータには、スポットライトの周辺の光の強さがどれだけ減衰するかを指定します。0を指定すると、スポットライトから出た光は、どれだけ真中からそれていても減衰しません。0より大きい値を指定すると、スポットライトの真ん中から周辺に向かってそれるほど、指定した値に従って光の強さが減衰していきます。次のプログラムでは、白色のスポットライトを座標(width/2, 0, 0)に置いて下向きに光が射すようにしています。マウスが左端にあるほどスポットライトが開く角度が大きくなり、下端にあるほどスポットライトの真ん中から周辺にそれた光の強さが減衰します。

![](/images/Chapter13/sketch12.jpg)

[Chapter13/sketch12.pde](github:Chapter13/sketch12/sketch12.pde)

```processing
void setup() {
  size(960, 540, P3D);
  noStroke();
}

void draw() {
  background(0);

  // マウスのx座標をスポットライトが開く角度に変換
  float angle = map(mouseX, 0, width, PI/8, PI/2);
  // マウスのy座標を光の集まり度合いに変換
  float concentration = map(mouseY, 0, height, 0, 20);

  // 環境光を追加
  ambientLight(30, 30, 30);
  // スポットライトを追加
  spotLight(255, 255, 255,         // 色
            width/2, 0, 0,         // 光源の座標
            0, 1, 0,               // 光が射す方向
            angle, concentration); // 角度と集まり度合い

  // 左の箱
  pushMatrix();
  translate(width/2-200, height/2, 0);
  rotateZ(radians(30));
  box(150, 30, 30);
  popMatrix();
  // 真ん中の球体
  pushMatrix();
  translate(width/2, height/2, 0);
  sphere(60);
  popMatrix();
  // 右の箱
  pushMatrix();
  translate(width/2+200, height/2, 0);
  rotateZ(radians(-30));
  box(150, 30, 30);
  popMatrix();
}
```

お疲れさまでした。Chapter13はこれで終了です。
