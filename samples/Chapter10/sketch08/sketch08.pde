size(960, 540);
background(255);
fill(220);

stroke(255, 0, 0);
ellipse(50, 50, 50, 50);

// x軸方向に4倍、y軸方向に2倍拡大された緑色の円
scale(4.0, 2.0);
stroke(0, 255, 0);
ellipse(50, 50, 50, 50);
saveFrame("sketch08.jpg");