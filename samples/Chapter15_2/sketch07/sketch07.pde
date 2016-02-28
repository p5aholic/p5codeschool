Ball b1, b2, b3;

void setup() {
  size(750, 350);
  // 実引数ありのコンストラクタを呼び出す
  // 青
  b1 = new Ball(200, height/2, 60, color(0, 0, 180));
  // 黄
  b2 = new Ball(350, height/2, 60, color(180, 180, 0));
  // 赤
  b3 = new Ball(500, height/2, 60, color(180, 0, 0));
}

void draw() {
  background(255);

  noStroke();
  // b1を描画
  fill(b1.c);
  ellipse(b1.x, b1.y, b1.radius*2, b1.radius*2);
  // b2を描画
  fill(b2.c);
  ellipse(b2.x, b2.y, b2.radius*2, b2.radius*2);
  // b3を描画
  fill(b3.c);
  ellipse(b3.x, b3.y, b3.radius*2, b3.radius*2);
}

class Ball {
  // フィールド
  float x, y;
  int radius;
  color c;

  // 仮引数を持つコンストラクタ
  Ball(float bx, float by, int rad, color bc) {
    // 仮引数に対応するフィールドに代入を行う
    x = bx;
    y = by;
    radius = rad;
    c = bc;
  }
}