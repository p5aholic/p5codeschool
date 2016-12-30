void setup() {
  size(960, 540);
  noFill();
  strokeWeight(5);
  rectMode(CENTER);
}

void draw() {
  background(0);

  // 左半分
  if (mouseX <= width/2) {
    // 上半分
    if (mouseY <= height/2) {
      stroke(220, 90, 20);
      ellipse(mouseX, mouseY, 50, 50);
    }
    // 下半分
    else {
      stroke(50, 110, 150);
      line(mouseX-25, mouseY-25, mouseX+25, mouseY+25);
      line(mouseX+25, mouseY-25, mouseX-25, mouseY+25);
    }
  }
  // 右半分
  else {
    // 上半分
    if (mouseY <= height/2) {
      stroke(230, 175, 150);
      rect(mouseX, mouseY, 50, 50);
    }
    // 下半分
    else {
      stroke(65, 180, 110);
      triangle(mouseX-25, mouseY+25, mouseX, mouseY-25, mouseX+25, mouseY+25);
    }
  }
}