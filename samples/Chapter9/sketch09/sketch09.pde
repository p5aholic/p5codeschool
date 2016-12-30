void setup() {
  size(960, 540);
}

void draw() {
  background(220);
}

void keyPressed() {
  switch(key) {
    case '1': cursor(ARROW); break;
    case '2': cursor(CROSS); break;
    case '3': cursor(HAND); break;
    case '4': cursor(MOVE); break;
    case '5': cursor(TEXT); break;
    case '6': cursor(WAIT); break;
    case '7': noCursor(); break;
  }
}