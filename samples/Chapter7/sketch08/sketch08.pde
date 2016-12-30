size(960, 540);
background(255);

int boxW = width/10;
int boxH = height/10;
int brightness = 0;

for (int x = 0; x < 10; x++) {
  for (int y = 0; y < 10; y++) {
    // xが偶数のとき
    if (x % 2 == 0) {
      noStroke();
      fill(30);
    }
    // xが奇数のとき
    else {
      stroke(30);
      strokeWeight(2);
      noFill();
    }
    rect(x*boxW, y*boxH, boxW, boxH);
  }
}