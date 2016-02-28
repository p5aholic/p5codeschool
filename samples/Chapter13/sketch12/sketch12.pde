void setup() {
  size(750, 350, P3D);
  noStroke();
}

void draw() {
  background(0);

  // マウスのx座標をスポットライトが開く角度に変換
  float angle = map(mouseX, 0, width, PI/8, PI/2);
  // マウスのy座標を光の集まり度合いに変換
  float concentration = map(mouseY, 0, height, 0, 20);

  // 環境光を追加
  ambientLight(30, 30, 30);
  // スポットライトを追加
  spotLight(255, 255, 255,         // 色
            width/2, 0, 0,         // 光源の座標
            0, 1, 0,               // 光が射す方向
            angle, concentration); // 角度と集まり度合い

  // 左の箱
  pushMatrix();
  translate(width/2-200, height/2, 0);
  rotateZ(radians(30));
  box(150, 30, 30);
  popMatrix();
  // 真ん中の球体
  pushMatrix();
  translate(width/2, height/2, 0);
  sphere(60);
  popMatrix();
  // 右の箱
  pushMatrix();
  translate(width/2+200, height/2, 0);
  rotateZ(radians(-30));
  box(150, 30, 30);
  popMatrix();
}

void mousePressed() {
  saveFrame("sketch12.jpg");
}