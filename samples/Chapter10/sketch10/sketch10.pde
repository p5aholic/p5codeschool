size(750, 350);
background(255);
noFill();

// 原点を画面中心に移動
translate(width/2, height/2);

// 赤色の円
stroke(255, 0, 0);
ellipse(0, 0, 50, 50);

// 2倍に拡大された緑色の円
scale(2.0);
stroke(0, 255, 0);
ellipse(0, 0, 50, 50);

// 4倍に拡大された青色の円
scale(2.0);
stroke(0, 0, 255);
ellipse(0, 0, 50, 50);
saveFrame("sketch10.jpg");