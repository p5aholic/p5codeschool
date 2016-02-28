void setup() {
  size(750, 350);
  stroke(0);
  strokeWeight(10);
}

void draw() {
  background(255);
  translate(width/2, height/2);

  // マウスのx座標を角度に変換
  float endAngle = map(mouseX, 0, width, 0, 360);

  // 0度からendAngleになるまで5度ずつ増やす
  for (int i = 0; i < endAngle; i += 5) {
    float angle = radians(i);
    float x = 150 * cos(angle);
    float y = 150 * sin(angle);
    point(x, y);
  }
}