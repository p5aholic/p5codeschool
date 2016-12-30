void setup() {
  size(960, 540);
}

void draw() {
  for (int x = 0; x <= width; x++) {
    float c = 255 * abs(sin(frameCount * 0.04 + x * 0.04));
    stroke(c);
    line(x, 0, x, height);
  }
}