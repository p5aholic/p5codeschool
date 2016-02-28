void setup() {
  size(750, 350);
  noStroke();
}

void draw() {
  background(0, frameCount % 256, frameCount % 256);
  ellipse(width/2, height/2, frameCount % 256, frameCount % 256);
}