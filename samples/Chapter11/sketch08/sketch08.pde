void setup() {
  size(960, 540);
  noLoop();
}

void draw() {
  // 左端から右端まで太さ1pxの縦線を敷き詰める
  for (int x = 0; x <= width; x++) {
    // xに応じて色変える
    float c = 255 * abs(sin(x * 0.01));
    stroke(c);
    line(x, 0, x, height);
  }
}
