// 要素数１００個のBallクラス型配列ballsを生成
Ball[] balls = new Ball[100];

void setup() {
  size(750, 350);

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
    this.radius = (int)random(10, 20);
    this.x = random(this.radius, width-this.radius);
    this.y = random(this.radius, height-this.radius);
    this.vx = random(-5, 5);
    this.vy = random(-5, 5);
    this.c = color(random(255), random(255), random(255), random(255));
  }

  // メソッド
  void update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x-this.radius <= 0 || this.x+this.radius >= width) {
      this.vx *= -1;
    }
    if (this.y-radius <= 0 || this.y+this.radius >= height) {
      this.vy *= -1;
    }
  }

  void display() {
    noStroke();
    fill(c);
    ellipse(x, y, 2*radius, 2*radius);
  }
}