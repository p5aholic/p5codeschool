import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class sketch03 extends PApplet {
  public void setup() {

background(255); // \u3053\u3053\u3067\u306f\u307e\u3060RGB\u30e2\u30fc\u30c9
// HSB\u30e2\u30fc\u30c9\u306b\u5909\u66f4
colorMode(HSB, 360, 100, 100, 100);
noStroke();

// Hue\u3092\uff15\u6bb5\u968e\u3067\u5909\u66f4
fill(0, 100, 100);
rect(0, 0, 150, 100);
fill(72, 100, 100);
rect(150, 0, 150, 100);
fill(144, 100, 100);
rect(300, 0, 150, 100);
fill(216, 100, 100);
rect(450, 0, 150, 100);
fill(288, 100, 100);
rect(600, 0, 150, 100);

// Saturation\u3092\uff15\u6bb5\u968e\u3067\u5909\u66f4
fill(200, 20, 100);
rect(0, 125, 150, 100);
fill(200, 40, 100);
rect(150, 125, 150, 100);
fill(200, 60, 100);
rect(300, 125, 150, 100);
fill(200, 80, 100);
rect(450, 125, 150, 100);
fill(200, 100, 100);
rect(600, 125, 150, 100);

// Brightness\u3092\uff15\u6bb5\u968e\u3067\u5909\u66f4
fill(150, 100, 20);
rect(0, 250, 150, 100);
fill(150, 100, 40);
rect(150, 250, 150, 100);
fill(150, 100, 60);
rect(300, 250, 150, 100);
fill(150, 100, 80);
rect(450, 250, 150, 100);
fill(150, 100, 100);
rect(600, 250, 150, 100);
saveFrame("sketch03.jpg");
    noLoop();
  }

  public void settings() { size(750, 350); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "sketch03" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
