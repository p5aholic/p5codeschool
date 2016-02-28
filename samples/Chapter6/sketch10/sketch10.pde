size(750, 350);
background(255);
noStroke();
fill(30);

int r = (int)random(5);

// rの値で分岐する
switch(r) {
  // 0の場合
  case 0:
    ellipse(width/2, height/2, 150, 150);
    break;
  // 1の場合
  case 1:
    rect(width/2-75, height/2-75, 150, 150);
    break;
  // それ以外の場合
  default:
    background(random(255), random(255), random(255));
    break;
}