float x, y;   // ボールの中心座標
float vx, vy; // ボールの速度
int radius;   // ボールの半径
color c;      // ボールの色

void setup() {
  size(750, 350);
  // 初期値を設定
  radius = (int)random(10, 20);
  x = random(radius, width-radius);
  y = random(radius, height-radius);
  vx = random(-5, 5);
  vy = random(-5, 5);
  c = color(random(255), random(255), random(255), random(255));
}

void draw() {
  background(255);

  // ボールの位置を更新
  x += vx;
  y += vy;
  // 左右の壁との当たり判定
  if (x-radius <= 0 || x+radius >= width) {
    vx *= -1;
  }
  // 上下の壁との当たり判定
  if (y-radius <= 0 || y+radius >= height) {
    vy *= -1;
  }
  // ボールを描画
  noStroke();
  fill(c);
  ellipse(x, y, 2*radius, 2*radius);
}
