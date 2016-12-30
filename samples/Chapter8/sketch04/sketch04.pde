int x, y, diameter; // 円の座標と直径
color c1, c2;       // 円の色と線の色

void setup() {
  size(960, 540);
  x = width/2;
  y = height/2;
  diameter = 150;
  c1 = color(0);
  c2 = color(0, 255, 0);
}

void draw() {
  background(128);

  // 円の中心座標とマウス座標の距離を計算
  float d = dist(x, y, mouseX, mouseY);
  // マウスが円内にあるとき
  if (d <= diameter/2) {
    c1 = color(255);
    c2 = color(255, 0, 0);
  } else {
    c1 = color(0);
    c2 = color(0, 255, 0);
  }

  // 円
  noStroke();
  fill(c1);
  ellipse(x, y, diameter, diameter);
  // 線
  stroke(c2);
  line(x, y, mouseX, mouseY);
}