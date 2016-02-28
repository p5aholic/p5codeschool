int numBalls = 5; // ボールの数
float[] x = new float[numBalls];  // x座標の配列
float[] y = new float[numBalls];  // y座標の配列
float[] vx = new float[numBalls]; // x軸方向の速度の配列
float[] vy = new float[numBalls]; // y軸方向の速度の配列
int[] radius = new int[numBalls]; // 半径の配列
color[] c = new color[numBalls];  // 色の配列

// ラケットの情報
int racketX, racketY; // 位置
int racketVx;         // 速度
int racketW, racketH; // 横幅と高さ
color racketC;        // 色

void setup() {
  size(750, 350);
  // ボール初期値を設定
  for (int i = 0; i < numBalls; i++) {
    radius[i] = (int)random(10, 20);
    x[i] = random(radius[i], width-radius[i]);
    y[i] = random(radius[i], height-radius[i]);
    vx[i] = random(-5, 5);
    vy[i] = random(-5, 5);
    c[i] = color(random(255), random(255), random(255), random(255));
  }
  // ラケットの初期値を設定
  racketX = width/2;
  racketY = height-50;
  racketVx = 5;
  racketW = 120;
  racketH = 25;
  racketC = color(0);
}

void draw() {
  background(255);

  for (int i = 0; i < numBalls; i++) {
    // ボールの位置を更新
    x[i] += vx[i];
    y[i] += vy[i];
    // 左右の壁との当たり判定
    if (x[i]-radius[i] <= 0 || x[i]+radius[i] >= width) {
      vx[i] *= -1;
    }
    // 上下の壁との当たり判定
    if (y[i]-radius[i] <= 0 || y[i]+radius[i] >= height) {
      vy[i] *= -1;
    }
    // ボールを描画
    noStroke();
    fill(c[i]);
    ellipse(x[i], y[i], 2*radius[i], 2*radius[i]);
  }

  // ラケットを描画
  fill(racketC);
  rectMode(CENTER);
  rect(racketX, racketY, racketW, racketH);
}