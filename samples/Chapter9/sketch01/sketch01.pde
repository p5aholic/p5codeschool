void setup() {
  size(750, 350);
  background(255);
  noStroke();
  fill(0);
}

void draw() {
  // マウスが押されているとき
  if (mousePressed) {
    ellipse(random(width), random(height), 50, 50);
  }
  // 押されてないとき
  else {
    ellipse(width/2, height/2, 50, 50);
  }
}
