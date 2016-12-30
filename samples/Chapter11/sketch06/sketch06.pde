void setup() {
  size(960, 540);
  noLoop();
  noStroke();
  fill(0);
}

void draw() {
  background(255);

  // 左端から右端まで15px間隔で円を描画
  for (int x = 0; x <= width; x += 15) {
    // xに応じて高さを変える
    float y = height/2 + 100 * sin(x*0.01);
    ellipse(x, y, 15, 15);
  }
}