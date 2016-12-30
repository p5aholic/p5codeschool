void setup() {
  size(960, 540, P3D);
  stroke(0);
  strokeWeight(3);
  fill(128);
}

void draw() {
  background(255);
  translate(width/2, height/2, 0);

  float rotationX = map(mouseY, 0, height, -PI, PI);
  float rotationY = map(mouseX, 0, width, -PI, PI);
  rotateX(rotationX);
  rotateY(rotationY);

  /* 画面中心に原点を移動してから
   さらにx、y、z軸方向に100、-100移動したところに円を描画する */

  /* 元々の原点(左上角)から見て
   (width/2+100, height/2, 0)にある円 */
  pushMatrix();
  translate(100, 0, 0);
  // 画面中心に円が向くように90度回転させる
  rotateY(HALF_PI);
  ellipse(0, 0, 100, 100);
  popMatrix();

  /* 元々の原点(左上角)から見て
   (width/2-100, height/2, 0)にある円 */
  pushMatrix();
  translate(-100, 0, 0);
  rotateY(HALF_PI);
  ellipse(0, 0, 100, 100);
  popMatrix();

  pushMatrix();
  translate(0, 100, 0);
  rotateX(HALF_PI);
  ellipse(0, 0, 100, 100);
  popMatrix();

  pushMatrix();
  translate(0, -100, 0);
  rotateX(HALF_PI);
  ellipse(0, 0, 100, 100);
  popMatrix();

  pushMatrix();
  translate(0, 0, 100);
  ellipse(0, 0, 100, 100);
  popMatrix();

  pushMatrix();
  translate(0, 0, -100);
  ellipse(0, 0, 100, 100);
  popMatrix();
}

void mousePressed() {
  saveFrame("sketch07.jpg");
}