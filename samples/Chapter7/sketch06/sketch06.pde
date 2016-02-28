size(750, 350);
background(255);
colorMode(HSB, 360, 100, 100);

int boxW = width/10;  // 長方形の幅
int boxH = height/10; // 長方形の高さ
int brightness = 0;   // 明度

noStroke();
for (int x = 0; x < 10; x++) {
  for (int y = 0; y < 10; y++) {
    fill(210, 80, brightness);
    rect(x*boxW, y*boxH, boxW, boxH);
    // 徐々に明るくしていく
    brightness++;
  }
}