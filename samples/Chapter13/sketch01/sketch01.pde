void setup() {
  // レンダラをP3Dに
  size(960, 540, P3D);
  noLoop();
  stroke(220);
  strokeWeight(5);
}

void draw() {
  background(0);

  pushMatrix();
  // 座標(width/2-100, height/2, 100)にboxを描く
  translate(width/2-100, height/2, 100);
  fill(128);
  // 幅、高さ、奥行きが100pxの箱
  box(100);
  popMatrix();

  pushMatrix();
  // 座標(width/2+100, height/2, -100)にboxを描く
  translate(width/2+100, height/2, -100);
  noFill();
  // 幅100px、高さ50px、奥行き200pxの箱
  box(100, 50, 200);
  popMatrix();
  saveFrame("sketch01.jpg");
}