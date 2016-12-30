void setup() {
  size(960, 540);
  background(255);
  noStroke();
}

void draw() {
  // ランダムな色を指定
  fill(random(255), random(255), random(255), random(255));
  // マウスの位置にランダムな大きさの楕円を描く
  ellipse(mouseX, mouseY, random(80), random(80));
}