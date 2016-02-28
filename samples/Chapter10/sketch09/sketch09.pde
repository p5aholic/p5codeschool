size(750, 350);
background(255);
fill(220);

// 赤色の円
stroke(255, 0, 0);
ellipse(50, 50, 50, 50);

float s = 2.0;

// 2倍に拡大された緑色の円
scale(2.0);
stroke(0, 255, 0);
// 枠線の太さを維持
strokeWeight(1.0/s);
ellipse(50, 50, 50, 50);

// 4倍に拡大された青色の円
scale(2.0);
stroke(0, 0, 255);
// 枠線の太さを維持
strokeWeight(1.0/(s*s));
ellipse(50, 50, 50, 50);
saveFrame("sketch09.jpg");