int x, y, size; // 箱の座標と大きさ
int cageSize;   // 檻の大きさ

void setup() {
  size(960, 540);
  rectMode(CENTER);
  x = width/2;
  y = height/2;
  size = 60;
  cageSize = 200;
}

void draw() {
  background(128);

  // 檻を描画
  stroke(0);
  strokeWeight(5);
  noFill();
  rect(width/2, height/2, cageSize, cageSize);

  // マウスの座標を檻の中の範囲に制限した値を箱の座標とする
  x = constrain(mouseX, width/2-cageSize/2+size/2, width/2+cageSize/2-size/2);
  y = constrain(mouseY, height/2-cageSize/2+size/2, height/2+cageSize/2-size/2);

  // 箱を描画
  fill(0);
  rect(x, y, size, size);
}