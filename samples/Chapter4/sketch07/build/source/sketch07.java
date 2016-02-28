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

public class sketch07 extends PApplet {
  public void setup() {

background(255);

int red = color(200, 30, 30);
int green = color(30, 200, 30);
int blue = color(30, 30, 200);

noStroke();
// red\u3092\u4f7f\u7528
fill(red);
ellipse(125, 88, 120, 120);
// green\u3092\u4f7f\u7528
fill(green);
ellipse(375, 88, 120, 120);
// blue\u3092\u4f7f\u7528
fill(blue);
ellipse(625, 88, 120, 120);
saveFrame("sketch07.jpg");
    noLoop();
  }

  public void settings() { size(750, 175); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "sketch07" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
