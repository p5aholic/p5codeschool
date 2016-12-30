void setup() {
  size(960, 540, P3D);
  noStroke();
}

void draw() {
  background(0);

  // 座標(mouseX, mouseY, 100)に白色のライトを設置
  pointLight(255, 255, 255, mouseX, mouseY, 100);

  // 左の球体
  pushMatrix();
  translate(width/2-200, height/2, 0);
  sphere(60);
  popMatrix();
  // 真ん中の球体
  pushMatrix();
  translate(width/2, height/2, 0);
  sphere(60);
  popMatrix();
  // 右の球体
  pushMatrix();
  translate(width/2+200, height/2, 0);
  sphere(60);
  popMatrix();
}

void mousePressed() {
  saveFrame("sketch11.jpg");
}