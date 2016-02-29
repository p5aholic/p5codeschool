# インタラクション

インタラクションは相互作用という意味です。Processingプログラムにおけるインタラクションはマウスやキーボードからプログラムに動きを加えることを意味します。今までに見てきたmouseX、mouseYを使ったプログラムもインタラクション性のあるプログラムです。この章ではマウスやキーボードから情報を受け取りプログラムに変化を加える方法を解説していきます。

##  mousePressed、mouseButton

変数mousePressedはboolean型の変数で、マウスのいずれかのボタンが押されているときtrueになるので、マウスのボタンが押されているかどうかを判定することができます。次のプログラムではマウスのボタンが押されているとき円をランダムな位置に表示して、押されていないときは中央に表示しています。

<iframe src="/samples/tutorial/Chapter9/sketch01.html" class="sample-sketch"></iframe>

[Chapter9/sketch01.pde](github:Chapter9/sketch01/sketch01.pde)

```processing
void setup() {
  size(750, 350);
  background(255);
  noStroke();
  fill(0);
}

void draw() {
  // マウスが押されているとき
  if (mousePressed) {
    ellipse(random(width), random(height), 50, 50);
  }
  // 押されてないとき
  else {
    ellipse(width/2, height/2, 50, 50);
  }
}
```

変数mouseButtonには押されているマウスのボタンを示す定数LEFT、RIGHT、CENTERのいずれかが入っています。次のプログラムでは左ボタンが押されているとき縦棒を動かし、右ボタンが押されているとき横棒を動かし、真ん中のボタンが押されているとき縦棒と横棒の位置をリセットしています。

<iframe src="/samples/tutorial/Chapter9/sketch02.html" class="sample-sketch"></iframe>

[Chapter9/sketch02.pde](github:Chapter9/sketch02/sketch02.pde)

```processing
int x = 0; // 縦棒のx座標
int y = 0; // 横棒のy座標

void setup() {
  size(750, 350);
  strokeWeight(5);
  stroke(0);
}

void draw() {
  background(255);

  if (mousePressed) {
    // 左ボタンが押されているとき
    if (mouseButton == LEFT) {
      x += 2;
    }
    // 右ボタンが押されているとき
    else if (mouseButton == RIGHT) {
      y += 2;
    }
    // 真ん中のボタンが押されているとき
    else if (mouseButton == CENTER) {
      x = 0;
      y = 0;
    }
  }
  // 縦棒
  line(x, 0, x, height);
  // 横棒
  line(0, y, width, y);
}
```

## keyPressed、key、keyCode

キーボードが押されているかどうかは変数keyPressedで判別でき、押されたキーの情報はkeyとkeyCodeに入っています。ここで一つ新しいデータ型のchar型を紹介します。char型は１文字を扱えるデータ型で「文字」という意味の英語characterが名前の由来です。読みは「チャー」「キャラ」などが一般的です。char型の変数に文字を代入するときは、それが文字であることを示すためにシングルクオーテーションで囲みます。

[Chapter9/sketch03.pde](github:Chapter9/sketch03/sketch03.pde)

```processing
char a = 'a';
char z = 'z';
char nine = '9';
println(a);    // 出力 : a
println(z);    // 出力 : z
println(nine); // 出力 : 9
```

次のプログラムではｃキーを押しているときは水色、ｍキーを押しているときは紫色、ｙキーを押しているときは黄色の円を画面中心に表示しています。

<iframe src="/samples/tutorial/Chapter9/sketch04.html" class="sample-sketch"></iframe>

[Chapter9/sketch04.pde](github:Chapter9/sketch04/sketch04.pde)

```processing
void setup() {
  size(750, 350);
  noStroke();
}

void draw() {
  background(255);

  // キーが押されているとき
  if (keyPressed) {
    // cキーのとき
    if (key == 'c') {
      fill(0, 255, 255);
    }
    // mキーのとき
    else if (key == 'm') {
      fill(255, 0, 255);
    }
    // yキーのとき
    else if (key == 'y') {
      fill(255, 255, 0);
    }
    ellipse(width/2, height/2, 200, 200);
  }
}
```

押されたキーが矢印キーやALT、SHIFTなどの特別なキーの場合はkeyCodeに代入されています。次のプログラムでは押された矢印キーの方向に円を動かしています。 矢印キーはUP、DOWN、LEFT、RIGHTで判別できます。

<iframe src="/samples/tutorial/Chapter9/sketch05.html" class="sample-sketch"></iframe>

[Chapter9/sketch05.pde](github:Chapter9/sketch05/sketch05.pde)

```processing
int x, y; // 円の座標

void setup() {
  size(750, 350);
  noStroke();
  fill(0);
  x = width/2;
  y = height/2;
}

void draw() {
  background(255);

  if (keyPressed) {
    // ↑のとき
    if (keyCode == UP) {
      y -= 4;
    }
    // ↓のとき
    else if (keyCode == DOWN) {
      y += 4;
    }
    // ←のとき
    else if (keyCode == LEFT) {
      x -= 4;
    }
    // →のとき
    else if (keyCode == RIGHT) {
      x += 4;
    }
  }
  ellipse(x, y, 50, 50);
}
```

## mousePressed()、keyPressed()

mousePressed関数、keyPressed関数を使えばマウスやキーボードが押された時の処理をdraw関数と切り離すことができます。mousePressed関数、keyPressed関数は値を返さない関数で、setup関数やdraw関数のようにProcessingに標準で備わっている関数ですが、中身の処理が決められていません。 ですので中身を含めて私たちユーザー側が中身の処理を書き込んで再定義します。関数の再定義を書く場所どこでもいいですが、普通はdraw関数の下に書きます。

`
void mousePressed() {
  // 中身の処理
}
void keyPressed() {
  // 中身の処理
}
`

mousePressed関数はマウスが押されるたびに一回だけ実行されます。押している間ずっと実行されるわけではないことに注意してください。次のプログラムでは、マウスの位置に半透明な黒色の円を表示し続け、マウスが押されたときのみ背景を白で初期化しています。

<iframe src="/samples/tutorial/Chapter9/sketch06.html" class="sample-sketch"></iframe>

[Chapter9/sketch06.pde](github:Chapter9/sketch06/sketch06.pde)

```processing
void setup() {
  size(750, 350);
  background(255);
  noStroke();
}

void draw() {
  fill(0, 30);
  ellipse(mouseX, mouseY, 40, 40);
}

// マウスのボタンが押されると実行される関数
void mousePressed() {
  background(255);
}
```

もちろんmousePressed関数の中でも変数mouseButtonは使えます。次のプログラムでは左クリックで円を、右クリックで正方形をマウスの位置に描画しています。

<iframe src="/samples/tutorial/Chapter9/sketch07.html" class="sample-sketch"></iframe>

[Chapter9/sketch07.pde](github:Chapter9/sketch07/sketch07.pde)

```processing
void setup() {
  size(750, 350);
  background(255);
  noStroke();
  rectMode(CENTER);
}

/* draw関数には何も書かないが
 mousePressed関数を機能させるために必要 */
void draw() {
}

void mousePressed() {
  fill(random(255), random(255), random(255));
  if (mouseButton == LEFT) {
    ellipse(mouseX, mouseY, 40, 40);
  } else if (mouseButton == RIGHT) {
    rect(mouseX, mouseY, 40, 40);
  }
}
```

draw関数には何も書きませんが、mousePressed関数を機能させるために必要です。mousePressed関数やこの後解説するkeyPressed関数などはマウスやキーが押されたときに呼び出される関数です。当たり前ですが呼び出されるのはプログラム実行中のみで、プログラムが終了したあとにマウスやキーを押しても何も起こりません。draw関数はプログラムを動かし続けるために必要というわけです。

keyPressed関数もキーが押されたときに実行される関数です。ひとつ注意が必要なのは、使っているOSによってキーが押し続けられた時の挙動が異なることです。 mousePressed関数はマウスのボタンを押したままでも１度しか実行されませんが、keyPressed関数はキーを押し続けている間何度も実行されることがあります。私が使っているPCはwindows10ですが、キーを押し続けるとkeyPressed関数は何度も実行されます。次のプログラムを動かしてみて自分の環境でどうなるか確かめてみてください。キーを押し続けたとき画面の色が変わり続けたら何度も実行されていることになります。

[Chapter9/sketch08.pde](github:Chapter9/sketch08/sketch08.pde)

```processing
void setup() {
  size(750, 350);
}

void draw() {
}

void keyPressed() {
  background(random(255), random(255), random(255));
}
```

## マウスカーソル

cursor関数とnoCursor関数をここで解説しておきます。cursor関数はマウスカーソルの見た目を変更する関数で、ARROW、CROSS、HAND、MOVE、TEXT、WAITのいずれかを指定できます。noCursor関数はカーソルを非表示にする関数です。次のプログラムではkeyPressed関数内でswitch文を使って、押されたキーごとにカーソルの見た目を変えています。

[Chapter9/sketch09.pde](github:Chapter9/sketch09/sketch09.pde)

```processing
void setup() {
  size(750, 350);
}

void draw() {
  background(220);
}

void keyPressed() {
  switch(key) {
    case '1': cursor(ARROW); break;
    case '2': cursor(CROSS); break;
    case '3': cursor(HAND); break;
    case '4': cursor(MOVE); break;
    case '5': cursor(TEXT); break;
    case '6': cursor(WAIT); break;
    case '7': noCursor(); break;
  }
}
```

Chapter6でswitch文を解説したときに、switch文の条件式に使えるのは整数値のみだと言いました。このプログラムでswitch文の条件式にchar型の値が使えているのはchar型がプログラムの内部では整数値として扱われているからです。

## ループの切り替え

loop関数とnoLoop関数も解説しておきます。noLoop()を実行するとdraw関数のループが止まります。loop()を実行することでdraw関数のループを再開できます。次のプログラムでは徐々に円を大きくして、ウィンドウの高さいっぱいになったときnoLoop()を実行してdraw関数のループを止めています。マウスをクリックすると円の大きさが0に戻りループが再開します。

<iframe src="/samples/tutorial/Chapter9/sketch10.html" class="sample-sketch"></iframe>

[Chapter9/sketch10.pde](github:Chapter9/sketch10/sketch10.pde)

```processing
int diameter = 0; // 円の直径

void setup() {
  size(700, 350);
  noStroke();
}

void draw() {
  background(128);

  ellipse(width/2, height/2, diameter, diameter);
  // 直径を大きくしていく
  diameter += 4;
  // 直径がウィンドウの高さ以上になればループ終了
  if (diameter >= height) {
    noLoop();
  }
}

// マウスが押されたら直径をリセットしてループ再開
void mousePressed() {
  diameter = 0;
  loop();
}
```

お疲れさまでした。Chapter9はこれで終了です。
