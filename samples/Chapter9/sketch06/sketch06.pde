void setup() {
  size(960, 540);
  background(255);
  noStroke();
}

void draw() {
  fill(0, 30);
  ellipse(mouseX, mouseY, 40, 40);
}

// マウスのボタンが押されると実行される関数
void mousePressed() {
  background(255);
}