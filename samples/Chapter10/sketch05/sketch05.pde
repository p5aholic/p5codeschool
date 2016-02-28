size(750, 350);
background(255);
noStroke();

// 回転していない赤色の長方形
fill(255, 0, 0);
rect(0, 0, 350, 50);

// 30度回転した青色の長方形
rotate(radians(30));
fill(0, 255, 0);
rect(0, 0, 350, 50);

// 60度回転した青色の長方形
rotate(radians(30));
fill(0, 0, 255);
rect(0, 0, 350, 50);
saveFrame("sketch05.jpg");