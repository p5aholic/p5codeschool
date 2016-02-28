size(750, 200);
background(255);

// 枠線の太さを20pxにする
strokeWeight(20);
stroke(30);
fill(180);

// ３種類のstrokeJoin()

/* MITERを指定
MITERがデフォルトなので
指定しなくても変わらない */
strokeJoin(MITER);
rect(75, 50, 100, 100);

// BEVELを指定
strokeJoin(BEVEL);
rect(325, 50, 100, 100);

// ROUNDを指定
strokeJoin(ROUND);
rect(575, 50, 100, 100);
saveFrame("sketch06.jpg");