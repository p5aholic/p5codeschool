void setup() {
  size(960, 540);
  rectMode(CENTER);
  stroke(0);
  strokeWeight(5);
  fill(128);
}

void draw() {
  background(255);

  // 時計周りに回転する正方形
  pushMatrix();
  translate(width/2-100, height/2);
  rotate(frameCount*0.05);
  rect(0, 0, 100, 100);
  popMatrix();

  // 反時計回りに回転する正方形
  pushMatrix();
  translate(width/2+100, height/2);
  rotate(-frameCount*0.05);
  rect(0, 0, 100, 100);
  popMatrix();
}