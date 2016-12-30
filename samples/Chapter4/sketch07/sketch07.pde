size(960, 175);
background(255);

color red = color(200, 30, 30);
color green = color(30, 200, 30);
color blue = color(30, 30, 200);

noStroke();
// redを使用
fill(red);
ellipse(125, 88, 120, 120);
// greenを使用
fill(green);
ellipse(375, 88, 120, 120);
// blueを使用
fill(blue);
ellipse(625, 88, 120, 120);
saveFrame("sketch07.jpg");
