int numX, numY;
float spaceX = 20, spaceY = 20;

void setup() {
  size(600, 600);
  pixelDensity(displayDensity());
  background(#f5f5f5);
  rectMode(CENTER);
  noLoop();
  numX = ceil(width / spaceX);
  numY = ceil(height / spaceY);
}

void draw() {
  stroke(#eeeeee);
  strokeWeight(1);
  noFill();
  for (int y = 0; y < numY; y++) {
    float posY = y * spaceY;
    line(0, posY, width, posY);
  }
  for (int x = 0; x < numX; x++) {
    float posX = x * spaceX;
    line(posX, 0, posX, height);
  }

  noStroke();
  fill(#202020);
  float w = 2;
  for (int y = 0; y < height; y += spaceY) {
    for (int x = 0; x < width; x += spaceX) {
      float cx = x + spaceX/2;
      float cy = y + spaceY/2;
      int r = int(random(4));
      if (r == 0) {
        rect(cx, cy, spaceX, w);
      } else if (r == 1) {
        rect(cx, cy, w, spaceY);
      }
    }
  }
}
