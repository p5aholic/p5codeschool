size(960, 540);
background(220);

noStroke();
fill(0);
ellipseMode(RADIUS);
ellipse(375, 175, 100, 100); // 黒色の円

fill(255);
ellipseMode(CENTER);
ellipse(375, 175, 100, 100); // 白色の円

fill(30);
ellipseMode(CORNER);
ellipse(375, 175, 100, 100); // 暗い灰色の円

fill(150);
ellipseMode(CORNERS);
ellipse(0, 0, 200, 100);     // 明るい灰色の円
saveFrame("sketch08.jpg");