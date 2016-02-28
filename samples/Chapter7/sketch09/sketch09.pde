int boxW, boxH;

void setup() {
  size(750, 350);
  noFill();
  stroke(30);
  strokeWeight(3);
  boxW = width/10;
  boxH = height/10;
}

void draw() {
  background(255);

  for (int x = 0; x < 10; x++) {
    for (int y = 0; y < 10; y++) {
      // マウスと重なっている長方形に×を描画
      if (mouseX >= x*boxW && mouseX <= x*boxW+boxW && mouseY >= y*boxH && mouseY <= y*boxH+boxH) {
        line(x*boxW, y*boxH, x*boxW+boxW, y*boxH+boxH);
        line(x*boxW, y*boxH+boxH, x*boxW+boxW, y*boxH);
      }
      rect(x*boxW, y*boxH, boxW, boxH);
    }
  }
}