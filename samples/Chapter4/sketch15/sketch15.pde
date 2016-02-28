float rate = 0.08;
int price1 = 1000;
int price2;

// int()を用いて型変換
price2 = price1 + int(price1 * rate);
println(price2);

// ダメな例
// price2 = price1 + int(price1) * rate;
// price2 = price1 + price1 * int(rate);
