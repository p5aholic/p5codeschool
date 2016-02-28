void setup() {
  size(750, 350);
  strokeWeight(20);
  stroke(0);
  // フレームレートを15に変更
  frameRate(15);
}

void draw() {
  // 背景を初期化
  background(255);
  line(pmouseX, pmouseY, mouseX, mouseY);
}