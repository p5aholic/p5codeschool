void setup() {
  size(960, 540, P3D);
  stroke(0);
  strokeWeight(2);
}

void draw() {
  background(255);

  // x軸中心に回転する赤色の箱
  pushMatrix();
  translate(width/2, height/2-100, 0);
  rotateX(frameCount*0.03);
  fill(255, 0, 0);
  box(50);
  popMatrix();

  // y軸中心に回転する緑色の箱
  pushMatrix();
  translate(width/2, height/2, 0);
  rotateY(frameCount*0.03);
  fill(0, 255, 0);
  box(50);
  popMatrix();

  // z軸中心に回転する青色の箱
  pushMatrix();
  translate(width/2, height/2+100, 0);
  rotateZ(frameCount*0.03); // rotate()でも可
  fill(0, 0, 255);
  box(50);
  popMatrix();
}

void mousePressed() {
  saveFrame("sketch04.jpg");
}