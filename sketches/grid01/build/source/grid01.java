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

public class grid01 extends PApplet {

float space = 20;

public void setup() {
  
  
  rectMode(CENTER);
  noLoop();
}

public void draw() {
  background(0xfff5f5f5);

  noFill();

  for (int y = 0; y < height; y += space) {
    for (int x = 0; x < width; x += space) {
      int j = PApplet.parseInt(random(9));
      if (j == 1) {
        ellipse(x+0.5f*space, y+0.5f*space, space, space);
      } else if (j == 2) {
        line(x, y+0.5f*space, x+0.5f*space, y+0.5f*space);
        line( x+0.5f*space, y+0.5f*space, x+0.5f*space, y);
      } else if (j == 3) {
        line(x+space, y+0.5f*space, x+0.5f*space, y+0.5f*space);
        line(x+0.5f*space, y+0.5f*space, x+0.5f*space, y+space);
      } else if (j == 4) {
        line(x, y+0.5f*space, x+0.5f*space, y+space);
        line(x+0.5f*space, y+space, x+space, y+0.5f*space);
      } else if (j == 5) {
        line(x+0.5f*space, y, x+space, y+0.5f*space);
        line(x+0.5f*space, y, x, y+0.5f*space);
      } else if (j == 6) {
        line(x+0.5f*space, y+0.5f*space, x+space, y+0.5f*space);
        line(x+0.5f*space, y+0.5f*space, x+0.5f*space, y);
      } else if (j == 7) {
        line(x+0.5f*space, y+0.5f*space, x, y+0.5f*space);
        line(x+0.5f*space, y+0.5f*space, x+0.5f*space, y+space);
      }
    }
  }
}
  public void settings() {  size(600, 600);  pixelDensity(displayDensity()); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "grid01" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
