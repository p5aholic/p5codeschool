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

public class grid02 extends PApplet {

int numX, numY;
float spaceX = 20, spaceY = 20;

public void setup() {
  
  
  background(0xfff5f5f5);
  rectMode(CENTER);
  noLoop();
  numX = ceil(width / spaceX);
  numY = ceil(height / spaceY);
}

public void draw() {
  stroke(0xffeeeeee);
  strokeWeight(1);
  noFill();
  for (int y = 0; y < numY; y++) {
    float posY = y * spaceY;
    line(0, posY, width, posY);
  }
  for (int x = 0; x < numX; x++) {
    float posX = x * spaceX;
    line(posX, 0, posX, height);
  }

  noStroke();
  fill(0xff202020);
  float w = 2;
  for (int y = 0; y < height; y += spaceY) {
    for (int x = 0; x < width; x += spaceX) {
      float cx = x + spaceX/2;
      float cy = y + spaceY/2;
      int r = PApplet.parseInt(random(4));
      if (r == 0) {
        rect(cx, cy, spaceX, w);
      } else if (r == 1) {
        rect(cx, cy, w, spaceY);
      }
    }
  }
}
  public void settings() {  size(600, 600);  pixelDensity(displayDensity()); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "grid02" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
