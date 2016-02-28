// b1に対して呼び出されたupdate関数
void update() {
  b1.x += b1.vx;
  b1.y += b1.vy;
  if (b1.x-b1.radius <= 0 || b1.x+b1.radius >= width) {
    b1.vx *= -1;
  }
  if (b1.y-b1.radius <= 0 || b1.y+b1.radius >= height) {
    b1.vy *= -1;
  }
}