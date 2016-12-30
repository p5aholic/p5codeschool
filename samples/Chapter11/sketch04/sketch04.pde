void setup() {
  size(960, 540);
  noLoop();
  stroke(0);
  strokeWeight(10);
}

void draw() {
  background(255);
  translate(width/2, height/2);

  // 0度から360度になるまで5度ずつ増やす
  for (int i = 0; i < 360; i += 5) {
    // ラジアンに変換
    float angle = radians(i);
    // 半径150の円上の座標を計算
    float x = 150 * cos(angle);
    float y = 150 * sin(angle);
    // 点を描画
    point(x, y);
  }
}