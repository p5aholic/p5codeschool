size(960, 540);
background(255);
colorMode(HSB, 360, 100, 100);

int boxW = width/10;
int boxH = height/10;
int brightness = 0;

noStroke();
for (int y = 0; y < 10; y++) {
  for (int x = 0; x < 10; x++) {
    fill(210, 80, brightness);
    rect(x*boxW, y*boxH, boxW, boxH);
    brightness++;
  }
}