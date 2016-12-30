void setup() {
  size(960, 540);
  noFill();
  strokeWeight(5);
  rectMode(CENTER);
}

void draw() {
  background(0);

  // ４分割した左端
  if (mouseX >= 0 && mouseX < width/4) {
    stroke(220, 90, 20);
    ellipse(mouseX, mouseY, 50, 50);
  }
  // 4分割した左端から２番目
  else if (mouseX >= width/4 && mouseX < 2*width/4) {
    stroke(50, 110, 150);
    line(mouseX-25, mouseY-25, mouseX+25, mouseY+25);
    line(mouseX+25, mouseY-25, mouseX-25, mouseY+25);
  }
  // ４分割した右端から２番目
  else if (mouseX >= 2*width/4 && mouseX < 3*width/4) {
    stroke(230, 175, 150);
    rect(mouseX, mouseY, 50, 50);
  }
  // ４分割した右端
  else {
    stroke(65, 180, 110);
    triangle(mouseX-25, mouseY+25, mouseX, mouseY-25, mouseX+25, mouseY+25);
  }
}