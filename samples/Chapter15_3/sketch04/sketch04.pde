Ball b1;

void setup() {
  size(960, 540);
  b1 = new Ball(40, 50);
}

class Ball {
  float x = 10, y = 20;

  Ball(float x, float y) {
    // xを出力
    println(x);
    // yを出力
    println(y);
  }
}