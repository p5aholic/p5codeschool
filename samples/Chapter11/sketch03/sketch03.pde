void setup() {
  size(960, 540);
  stroke(0, 0, 255);
  strokeWeight(20);
}

void draw() {
  background(255);
  translate(width/2, height/2);

  float x = 100*cos(frameCount*0.05);
  float y = 100*sin(frameCount*0.05);

  point(x, y);
}