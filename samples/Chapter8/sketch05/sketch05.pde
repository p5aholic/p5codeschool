void setup() {
  size(960, 540);
  stroke(0);
}

void draw() {
  background(255);

  // マウスのx座標を縦線の太さに変換
  int xWeight = (int)map(mouseX, 0, width, 1, 50);
  // マウスのy座標を横線の太さに変換
  int yWeight = (int)map(mouseY, 0, height, 1, 50);

  strokeWeight(xWeight);
  for (int x = 0; x <= width; x += 50) {
    line(x, 0, x, height);
  }
  strokeWeight(yWeight);
  for (int y = 0; y <= height; y += 50) {
    line(0, y, width, y);
  }
}