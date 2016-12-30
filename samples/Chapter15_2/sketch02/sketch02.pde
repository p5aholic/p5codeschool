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