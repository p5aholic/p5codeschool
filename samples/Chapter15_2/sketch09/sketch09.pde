Ball b1, b2;

void setup() {
  size(750, 350);
  b1 = new Ball();
  b2 = new Ball();
}

void draw() {
  background(255);

  // b1を動かす
  b1.x += b1.vx;
  b1.y += b1.vy;
  // b1の壁との衝突処理
  if (b1.x-b1.radius <= 0 || b1.x+b1.radius >= width) {
    b1.vx *= -1;
  }
  if (b1.y-b1.radius <= 0 || b1.y+b1.radius >= height) {
    b1.vy *= -1;
  }

  // b2を動かす
  b2.x += b2.vx;
  b2.y += b2.vy;
  // b2の壁との衝突処理
  if (b2.x-b2.radius <= 0 || b2.x+b2.radius >= width) {
    b2.vx *= -1;
  }
  if (b2.y-b2.radius <= 0 || b2.y+b2.radius >= height) {
    b2.vy *= -1;
  }

  noStroke();
  // b1を描画
  fill(b1.c);
  ellipse(b1.x, b1.y, b1.radius*2, b1.radius*2);
  // b2を描画
  fill(b2.c);
  ellipse(b2.x, b2.y, b2.radius*2, b2.radius*2);
}

class Ball {
  // フィールド
  float x, y;
  float vx, vy; // 速度
  int radius;
  color c;

  // コンストラクタ
  Ball() {
    radius = (int)random(25, 50);
    x = random(radius, width-radius);
    y = random(radius, height-radius);
    vx = random(-5, 5);
    vy = random(-5, 5);
    c = color(random(255), random(255), random(255), random(128, 255));
  }
}