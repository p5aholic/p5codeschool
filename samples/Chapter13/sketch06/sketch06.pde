void setup() {
  size(750, 350, P3D);
  noLoop();
  stroke(0);
  strokeWeight(15);
}

void draw() {
  background(255);
  translate(width/2, height/2, 0);

  // 縦横に５つの点を表示
  for (int x = -2; x <= 2; x++) {
    for (int y = -2; y <= 2; y++) {
      float pointX = x * 50;
      float pointY = y * 50;
      float pointZ = -x * 50;
      point(pointX, pointY, pointZ);
    }
  }
  saveFrame("sketch06.jpg");
}