size(750, 175);
background(255);

// 変数diameterを初期値80で作成
int diameter = 80;

noStroke();
fill(30);
ellipse(125, 88, diameter, diameter);
ellipse(375, 88, diameter, diameter);
ellipse(625, 88, diameter, diameter);
saveFrame("sketch02.jpg");
