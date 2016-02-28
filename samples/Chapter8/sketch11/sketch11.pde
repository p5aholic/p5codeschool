void setup() {
  boolean b = test3();
  println(b);
}

boolean test3() {
  int r = (int)random(5);
  if (r < 1) {
    return true;
  } else return false;
}