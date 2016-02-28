size(750, 350);
background(220);

// ラジアンをそのままの数値で指定
arc(125, 175, 100, 100, 0.79, 5.50);
// ラジアンを定数で指定
arc(375, 175, 100, 100, QUARTER_PI, TWO_PI-QUARTER_PI);
// ラジアンを関数で指定
arc(625, 175, 100, 100, radians(45), radians(315));
saveFrame("sketch02.jpg");