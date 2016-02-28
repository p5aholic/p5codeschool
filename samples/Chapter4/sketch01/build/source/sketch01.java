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

public class sketch01 extends PApplet {
  public void setup() {

background(255);

noStroke();
fill(30);
ellipse(125, 88, 80, 80);
ellipse(375, 88, 80, 80);
ellipse(625, 88, 80, 80);
saveFrame("sketch01.jpg");
    noLoop();
  }

  public void settings() { size(750, 175); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "sketch01" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
