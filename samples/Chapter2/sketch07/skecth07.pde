size(750, 200);
background(255);

stroke(30);

// ３種類のstrokeCap()

/* ROUNDを指定
ROUNDがデフォルトなので
指定しなくても変わらない */
strokeWeight(20);
strokeCap(ROUND);
// 高さ100px太さ20pxの線
line(125, 50, 125, 150);
strokeWeight(1);
// 高さ100px太さ1pxの線
line(95, 50, 95, 150);
// 幅20px太さ1pxの線
line(115, 180, 135, 180);

// PROJECTを指定
strokeWeight(20);
strokeCap(PROJECT);
// 高さ100px太さ20pxの線
line(375, 50, 375, 150);
strokeWeight(1);
// 高さ100px太さ1pxの線
line(345, 50, 345, 150);
// 幅20px太さ1pxの線
line(365, 180, 385, 180);

// SQUAREを指定
strokeWeight(20);
strokeCap(SQUARE);
// 高さ100px太さ20pxの線
line(625, 50, 625, 150);
strokeWeight(1);
// 高さ100px太さ1pxの線
line(595, 50, 595, 150);
// 幅20px太さ1pxの線
line(615, 180, 635, 180);
saveFrame("sketch07.jpg");