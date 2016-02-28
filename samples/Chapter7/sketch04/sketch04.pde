void setup() {
  size(750, 350);
  stroke(255);
}

void draw() {
  background(128);

  for (int x = 0; x <= width; x += 150) {
    for (int y = 0; y <= height; y += 50) {
      line(x, y, mouseX, mouseY);
    }
  }
}