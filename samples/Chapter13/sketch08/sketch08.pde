// カメラのx座標とy座標
float camX = 0, camY = 0;
// カメラが動くスピード
float speed = 12;

void setup() {
  size(960, 540, P3D);
}

void draw() {
  background(255);
  translate(width/2, height/2, 0);

  // カメラを動かす
  if (keyPressed) {
    if (keyCode == LEFT) camX -= speed;
    if (keyCode == RIGHT) camX += speed;
    if (keyCode == UP) camY -= speed;
    if (keyCode == DOWN) camY += speed;
  }
  // カメラの設定
  camera(camX, camY, 200, 0, 0, 0, 0, 1, 0);

  stroke(0);
  fill(220);
  box(50);

  stroke(255, 0, 0);
  line(0, 0, 0, 500, 0, 0);
  stroke(0, 255, 0);
  line(0, 0, 0, 0, 500, 0);
  stroke(0, 0, 255);
  line(0, 0, 0, 0, 0, 500);
}

void mousePressed() {
  saveFrame("sketch08.jpg");
}