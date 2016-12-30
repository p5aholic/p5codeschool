size(960, 175);
background(255);

// 変数diameterを初期値150で作成
int diameter = 150;

noStroke();
fill(30);
ellipse(125, 88, diameter, diameter);
ellipse(375, 88, diameter, diameter);
ellipse(625, 88, diameter, diameter);
saveFrame("sketch03.jpg");
