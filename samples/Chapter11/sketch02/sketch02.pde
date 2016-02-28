void setup() {
  size(750, 350);
  stroke(0, 255, 0);
  strokeWeight(20);
}

void draw() {
  background(255);
  // 原点を画面中心に移動
  translate(width/2, height/2);

  // sin()が返した値をyに代入
  float y = 100 * sin(frameCount*0.05);

  // yを表す点を描画してみる
  point(0, y);
}