size(750, 350);
background(220);

// 線：枠線のみ指定
stroke(30);
line(50, 25, 150, 325);

// 正円：枠線と内側を指定
stroke(30);
fill(255);
ellipse(250, 175, 150, 150);

// 正方形：枠線のみ指定
stroke(30);
noFill();
rect(375, 100, 150, 150);

// 正方形：内側のみ指定
noStroke();
fill(255);
rect(500, 125, 100, 100);
saveFrame("sketch05.jpg");