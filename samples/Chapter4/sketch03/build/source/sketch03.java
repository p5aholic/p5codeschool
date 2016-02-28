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

background(255);

// \u5909\u6570diameter\u3092\u521d\u671f\u5024150\u3067\u4f5c\u6210
int diameter = 150;

noStroke();
fill(30);
ellipse(125, 88, diameter, diameter);
ellipse(375, 88, diameter, diameter);
ellipse(625, 88, diameter, diameter);
saveFrame("sketch03.jpg");
    noLoop();
  }

  public void settings() { size(750, 175); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "sketch03" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
