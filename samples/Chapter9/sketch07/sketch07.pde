void setup() {
  size(960, 540);
  background(255);
  noStroke();
  rectMode(CENTER);
}

/* draw関数には何も書かないが
 mousePressed関数を機能させるために必要 */
void draw() {
}

void mousePressed() {
  fill(random(255), random(255), random(255));
  if (mouseButton == LEFT) {
    ellipse(mouseX, mouseY, 40, 40);
  } else if (mouseButton == RIGHT) {
    rect(mouseX, mouseY, 40, 40);
  }
}