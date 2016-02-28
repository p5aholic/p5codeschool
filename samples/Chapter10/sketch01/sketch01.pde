size(750, 350);
background(255);
noStroke();

// 原点を画面中心に移動
translate(width/2, height/2);

// 座標(-200, -100)に赤色の円を描画
fill(255, 0, 0);
ellipse(-200, -100, 80, 80);

// 原点に緑色の円を描画
fill(0, 255, 0);
ellipse(0, 0, 80, 80);

// 座標(200, 100)に青色の円を描画
fill(0, 0, 255);
ellipse(200, 100, 80, 80);
saveFrame("sketch01.jpg");