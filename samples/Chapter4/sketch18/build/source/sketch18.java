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

public class sketch18 extends PApplet {
  public void setup() {

colorMode(3, 360, 100, 100);
background(180, 80, 60);
saveFrame("sketch18.jpg");
    noLoop();
  }

  public void settings() { size(200, 200); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "sketch18" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
