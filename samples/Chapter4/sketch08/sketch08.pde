size(960, 175);
background(255);

color red = color(200, 30, 30);
color green = color(30, 200, 30);
color blue = color(30, 30, 200);
int diameter = 80;

noStroke();
// 赤色の円
fill(red);
ellipse(width/2-1.5*diameter, height/2, 2*diameter, 2*diameter);
// 緑色の円
fill(green);
ellipse(width/2, height/2, diameter, diameter);
// 青色の円
fill(blue);
ellipse(width/2+1.5*diameter, height/2, 2*diameter, 2*diameter);
saveFrame("sketch08.jpg");
