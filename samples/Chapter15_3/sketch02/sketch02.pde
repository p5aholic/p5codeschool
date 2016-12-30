// 要素数１００個のBallクラス型配列ballsを生成
Ball[] balls = new Ball[100];

void setup() {
  size(960, 540);

  // ballsの要素のBallクラス型オブジェクトを生成
  for (int i = 0; i < balls.length; i++) {
    balls[i] = new Ball();
  }
}

void draw() {
  background(255);

  // ballsの要素全てに対してupdateメソッドとdisplayメソッドを実行
  for (int i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].display();
  }
}

class Ball {
  // フィールド
  float x, y;
  float vx, vy;
  int radius;
  color c;

  // コンストラクタ
  Ball() {
    radius = (int)random(10, 20);
    x = random(radius, width-radius);
    y = random(radius, height-radius);
    vx = random(-5, 5);
    vy = random(-5, 5);
    c = color(random(255), random(255), random(255), random(255));
  }

  // メソッド
  void update() {
    x += vx;
    y += vy;
    if (x-radius <= 0 || x+radius >= width) {
      vx *= -1;
    }
    if (y-radius <= 0 || y+radius >= height) {
      vy *= -1;
    }
  }

  void display() {
    noStroke();
    fill(c);
    ellipse(x, y, 2*radius, 2*radius);
  }
}