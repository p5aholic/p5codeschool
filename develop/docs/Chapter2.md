# 図形の描画

このChapterではProcessingで描くことのできる基本的な図形の描画方法を解説していきます。

## 図形を描く

Processingで描くことのできる基本図形は以下の7つです。

<dl class="p5-functions">
  <dt>[point(x, y)](p5ref:point_.html)</dt>
  <dd>座標(x, y)に点を描く</dd>

  <dt>[line(x1, y1, x2, y2)](p5ref:line_.html)</dt>
  <dd>座標(x1, y1)から(x2, y2)まで線を引く</dd>

  <dt>[ellipse(x, y, w, h)](p5ref:ellipse_.html)</dt>
  <dd>座標(x, y)に幅ｗ高さｈの楕円を描く</dd>

  <dt>[rect(x, y, w, h)](p5ref:rect_.html)</dt>
  <dd>座標(x, y)に幅ｗ高さｈの長方形を描く</dd>

  <dt>[quad(x1, y1, x2, y2, x3, y3, x4, y4)](p5ref:quad_.html)</dt>
  <dd>座標(x1, y1)、(x2, y2)、(x3, y3)、(x4, y4)を頂点とした四角形を描く</dd>

  <dt>[triangle(x1, y1, x2, y2, x3, y3)](p5ref:triangle_.html)</dt>
  <dd>座標(x1, y1)、(x2, y2)、(x3, y3)を頂点とした三角形を描く</dd>

  <dt>[arc(x, y, w, h, start, stop)](p5ref:arc_.html)</dt>
  <dd>座標(x, y)に幅ｗ高さｈ、角度startからstopまでの弧を描く</dd>
</dl>

<img src="/images/Chapter2/shapes.jpg" width="700" height="680">

Processingの座標の取り方は数学などで一般的に使われるものとは少し違います。Processingではウィンドウの左上の角を原点とし、xのプラス方向を右に、yのプラス方向を下にします。*size(700, 300)*を指定した場合のウィンドウの角の座標は次のようになります。

<img src="/images/Chapter2/coordinate.jpg" width="700" height="300">

最初は違和感を感じますがすぐに慣れるでしょう。実際に図形を描いてみます。

![](/images/Chapter2/sketch01.jpg)

[Chapter2/sketch01.pde](github:Chapter2/sketch01/sketch01.pde)

```processing
size(960, 540);
background(220);
// 点を描く
point(100, 270);
// 線を描く
line(150, 200, 200, 340);
// 円を描く
ellipse(350, 270, 80, 140);
// 長方形描く
rect(450, 230, 80, 80);
// 四角形を描く
quad(600, 250, 680, 200, 700, 280, 620, 330);
// 三角形を描く
triangle(800, 250, 880, 190, 830, 320);
```

*ellipse()*に指定する座標は円の中心座標です。対して、*rect()*で指定する座標は長方形の左上の角の座標になります。*ellipse*は楕円を意味する英語です。正円を作るには*ellipse()*に同じ幅と高さを指定します。

*arc()*関数を使ってみます。*arc()*関数の5つ目と6つ目のパラメータは孤を描き始める角度と描き終わる角度です。2つの角度はどちらも0度から数えた角度です。数学では角度は反時計回りで増えていきますが、Processingでは時計回りに増えます。また、単位は度ではなくラジアンで指定します。ラジアンについて詳しく解説すると長くなっちゃうのでここでは止めておきます。簡単に説明しておくと、下の画像にもある通り、0度が0ラジアン、45度が約
0.79ラジアン、90度が約1.57ラジアンという感じになっています。Processingでコードを書くときにこのラジアンの数値をそのまま使うことはまずないでしょう。代わりに他の方法で角度を表現します。下の画像は度(Degrees)とラジアン(Radians)の数値の対応を示しています。

<img src="/images/Chapter2/rad_deg.jpg" width="700" height="350">

下のサンプルコードは角度を指定する３つの方法を示しています。１つ目の*arc()*はラジアンの数値をそのまま使う方法。２つ目の*arc()*は定数と呼ばれる文字を使う方法です。*QUARTER_PI*と書くとラジアンの数値で0.79を指定するのと同じことになります。他に、90度を表す*HALF_PI*、180度を表す*PI*、360度を表す*TWO_PI*があります。このように、Processingではわかりにくい数値を文字として表現できることがあります。なぜこのような文字のことを定数と呼ぶのかはChapter4で解説しています。６つ目のパラメータを指定するときにちょっとした計算をしています。*TWO_PI*から*QUARTER_PI*を引き算することで315度を表しています。このような計算についても詳しくはChapter4で解説します。３つ目の*arc()*には度数をラジアンに変換してくれる*radians()*を使っています。*radians()*に度数を与えると対応するラジアンを返してくれます。

![](/images/Chapter2/sketch02.jpg)

[Chapter2/sketch02.pde](github:Chapter2/sketch02/sketch02.pde)

```processing
size(960, 540);
background(220);

// ラジアンをそのままの数値で指定
arc(180, 270, 200, 200, 0.79, 5.50);
// ラジアンを定数で指定
arc(480, 270, 200, 200, QUARTER_PI, TWO_PI-QUARTER_PI);
// ラジアンを関数で指定
arc(780, 270, 200, 200, radians(45), radians(315));
```

*arc()*には７つ目のパラメータがあります。このパラメータには*PIE*、*OPEN*、*CHORD*のいずれかを指定します。文字の説明を読むより見たほうが早いので次のサンプルで確認してください。７つ目のパラメータを指定しなかった場合と指定した場合の３つを比較しています。

![](/images/Chapter2/sketch03.jpg)

[Chapter2/sketch03.pde](github:Chapter2/sketch03/sketch03.pde)

```processing
size(960, 540);
background(220);

arc(120, 270, 200, 200, radians(45), radians(315));
arc(360, 270, 200, 200, radians(45), radians(315), PIE);
arc(600, 270, 200, 200, radians(45), radians(315), OPEN);
arc(840, 270, 200, 200, radians(45), radians(315), CHORD);
```

*rect()*に追加のパラメータを与えることで角丸の長方形を作ることができます。パラメータは角丸の半径を表します。５つ目のパラメータを与えた場合はすべての角が同じ半径の角丸に、５、６、７、８つ目のパラメータを与えると左上の角から時計回りに角丸の半径を指定できます。

![](/images/Chapter2/sketch04.jpg)

[Chapter2/sketch04.pde](github:Chapter2/sketch04/sketch04.pde)

```processing
size(960, 540);
background(220);

// 全ての角が半径30pxの角丸にする
rect(240, 170, 200, 200, 30);
// 時計回りに、半径10px、20px、30px、40pxの角丸にする
rect(520, 170, 200, 200, 10, 20, 30, 40);
```

## 図形に色を塗る

図形に色を指定する方法を見ていきましょう。色の表現方法はChapter3で詳しく解説します。ここでは黒～白の色に限定して話していきます。図形には枠線の色と内側の塗りつぶしの色を指定することができます。以下の４つの関数で色の指定ができます。*fill()*と*stroke()*のパラメータには*background()*と同じく0～255の数値を与えます。*noFill()*と*noStroke()*はパラメータを持たない関数です。

<dl class="p5-functions">
  <dt>[fill()](p5ref:fill_.html)</dt>
  <dd>図形の内側の色を指定する</dd>

  <dt>[noFill()](p5ref:noFill_.html)</dt>
  <dd>図形の内側の色を無くす</dd>

  <dt>[stroke()](p5ref:stroke_.html)</dt>
  <dd>図形の枠線の色を指定する</dd>

  <dt>[noStroke()](p5ref:noStroke_.html)</dt>
  <dd>図形の枠線を無くす</dd>
</dl>

*point()*と*line()*には内側というものがありません。色を指定する場合は*stroke()*だけでいいです。

![](/images/Chapter2/sketch05.jpg)

[Chapter2/sketch05.pde](github:Chapter2/sketch05/sketch05.pde)

```processing
size(960, 540);
background(220);

// 線：枠線のみ指定
stroke(30);
line(100, 100, 200, 440);

// 正円：枠線と内側を指定
stroke(30);
fill(255);
ellipse(300, 270, 200, 200);

// 正方形：枠線のみ指定
stroke(30);
noFill();
rect(420, 170, 200, 200);

// 正方形：内側のみ指定
noStroke();
fill(255);
rect(520, 200, 140, 140);
```

*noFill()*が指定された図形の内側の色は背景色と同じになります。また、図形が重なった場合は後から描かれた図形が前に描かれた図形の上に描かれます。

*fill()*、*stroke()*、*noFill()*、*noStroke()*や、後述する*strokeWeight()*、*strokeCap()*、*strokeJoin()*、*ellipseMode()*、*rectMode()*などは 一度指定するとそれ以降の図形にも適用されます。図形ごとにスタイルを切り替えたい場合は、今何が適用されているかに注意しましょう。

## 枠線の見た目を変える

枠線の見た目を変える３種類の関数を見ていきましょう。

<dl class="p5-functions">
  <dt>[strokeWeight()](p5ref:strokeWeight_.html)</dt>
  <dd>枠線の太さを変える</dd>

  <dt>[strokeJoin()](p5ref:strokeJoin_.html)</dt>
  <dd>枠線の角の形を変える</dd>

  <dt>[strokeCap()](p5ref:strokeCap_.html)</dt>
  <dd>枠線の両端の形を変える</dd>
</dl>

*strokeWeight()*は枠線の太さを変える関数です。*strokeJoin()*は枠線の角の形を変える関数で、パラメータに*MITER*、*BEVEL*、*ROUND*の３種類を指定することができます。*MITER*は角を尖った形に、*BEVEL*は角を切り取った形に、*ROUND*は角を丸い形にできます。*MITER*がデフォルトの設定です。

![](/images/Chapter2/sketch06.jpg)

[Chapter2/sketch06.pde](github:Chapter2/sketch06/sketch06.pde)

```processing
size(750, 200);
background(255);

// 枠線の太さを20pxにする
strokeWeight(20);
stroke(30);
fill(180);

// ３種類のstrokeJoin()

/* MITERを指定
MITERがデフォルトなので
指定しなくても変わらない */
strokeJoin(MITER);
rect(75, 50, 100, 100);

// BEVELを指定
strokeJoin(BEVEL);
rect(325, 50, 100, 100);

// ROUNDを指定
strokeJoin(ROUND);
rect(575, 50, 100, 100);
```

*strokeCap()*は枠線の両端の形を変える関数で、パラメータに*ROUND*、*PROJECT*、*SQUARE*の３種類を指定することができます。*ROUND*は両端を丸い形に、*PROJECT*は両端を尖った形に、*SQUARE*は両端を尖った形にした上で*strokeWeight()*による両端のはみ出しを消します。*ROUND*がデフォルトの設定です。以下のコードでは比較のために太さ20pxの線の左横と下に太さ1pxの線を描いています。

![](/images/Chapter2/sketch07.jpg)

[Chapter2/sketch07.pde](github:Chapter2/sketch07/sketch07.pde)

```processing
size(750, 200);
background(255);

stroke(30);

// ３種類のstrokeCap()

/* ROUNDを指定
ROUNDがデフォルトなので
指定しなくても変わらない */
strokeWeight(20);
strokeCap(ROUND);
// 高さ100px太さ20pxの線
line(125, 50, 125, 150);
strokeWeight(1);
// 高さ100px太さ1pxの線
line(95, 50, 95, 150);
// 幅20px太さ1pxの線
line(115, 180, 135, 180);

// PROJECTを指定
strokeWeight(20);
strokeCap(PROJECT);
// 高さ100px太さ20pxの線
line(375, 50, 375, 150);
strokeWeight(1);
// 高さ100px太さ1pxの線
line(345, 50, 345, 150);
// 幅20px太さ1pxの線
line(365, 180, 385, 180);

// SQUAREを指定
strokeWeight(20);
strokeCap(SQUARE);
// 高さ100px太さ20pxの線
line(625, 50, 625, 150);
strokeWeight(1);
// 高さ100px太さ1pxの線
line(595, 50, 595, 150);
// 幅20px太さ1pxの線
line(615, 180, 635, 180);
```

*line()*に*strokeWeight()*を指定すると線の両端にも太さが割り振られます。高さが100pxの線に20pxの枠線の太さを指定すると、両端に10pxずつ太さが割り振られて、全体で120pxの線になります。*strokeCap(SQUARE)*は両端に割り振られる太さを無くす設定です。

## ellipse()とrect()の描画方法を変更する

*ellipseMode()*と*rectMode()*を使うと*ellipse()*と*rect()*に指定するパラメータの挙動を変えることができます。*ellipseMode()*には*CENTER*、*RADIUS*、*CORNER*、*CORNERS*のいずれかを指定することができます。*CENTER*がデフォルトです。それぞれを指定した場合の挙動は以下の通りです。

<img src="/images/Chapter2/ellipseMode.jpg" width="700" height="600">

![](/images/Chapter2/sketch08.jpg)

[Chapter2/sketch08.pde](github:Chapter2/sketch08/sketch08.pde)

```processing
size(960, 540);
background(220);

noStroke();
fill(0);
ellipseMode(RADIUS);
ellipse(480, 270, 150, 150); // 黒色の円

fill(255);
ellipseMode(CENTER);
ellipse(480, 270, 150, 150); // 白色の円

fill(60);
ellipseMode(CORNER);
ellipse(480, 270, 150, 150); // 暗い灰色の円

fill(195);
ellipseMode(CORNERS);
ellipse(0, 0, 300, 150);     // 明るい灰色の円
```

*rectMode()*には*CORNER*、*CORNERS*、*CENTER*のいずれかを指定することができます。*CORNER*がデフォルトです。それぞれを指定した場合の挙動は以下の通りです。

<img src="/images/Chapter2/rectMode.jpg" width="700" height="600">

![](/images/Chapter2/sketch09.jpg)

[Chapter2/sketch09.pde](github:Chapter2/sketch09/sketch09.pde)

```processing
size(960, 540);
background(220);

noStroke();
fill(0);
rectMode(CENTER);
rect(380, 170, 200, 200); // 黒色の円

fill(255);
rectMode(CORNER);
rect(380, 170, 200, 200); // 白色の円

fill(160);
rectMode(CORNERS);
rect(0, 0, 250, 150);     // 灰色の円
```

お疲れさまでした。Chapter2はこれで終了です。
