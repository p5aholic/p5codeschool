void setup() {
  size(750, 350);
  noLoop();
  stroke(0);
  strokeWeight(5);
}

void draw() {
  background(255);

  // 左端から右端まで5px間隔で点を描画する
  for (int x = 0; x <= width; x += 5) {
    // 点のy座標をrandom()で変動させる
    float y = height/2 + random(-100, 100);
    // 点を描画
    point(x, y);
  }
}