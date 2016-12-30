void setup() {
  size(960, 540);
  noStroke();
}

void draw() {
  background(255);

  // キーが押されているとき
  if (keyPressed) {
    // cキーのとき
    if (key == 'c') {
      fill(0, 255, 255);
    }
    // mキーのとき
    else if (key == 'm') {
      fill(255, 0, 255);
    }
    // yキーのとき
    else if (key == 'y') {
      fill(255, 255, 0);
    }
    ellipse(width/2, height/2, 200, 200);
  }
}