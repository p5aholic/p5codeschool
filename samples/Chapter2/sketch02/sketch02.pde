size(960, 540);
background(220);

// ラジアンをそのままの数値で指定
arc(180, 270, 200, 200, 0.79, 5.50);
// ラジアンを定数で指定
arc(480, 270, 200, 200, QUARTER_PI, TWO_PI-QUARTER_PI);
// ラジアンを関数で指定
arc(780, 270, 200, 200, radians(45), radians(315));
saveFrame("sketch02.jpg");
