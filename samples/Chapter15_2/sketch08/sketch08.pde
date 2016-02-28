Ball b1, b2, b3;

void setup() {
  size(750, 350);
  b1 = new Ball();
  b2 = new Ball();
  b3 = new Ball();
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
  // b3を描画
  fill(b3.c);
  ellipse(b3.x, b3.y, b3.radius*2, b3.radius*2);
}

class Ball {
  // フィールド
  float x, y;
  int radius = 50;    // デフォルト値：50
  color c = color(0); // デフォルト値：黒

  // コンストラクタ
  Ball() {
    // フィールドの代入処理
    radius = (int)random(25, 50);
    x = random(radius, width-radius);
    y = random(radius, height-radius);
  }
}