Ball b1 = new Ball();

void setup() {
  size(960, 540);
  // 座標をセット
  b1.setPosition(width/2, height/2);
}

class Ball {
  float x, y;
  int radius;
  color c;

  Ball() {
  }

  // 座標をセットするメソッド
  void setPosition(float x, float y) {
    this.x = x;
    this.y = y;
  }
}