void setup() {
  size(960, 540);
  stroke(255, 0, 0);
  strokeWeight(20);
}

void draw() {
  background(255);
  // 原点を画面中心に移動
  translate(width/2, height/2);

  // cos()が返した値をxに代入
  float x = 100 * cos(frameCount*0.05);

  // xを表す点を描画してみる
  point(x, 0);
}