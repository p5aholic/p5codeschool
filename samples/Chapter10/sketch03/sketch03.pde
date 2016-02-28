size(750, 350);
background(255);
noStroke();

// 現在の座標情報を保存
pushMatrix();
// 原点を座標(width/2-200, height/2-100)に移動
translate(width/2-200, height/2-100);
// 原点に赤色の円を描画
fill(255, 0, 0);
ellipse(0, 0, 80, 80);
// 現在の座標情報を変換前に戻す
popMatrix();

pushMatrix();
// 原点を座標(width/2, height/2)に移動
translate(width/2, height/2);
// 原点に緑色の円を描画
fill(0, 255, 0);
ellipse(0, 0, 80, 80);
popMatrix();

pushMatrix();
// 原点を座標(width/2+200, height/2+100)に移動
translate(width/2+200, height/2+100);
// 原点に青色の円を描画
fill(0, 0, 255);
ellipse(0, 0, 80, 80);
popMatrix();
saveFrame("sketch03.jpg");