void setup() {
  boolean b = test2();
  println(b);
}

boolean test2() {
  int r = (int)random(5);
  if (r < 1) {
    return true;
  } else if (r >= 1) {
    return false;
  }
}