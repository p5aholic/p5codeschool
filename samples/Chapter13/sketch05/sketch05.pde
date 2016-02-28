void setup() {
  size(750, 350, P3D);
}

void draw() {
  background(255);
  // 原点を画面中心に移動
  translate(width/2, height/2, 0);

  // マウスの座標を回転角度に変換
  float rotationX = map(mouseY, 0, height, -PI, PI);
  float rotationY = map(mouseX, 0, width, -PI, PI);
  // x軸中心の回転
  rotateX(rotationX);
  // y軸中心の回転
  rotateY(rotationY);

  // 画面中心の箱
  stroke(0);
  fill(220);
  box(50);

  // x軸を示す赤色の線
  stroke(255, 0, 0);
  line(0, 0, 0, 500, 0, 0);
  // y軸を示す緑色の線
  stroke(0, 255, 0);
  line(0, 0, 0, 0, 500, 0);
  // x軸を示す青色の線
  stroke(0, 0, 255);
  line(0, 0, 0, 0, 0, 500);
}

void mousePressed() {
  saveFrame("sketch05.jpg");
}