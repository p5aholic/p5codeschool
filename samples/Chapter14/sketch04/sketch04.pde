int numData = 50; // 配列の要素数
int[] data = new int[numData]; // 配列の宣言と代入
// dataの要素に値を入れる
for (int i = 0; i < numData; i++) {
  data[i] = (int)random(height);
}
println(data);