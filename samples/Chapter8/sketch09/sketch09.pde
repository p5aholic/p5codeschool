void setup() {
  boolean b = test1();
  println(b);
}

boolean test1() {
  int r = (int)random(5);
  if (r < 1) {
    return true;
  }
}