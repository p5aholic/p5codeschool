float noise = 0.0;      // noise()に指定する値
float noiseStep = 0.05; // noiseの更新に使う値

void setup() {
  size(750, 350);
  noLoop();
  stroke(0);
  strokeWeight(5);
}

void draw() {
  background(255);

  // 左端から右端まで5px間隔で点を描画する
  for (int x = 0; x <= width; x += 5) {
    // 点のy座標をnoise()で変動させる
    float y = height/2 + noise(noise) * 200 - 100;
    // 点を描画
    point(x, y);
    // noiseを更新
    noise += noiseStep;
  }
}

void mousePressed() {
  redraw();
}