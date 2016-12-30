// 初期設定
void setup() {
  size(960, 540);
  background(255);
  noStroke();
  fill(0, 50);
}

// setup()実行後に繰り返し実行される処理
void draw() {
  // マウスの位置に円を描画
  ellipse(mouseX, mouseY, 50, 50);
}