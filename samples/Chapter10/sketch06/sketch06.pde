size(750, 350);
background(255);
rectMode(CENTER);
noStroke();

// 原点を画面中心に移動
translate(width/2, height/2);

// 回転していない赤色の長方形
fill(255, 0, 0);
rect(0, 0, 300, 100);

// 30度回転した青色の長方形
rotate(radians(30));
fill(0, 255, 0);
rect(0, 0, 300, 100);

// 60度回転した青色の長方形
rotate(radians(30));
fill(0, 0, 255);
rect(0, 0, 300, 100);
saveFrame("sketch06.jpg");