size(960, 540);
background(220);

noStroke();
fill(0);
rectMode(CENTER);
rect(375, 175, 100, 100); // 黒色の円

fill(255);
rectMode(CORNER);
rect(375, 175, 100, 100); // 白色の円

fill(30);
rectMode(CORNERS);
rect(0, 0, 200, 100);     // 灰色の円
saveFrame("sketch09.jpg");