void setup() {
  // 関数は定義した行より前でも使える
  int a = myConstrain(-10, 0, 100);
  println(a); // 0
  a = myConstrain(50, 0, 100);
  println(a); // 50
  a = myConstrain(300, 0, 100);
  println(a); // 100;
}

// ここから
int myConstrain(int value, int low, int high) {
  // low未満ならlowを返す
  if (value < low) {
    return low;
  }
  // highより大きいならhighを返す
  else if (value > high) {
    return high;
  }
  // 間ならvalueをそのまま返す
  else return value;
}
// ここまでが関数定義