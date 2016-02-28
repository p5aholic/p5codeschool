void setup() {
  size(750, 350);
  stroke(255);
}

void draw() {
  background(128);

  for (int i = 0; i <= 50; i++) {
    line(i * (width/50), height/2, mouseX, mouseY);
  }
}