float space = 20;

void setup() {
  size(600, 600);
  pixelDensity(displayDensity());
  rectMode(CENTER);
  noLoop();
}

void draw() {
  background(#f5f5f5);

  noFill();

  for (int y = 0; y < height; y += space) {
    for (int x = 0; x < width; x += space) {
      int j = int(random(9));
      if (j == 1) {
        ellipse(x+0.5*space, y+0.5*space, space, space);
      } else if (j == 2) {
        line(x, y+0.5*space, x+0.5*space, y+0.5*space);
        line( x+0.5*space, y+0.5*space, x+0.5*space, y);
      } else if (j == 3) {
        line(x+space, y+0.5*space, x+0.5*space, y+0.5*space);
        line(x+0.5*space, y+0.5*space, x+0.5*space, y+space);
      } else if (j == 4) {
        line(x, y+0.5*space, x+0.5*space, y+space);
        line(x+0.5*space, y+space, x+space, y+0.5*space);
      } else if (j == 5) {
        line(x+0.5*space, y, x+space, y+0.5*space);
        line(x+0.5*space, y, x, y+0.5*space);
      } else if (j == 6) {
        line(x+0.5*space, y+0.5*space, x+space, y+0.5*space);
        line(x+0.5*space, y+0.5*space, x+0.5*space, y);
      } else if (j == 7) {
        line(x+0.5*space, y+0.5*space, x, y+0.5*space);
        line(x+0.5*space, y+0.5*space, x+0.5*space, y+space);
      }
    }
  }
}
