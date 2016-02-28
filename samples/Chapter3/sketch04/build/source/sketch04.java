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

public class sketch04 extends PApplet {
  public void setup() {

background(0xffA0A5A4);

stroke(0xff2A7968);
strokeWeight(4);
fill(0xff2D80A5);
ellipse(375, 175, 150, 150);
saveFrame("sketch04.jpg");
    noLoop();
  }

  public void settings() { size(750, 350); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "sketch04" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
