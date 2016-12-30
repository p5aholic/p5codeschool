int diameter = 0; // 円の直径

void setup() {
  size(700, 540);
  noStroke();
}

void draw() {
  background(128);

  ellipse(width/2, height/2, diameter, diameter);
  // 直径を大きくしていく
  diameter += 4;
  // 直径がウィンドウの高さ以上になればループ終了
  if (diameter >= height) {
    noLoop();
  }
}

// マウスが押されたら直径をリセットしてループ再開
void mousePressed() {
  diameter = 0;
  loop();
}