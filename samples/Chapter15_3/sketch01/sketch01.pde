int[] data = new int[50];  // 配列の宣言と代入
println(data.length);      // dataの要素数を出力
// dataの要素に値を入れる
for (int i = 0; i < data.length; i++) {
  data[i] = (int)random(height);
}
println(data);