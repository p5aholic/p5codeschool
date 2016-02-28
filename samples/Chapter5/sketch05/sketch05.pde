int a = 5; // プログラム終了まで生き残る変数

void setup() {
  println(a); // 5
  int b = 10; // setup関数内のこの行以降でのみ生きられる変数
  println(b); // 10
}

void draw() {
  println(a); // 5
  println(b); // エラー
}