void setup() {
  size(750, 350, P3D);
  noLoop();
}

void draw() {
  background(0);

  pushMatrix();
  translate(width/2-100, height/2, 0);
  noStroke();
  fill(128);
  // 半径100の球体
  sphere(100);
  popMatrix();

  pushMatrix();
  translate(width/2+100, height/2, 0);
  stroke(128);
  noFill();
  // 半径100の球体
  sphere(100);
  popMatrix();
  saveFrame("sketch02.jpg");
}