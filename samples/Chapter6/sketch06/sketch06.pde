void setup() {
  size(750, 350);
  noFill();
  strokeWeight(5);
  rectMode(CENTER);
}

void draw() {
  background(128);

  // 左半分
  if (mouseX <= width/2) {
    stroke(255);
    ellipse(mouseX, mouseY, 50, 50);
  }
  // 右半分
  else {
    stroke(0);
    rect(mouseX, mouseY, 50, 50);
  }
}