Ball b1 = new Ball(); // Ball型のオブジェクトを生成
Ball b2 = new Ball(); // Ball型のオブジェクトを生成

void setup() {
  size(750, 350);

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