# 変数と演算

Chapter4では、プログラミングの基礎的な概念である変数と演算について解説していきます。退屈な内容ですが、重要なのでちょっと我慢して習得してください。

## 変数を使うメリット

変数を使うと値をコンピュータのメモリ上に保存しておくことができます。変数はプログラム内で使いまわすことができて、値の変更も簡単にできます。下のプログラムでは変数を使わないで3つの正円を描いています。この3つの円を直径80pxから直径150pxに変えたくなったとすると、3つのellipse()の3つ目と4つ目のパラメータを変えることになるので、合計6つのパラメータを変えることになります。ちょっと面倒くさいですね。6つならまだしも、10個20個となると相当面倒くさいです。変数を使うとこの面倒くささから解放されます。

![](/images/Chapter4/sketch01.jpg)

[Chapter4/sketch01.pde](github:Chapter4/sketch01/sketch01.pde)

```processing
size(750, 175);
background(255);

noStroke();
fill(30);
ellipse(125, 88, 80, 80);
ellipse(375, 88, 80, 80);
ellipse(625, 88, 80, 80);
```

上のプログラムを変数を使って書き換えたのが下のプログラムです。初期値80の*diameter*（直径という意味の英語）という変数を作って*ellipse()*の幅と高さに使用しています。

![](/images/Chapter4/sketch02.jpg)

[Chapter4/sketch02.pde](github:Chapter4/sketch02/sketch02.pde)

```processing
size(750, 175);
background(255);

// 変数diameterを初期値80で作成
int diameter = 80;

noStroke();
fill(30);
ellipse(125, 88, diameter, diameter);
ellipse(375, 88, diameter, diameter);
ellipse(625, 88, diameter, diameter);
```

試しに

`int diameter = 150;`

と変更してみてください。全ての円の直径が150pxに変わっているのがわかるかと思います。

![](/images/Chapter4/sketch03.jpg)

[Chapter4/sketch03.pde](github:Chapter4/sketch03/sketch03.pde)

```processing
size(750, 175);
background(255);

// 変数diameterを初期値150で作成
int diameter = 150;

noStroke();
fill(30);
ellipse(125, 88, diameter, diameter);
ellipse(375, 88, diameter, diameter);
ellipse(625, 88, diameter, diameter);
```

## 変数の作成

変数を作るときは

`
データ型 変数名;
(例) int diameter;
`

とします。これを変数の宣言と呼びます。データ型とはその変数が扱う値の種類のことで、*int*（integerの略、「イント」と呼ぶのが一般的）は整数を意味するデータ型です。変数名はその変数の意味が伝わり、かつ長すぎないものを選ぶようにしましょう。直径を意味する変数ならばdよりもdiameterとしたほうがいいでしょう。変数に適切な名前を付けていると自分が後々プログラムを見直したときに思い出しやすくなります。また、いずれ自分が作ったプログラムをネット上で公開することもあるでしょう。そのとき自分のプログラムを見た他の人にわかりやすくするためにも重要です。

変数に値を入れるときは

`
変数名 = 値;
(例) diameter = 80;
`

とします。これを値の代入と呼びます。また、以下のように変数の宣言と値の代入を一度に行うこともできます。この書き方を特別に初期化と呼んだりします。

`
データ型 変数名 = 値;
(例) int diameter = 80;
`

変数にデータ型を指定する必要があるのは宣言するときの一度だけです。データ型の付いた変数は新しい変数の宣言とみなされます。同じ名前の変数を2回宣言するとエラーが出ます。

[Chapter4/sketch04.pde](github:Chapter4/sketch04/sketch04.pde)

```processing
int diameter = 80;
/* 下の画面に
「変数diameterが重複しています」
というエラーが出る */
int diameter = 150;
```

データ型が同じであれば次のようにして複数の変数の宣言と代入を行うこともできます。

[Chapter4/sketch05.pde](github:Chapter4/sketch05/sketch05.pde)

```processing
int a, b, c, d;
a = 1;
b = 2;
c = 3;
d = 4;

int x = 10, y = 20, z = 30;
```

変数名には命名規則があります。まず、変数名の先頭の文字は必ず数字以外の文字でなければいけません。

`int 8a = 10; // エラー`

また、変数名には予約語を使ってはいけません。予約語はProcessingプログラムが特別な扱いをする文字のことで、例えば*int*も予約語の一つです。

`int int = 10; // エラー`

予約語はこの先のChapterで色々登場しますが、とりあえずProcessingエディター上で文字の色が変わる単語は変数名には使わないでください。

これらは守らないとエラーが出る命名規則ですが、守らなくてもエラーは出ないけど守ることが推奨される規則もあります。例えば、複数の単語からなる変数名を使う場合は1つ目の単語は小文字から始め、2つ目以降の単語は大文字で始めるキャメルケースと呼ばれる規則があります。例えば*ellipse()*で描く円をボールに見立て、幅と高さをボールのサイズとすると、変数*diameter*は*ballsize*という変数名でも良さそうです。

`int ballsize = 80;`

こう書いてもエラーはもちろん出ませんが、命名規則を守るとすると次のように書いたほうがいいです。

`int ballSize = 80;`

*ballsize*はballとsizeの複数の単語からなる変数名なので、1つ目の単語は小文字から始め、2つ目の単語は大文字で始めています。ちなみに*noStroke()*や*noFill()*のように、Processingは変数や関数の命名にキャメルケースを使用しています。
もちろん命名規則はこれ以外にもあるので好きなようにしてください。このサイトではキャメルケースを使用しています。

## 色々なデータ型

データ型には他にもいくつか種類があります。ここでは、浮動小数点を扱う*float*と色を扱う*color*を紹介します。浮動小数点は小数点を扱えるデータ型です。浮動小数点は英語でfloating pointなので略してfloat、読みはフロートが一般的です。

[Chapter4/sketch06.pde](github:Chapter4/sketch06/sketch06.pde)

```processing
float a = 0.05;
float b = 12.3;
```

色も変数として保存しておくことができます。データ型は*color*で、値を*color()*で作って代入します。*color()*のパラメータには、*fill()*、*stroke()*と同じように1～4つのパラメータを与えることができます。作った*color*型変数は*background()*や、*fill()*、*stroke()*にパラメータとして渡すことができます。

![](/images/Chapter4/sketch07.jpg)

[Chapter4/sketch07.pde](github:Chapter4/sketch07/sketch07.pde)

```processing
size(750, 175);
background(255);

color red = color(200, 30, 30);
color green = color(30, 200, 30);
color blue = color(30, 30, 200);

noStroke();
// redを使用
fill(red);
ellipse(125, 88, 120, 120);
// greenを使用
fill(green);
ellipse(375, 88, 120, 120);
// blueを使用
fill(blue);
ellipse(625, 88, 120, 120);
```

## 算術演算

算術演算子というものを使うとプログラム中で計算をすることができます。代表的な算術演算子を紹介します。

<dl class="p5Functions">
  <dt>+</dt>
  <dd>足し算をする</dd>
  <dt>-</dt>
  <dd>引き算をする</dd>
  <dt>*</dt>
  <dd>掛け算をする</dd>
  <dt>/</dt>
  <dd>割り算をする</dd>
  <dt>%</dt>
  <dd>余りを求める</dd>
</dl>

![](/images/Chapter4/sketch08.jpg)

[Chapter4/sketch08.pde](github:Chapter4/sketch08/sketch08.pde)

```processing
size(750, 175);
background(255);

color red = color(200, 30, 30);
color green = color(30, 200, 30);
color blue = color(30, 30, 200);
int diameter = 80;

noStroke();
// 赤色の円
fill(red);
ellipse(width/2-1.5*diameter, height/2, 2*diameter, 2*diameter);
// 緑色の円
fill(green);
ellipse(width/2, height/2, diameter, diameter);
// 青色の円
fill(blue);
ellipse(width/2+1.5*diameter, height/2, 2*diameter, 2*diameter);
```

プログラム中に*width*と*height*という変数を使いました。*width*と*height*はProcessing側が最初から用意してくれている変数で、*width*にはウィンドウの幅、*height*にはウィンドウの高さの値が入っています。ウィンドウの中心は*(width/2, height/2)*で表現できます。

演算子には優先順位が決められています。掛け算と割り算は足し算と引き算より優先して計算されます。()で囲んだ計算は最も優先順位が高くなります。代入*=*は最も優先順位が低い演算子なので、全ての計算が終わってから代入が行われます。下のコードでは*println()*を使って計算結果をコンソール画面に出力しています。

[Chapter4/sketch09.pde](github:Chapter4/sketch09/sketch09.pde)

```processing
int x = 5 + 10 * 2;
println(x); // 25を出力
int y = (5 + 10) * 2;
println(y); // 30を出力
```

代入についてもう少し詳しく解説していきます。 とりあえず、下のプログラムを見てください。

[Chapter4/sketch10.pde](github:Chapter4/sketch10/sketch10.pde)

```processing
int x = 100;
x = x + 100;
println(x); // 200と出力
```

*x = x + 100*という計算をしています。数学ではこんな式ありえませんが、プログラミングで行う計算は数学とは似て非なるものです。数学では右辺のxを左辺に移項して0 = 100となってしまいますが、プログラムは移項などしません。*x = x + 100*を分解して考ると、まず、*=* より*+*のほうが演算子としての優先順位が高いので*x + 100*が計算されます。すると左辺は200になります。残る演算子は*=*だけなので*x = 200*が実行されて、*x*に200が代入されるわけです。

計算と代入を一度に行ってくれる便利な演算子も紹介しておきます。

<dl class="p5Functions">
  <dt>+=</dt>
  <dd>足し算をして代入</dd>
  <dt>-=</dt>
  <dd>引き算をして代入</dd>
  <dt>*=</dt>
  <dd>掛け算をして代入</dd>
  <dt>/=</dt>
  <dd>割り算をして代入</dd>
  <dt>%=</dt>
  <dd>余りを計算して代入</dd>
  <dt>++</dt>
  <dd>１を加えて代入</dd>
  <dt>--</dt>
  <dd>１を引いて代入</dd>
</dl>

[Chapter4/sketch11.pde](github:Chapter4/sketch11/sketch11.pde)

```processing
int x = 10;
x += 10;    // x = x + 10と同じ
println(x); // 20と出力
x -= 5;     // x = x - 5と同じ
println(x); // 15と出力
x *= 2;     // x = x * 2 と同じ
println(x); // 30と出力
x /= 10;    // x = x / 10 と同じ
println(x); // 3と出力
x %= 2;     // x = x % 2 と同じ
println(x); // 1と出力
x++;        // x = x + 1 と同じ
println(x); // 2と出力
x--;        // x = x - 1 と同じ
println(x); // 1と出力
```

## データ型の区別

計算をするときはその計算結果がどんなデータ型になるか、また計算結果をどんなデータ型の変数に代入するか注意が必要です。次のような代入を行うと「float型からint型に変換できません」という意味のエラーが出ます。

`int a = 1.0/2.0;`

*float*型の計算結果を*int*型の変数に代入しようとしているからです。このように、データ型は厳密に区別しなければいけません。どのような計算がどんなデータ型になるのか詳しく見ていきます。

*int*型どうしの計算結果は*int*型になり、*float*型が１つでも混ざると計算結果は*float*型になります。

[Chapter4/sketch12.pde](github:Chapter4/sketch12/sketch12.pde)

```processing
println(3/2);     // 1と出力
println(3.0/2);   // 1.5と出力
println(3/2.0);   // 1.5と出力
println(3.0/2.0); // 1.5と出力
```

*float*型変数に*int*型の値を代入することはできますが、*int*型変数に*float*型の値を代入することはできません。

[Chapter4/sketch13.pde](github:Chapter4/sketch13/sketch13.pde)

```processing
int a = 3/2;
println(a);        // １と出力
float b = 3/2;
println(b);        // 1.0と出力
float c = 3.0/2.0;
println(c);        // 1.5と出力
int d = 3.0/2.0;   // エラー
```

3/2は*int*型どうしの計算なので結果は1になります。それを*int*型変数*a*に代入するので*a*は1を表します。これを*float*型変数*b*に代入したとき*b*は1.0を表します。*float*型変数には*int*型の数値を代入することができますが、代入するときに*float*型に合わせて.0が付け加えられるからです。*b*が1.5にならないのは、3/2を計算するときにfloat型に合わせられるのではなくて、3/2の計算結果である1が代入時に*float*型に合わせられるからです。3.0/2.0は*float*型の混じった計算なので結果は1.5になります。それを*float*型変数の*c*に代入するので当然*c*は1.5を表します。*int*型の変数には*float*型の数値は代入できないので最後の行はエラーになります。

## データの変換

*int*型変数に*float*型の数値は代入できません。でも、*float*型の数値が混じった計算の結果を*int*型の変数に代入したいということはよくあることです。例えば税抜き価格から税込み価格を計算するときなどがそういう場合です。そういうときはデータを変換する必要があります。データはキャストという機能を使って以下のように変換することができます。

`
(変換する型)値
(変換する型)変数
`

次のサンプルはキャストを用いて消費税を計算するプログラムです。

[Chapter4/sketch14.pde](github:Chapter4/sketch14/sketch14.pde)

```processing
float rate = 0.08; // 消費税
int price1 = 1000; // 税抜き価格
int price2;        // 税込み価格

// (int)を用いて型変換
price2 = price1 + (int)(price1 * rate);
println(price2);

// ダメな例
// price2 = price1 + (int)price1 * rate;
// price2 = price1 + price1 * (int)rate;
```

価格に小数点は付かないので価格を表す変数はint型にしています。<br>
税込み価格 = 税抜き価格 + 税抜き価格 × 消費税<br>
となりますが、*int*型変数の税込み価格に*float*型の計算結果は普通では代入できません。上のプログラムではprice1 \* rateの計算結果を*int*型に変換することで代入が正しく行われます。キャストを用いてデータを変換する場所に注意が必要です。ダメな例の1つ目は元々*int*型の*price1*を*int*型に変換しているだけなので意味がないです。ダメな例の2つ目は0.08を*int*型に変換しているのでprice1 \* 0を計算することになります。

与えられた数値を*int*型に変換する*int()*や*float*型に変換する*float()*を使ってもキャストと同じことができます。次のプログラムは上のプログラムを*int()*を使って書き換えたものです。

[Chapter4/sketch15.pde](github:Chapter4/sketch15/sketch15.pde)

```processing
float rate = 0.08;
int price1 = 1000;
int price2;

// int()を用いて型変換
price2 = price1 + int(price1 * rate);
println(price2);

// ダメな例
// price2 = price1 + int(price1) * rate;
// price2 = price1 + price1 * int(rate);
```

## 定数

定数と呼ばれるものについて解説します。今すぐに必要となる知識ではありませんが、知ってるに越したことはないので一応目を通しておいてください。

ラジアンを文字であらわす*PI*、*HALF_PI*、*ellipseMode()*のパラメータの*RADIUS*、*strokeCap()*のパラメータの*SQUARE*など、今まで大文字で書いてProcessingエディターで薄い緑色になる単語は全て定数と呼ばれます。定数は、値の変更をできなくして読み出し専用にした変数です。定数の初期化は

`
final データ型 変数名(大文字) = 値;
(例) final int SIZE = 80;
`

とします。変数の前には修飾子と呼ばれるものを書くことができて、その変数の性質を変えることができます。*final*も修飾子の一つで、*final*の付いた変数は値を変更することができなくなります。次のプログラムを実行すると「final変数のSIZEは値を変更できません」という意味のエラーが出ます。

[Chapter4/sketch16.pde](github:Chapter4/sketch16/sketch16.pde)

```processing
final int SIZE = 80;
SIZE = 150; // エラー
```

守ることが推奨されている命名規則の１つとして、*final*修飾子を付けた変数の変数名は全て大文字にするというものがあります。普通の変数と区別するためです。

実は、私たちが作るProcessingプログラムには土台となるプログラムがあります。その土台のプログラムのおかげで*line()*と書くだけで線を描けたり、色々面倒な処理をこちら側で書かなくて済んだりするわけです。*PI*や*RADIUS*などの定数はその土台のプログラムの中で初期化されています。試しに*println()*で定数の中身を確認すると次のようになっています。

[Chapter4/sketch17.pde](github:Chapter4/sketch17/sketch17.pde)

```processing
println(PI);      // 3.1415927
println(SQUARE);  // 1
println(PROJECT); // 4
println(ROUND);   // 2
println(RGB);     // 1
println(HSB);     // 3
```

このことから*HSB*などの定数は

`final int HSB = 3;`

などのように初期化されていることが想像できますし、実際そうなってます。次の例では*colorMode()*の１つ目のパラメータを*HSB*とせずに３としていますが、ちゃんと実行されます。

[Chapter4/sketch18.pde](github:Chapter4/sketch18/sketch18.pde)

```processing
size(200, 200);
colorMode(3, 360, 100, 100);
background(180, 80, 60);
```

定数が無くても数値をそのままパラメータにすればいいのですが、いちいち私たちユーザー側がモードに対応する数値を覚えることになり厄介です。そのためProcessingの開発者側が土台のプログラムに定数を用意してくれていて、ユーザーは数値を覚えなくても、HSBカラーモードにしたければ*colorMode(HSB)*と書けばいいようになっています。Processing開発者側が定数に*final*修飾子を付けて値の変更をできなくするのは、私たちユーザー側が勝手に定数の中身を書き換えてしまわないためです。

お疲れさまでした。退屈な内容ではありましたがこの先避けて通れない内容なのでしっかり習得しておいてください。
