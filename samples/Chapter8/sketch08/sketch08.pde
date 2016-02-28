void setup() {
  size(750, 350);
  background(255);
  // 1秒間に1回実行
  frameRate(1);
}

void draw() {
  // 顔を描く
  face((int)random(width), (int)random(height), (int)random(50, 100));
}

// 顔を描く関数
void face(int x, int y, int size) {
  strokeWeight(2);
  stroke(0);
  noFill();
  // 輪郭
  ellipse(x, y, size, size);
  // 左目
  ellipse(x-size/4, y-size/4, size/5, size/5);
  // 右目
  ellipse(x+size/4, y-size/4, size/5, size/5);
  fill(0);
  // 口
  ellipse(x, y+size/4, size/3, size/3);
}