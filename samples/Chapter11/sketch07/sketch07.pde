void setup() {
  size(960, 540);
  noStroke();
  fill(0);
}

void draw() {
  background(255);

  for (int x = 0; x <= width; x += 15) {
    float y = height/2 + 100 * sin(frameCount*0.04 + x*0.02);
    ellipse(x, y, 15, 15);
  }
}