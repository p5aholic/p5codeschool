void setup() {
  size(960, 540, P3D);
  stroke(255);
  noFill();
}

void draw() {
  background(0);

  // 水平方向の解像度(resolution)
  int uRes = (int)map(mouseX, 0, width, 3, 30);
  // 垂直方向の解像度(resolution)
  int vRes = (int)map(mouseY, 0, height, 2, 30);

  translate(width/2, height/2, 0);
  // 面の細かさを設定
  sphereDetail(uRes, vRes);
  sphere(100);
}

void mousePressed () {
  saveFrame("sketch03.jpg");
}