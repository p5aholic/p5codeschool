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