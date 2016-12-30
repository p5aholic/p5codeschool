size(960, 540);
background(255);

// 横線
strokeWeight(3);
stroke(0);
line(0, 100, 960, 100);
line(0, 250, 960, 250);

rectMode(CENTER);
noStroke();

// 白黒の透明度を５段階で比較
fill(0, 51);
rect(75, 100, 150, 140);
fill(0, 102);
rect(225, 100, 150, 140);
fill(0, 153);
rect(375, 100, 150, 140);
fill(0, 204);
rect(525, 100, 150, 140);
fill(0, 255);
rect(675, 100, 150, 140);

// 水色の透明度を５段階で比較
fill(0, 180, 180, 51);
ellipse(75, 250, 150, 150);
fill(0, 180, 180, 102);
ellipse(225, 250, 150, 150);
fill(0, 180, 180, 153);
ellipse(375, 250, 150, 150);
fill(0, 180, 180, 204);
ellipse(525, 250, 150, 150);
fill(0, 180, 180, 255);
ellipse(675, 250, 150, 150);
saveFrame("sketch02.jpg");