// b2に対して呼び出されたupdate関数
void update() {
  b2.x += b2.vx;
  b2.y += b2.vy;
  if (b2.x-b2.radius <= 0 || b2.x+b2.radius >= width) {
    b2.vx *= -1;
  }
  if (b2.y-b2.radius <= 0 || b2.y+b2.radius >= height) {
    b2.vy *= -1;
  }
}