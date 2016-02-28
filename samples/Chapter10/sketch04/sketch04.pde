void setup() {
  size(750, 350);
  noStroke();
  fill(0);
}

void draw() {
  background(255);
  // 原点を画面中心に移動
  translate(width/2, height/2);
  // 原点に円を描画
  ellipse(0, 0, 150, 150);
}