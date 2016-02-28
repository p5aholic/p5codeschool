int numData = 50; // 配列の要素数
int[] data = new int[numData]; // 配列の宣言と代入
int rectWidth;    // 棒の横幅

void setup() {
  size(750, 350);
  noLoop();
  // dataの要素に値を入れる
  setData();
  rectWidth = width/numData;
}

// dataの要素に値を入れる関数
void setData() {
  for (int i = 0; i < numData; i++) {
    data[i] = (int)random(height);
  }
}

void draw() {
  background(128);
  // 配列dataの中身を棒グラフで可視化
  for (int i = 0; i < numData; i++) {
    fill(255);
    rect(i*rectWidth, height-data[i], rectWidth, data[i]);
  }
}

// マウスクリックで配列の中身を入れ替える
void mousePressed() {
  setData();
  redraw();
}