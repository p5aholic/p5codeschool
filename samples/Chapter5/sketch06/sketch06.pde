int hue = 0;

void setup() {
  size(960, 540);
  background(255);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

void draw() {
  hue = (hue + 1) % 361;
  fill(hue, 80, 60, 20);
  ellipse(mouseX, mouseY, 40, 40);
}