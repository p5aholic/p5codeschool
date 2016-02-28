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

public class sketch08 extends PApplet {
  public void setup() {

background(255);

int red = color(200, 30, 30);
int green = color(30, 200, 30);
int blue = color(30, 30, 200);
int diameter = 80;

noStroke();
// \u8d64\u8272\u306e\u5186
fill(red);
ellipse(width/2-1.5f*diameter, height/2, 2*diameter, 2*diameter);
// \u7dd1\u8272\u306e\u5186
fill(green);
ellipse(width/2, height/2, diameter, diameter);
// \u9752\u8272\u306e\u5186
fill(blue);
ellipse(width/2+1.5f*diameter, height/2, 2*diameter, 2*diameter);
saveFrame("sketch08.jpg");
    noLoop();
  }

  public void settings() { size(750, 175); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "sketch08" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
