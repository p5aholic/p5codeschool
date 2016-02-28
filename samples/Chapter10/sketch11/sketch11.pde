size(750, 350);
background(255);
stroke(0);
strokeWeight(5);
rectMode(CENTER);

// 現在の座標情報を保存
pushMatrix();
// 原点を画面中心に移動
translate(200, height/2);
// 回転と拡大
rotate(radians(45));
scale(2.0);
fill(255, 0, 0);
// 原点に長方形と点を描く
rect(0, 0, 100, 40);
point(0, 0);
// 座標情報を変換前に戻す
popMatrix();

pushMatrix();
translate(width/2, height/2);
// 回転と拡大
rotate(radians(-45));
scale(1.5, 2.0);
fill(0, 255, 0);
rect(0, 0, 100, 40);
point(0, 0);
popMatrix();

pushMatrix();
translate(500, height/2);
// 回転と拡大
rotate(radians(90));
scale(3.0);
fill(0, 0, 255);
rect(0, 0, 100, 40);
point(0, 0);
popMatrix();
saveFrame("sketch11.jpg");