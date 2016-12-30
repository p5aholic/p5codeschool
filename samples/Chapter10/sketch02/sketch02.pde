size(960, 540);
background(255);
noStroke();

// 原点を座標(100, 50)に移動
translate(100, 50);

// 原点に赤色の円を描画
fill(255, 0, 0);
ellipse(0, 0, 80, 80);

// 原点を座標(200, 100)に移動
translate(100, 50);

// 原点に緑色の円を描画
fill(0, 255, 0);
ellipse(0, 0, 80, 80);

// 原点を座標(300, 150)に移動
translate(100, 50);

// 原点に青色の円を描画
fill(0, 0, 255);
ellipse(0, 0, 80, 80);
saveFrame("sketch02.jpg");