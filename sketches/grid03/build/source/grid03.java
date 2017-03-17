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

public class grid03 extends PApplet {

int NUM_COLS = 100;
int NUM_ROWS = 100;
int NUM_BUCKETS = NUM_COLS * NUM_COLS;
float BUCKET_DRAW_SIZE = 8;

Grid theGrid = new Grid();

public void setup() {
  
}

public void draw() {
  background(0);
  theGrid.update();
  theGrid.draw();
}

class Bucket {
  float MIN_AMOUNT = 0.01f;
  float MIN_MUTATION = 0.01f;
  float MAX_MUTATION = 0.1f;
  int x, y;

  // Genes
  float gA; // direction : 0-1 = up, 1-2 = right, 2-3 = down, 3-4 = left
  float gB; // amount to dump : 0-1
  float gC; // tendency to mutate : 0-1

  float amount; // amount of juice in the Bucket

  Bucket(int xPos, int yPos) {
    x = xPos;
    y = yPos;
    amount = 0;
  }

  public void randomize() {
    gA = random(0.0f, 4.0f);
    gB = random(MIN_AMOUNT, 1.0f);
    gC = random(MIN_MUTATION, MAX_MUTATION);
    amount = 1.0f;
  }

  public void mutate() {
    float dirMutRate = gC * random(-1.5f, 1.5f);
    float amtMutRate = gC * random(-0.3f, 0.3f);
    float rateMutRate = gC * random(-0.3f, 0.3f);

    gA += dirMutRate;
    gB += amtMutRate;
    gC += rateMutRate;

    if (gA > 4.0f) {
      gA = gA % 4.0f;
    } else if (gA < 0.0f) {
      gA = 4.0f - abs(gA % 4.0f);
    }

    if (gB > 1.0f) {
      gB = gB % 1.0f;
    } else if (gB < 0.0f) {
      gB = 1.0f - abs(gB % 1.0f);
    }

    if (gB < MIN_AMOUNT) {
      gB = MIN_AMOUNT;
    }

    if (gC > 1.0f) {
      gC = gC % 1.0f;
    } else if (gC < 0.0f) {
      gC = 1.0f - abs(gC % 1.0f);
    }

    if (gC < MIN_MUTATION) {
      gC = 0.1f;
    }
  }
}

class Grid {
  Bucket[] buckets = new Bucket[NUM_BUCKETS];

  Grid() {
    initBuckets();
  }

  public Bucket getBucket(int xP, int yP) {
    int i = yP * NUM_COLS + xP;
    return buckets[i];
  }

  public void draw() {
    for (int i = 0; i < NUM_BUCKETS; i++) {
      Bucket tB = buckets[i];
      stroke(30);
      fill(tB.amount * 255.0f);
      rect(tB.x * BUCKET_DRAW_SIZE, tB.y * BUCKET_DRAW_SIZE, BUCKET_DRAW_SIZE, BUCKET_DRAW_SIZE);
      tB.mutate();
    }
  }

  public float geneticDifference(Bucket B1, Bucket B2) {
    return abs(B1.gA - B2.gA) + abs(B1.gB - B2.gB) + abs(B1.gC - B2.gC);
  }

  public void initBuckets() {
    int tX, tY;
    for (int i = 0; i < NUM_BUCKETS; i++) {
      tX = i % NUM_COLS;
      tY = floor(i / NUM_COLS);
      buckets[i] = new Bucket(tX, tY);
    }
  }

  public void update() {
    Bucket tB;
    Bucket dB;
    Bucket nB;
    float dumpAmount;

    for (int ix = 0; ix < NUM_COLS; ix++) {
      for (int iy = 0; iy < NUM_ROWS; iy++) {
        tB = getBucket(ix, iy);
        if (tB.amount < EPSILON) {
          continue;
        } else if (tB.amount > 1.0f) {
          tB.mutate();
        }
        // Do bucket computation
        // Figure out which direction to dump
        // direction : 0-1 = up, 1-2 = right, 2-3 = down, 3-4 = left
        int newX = tB.x;
        int newY = tB.y;
        if (tB.gA < 1.0f) {
          // up
          newY++;
        } else if (tB.gA < 2.0f) {
          // right
          newX++;
        } else if (tB.gA < 3.0f) {
          // down
          newY--;
        } else {
          // left
          newX--;
        }

        newX = abs(newX % NUM_COLS);
        newY = abs(newY % NUM_ROWS);

        dB = getBucket(newX, newY); // destination bucket
        // nB = mostDifferentNeighbor(tB); // most genetically different neighbor
        nB = getBucket((int)random(NUM_COLS), (int)random(NUM_ROWS));
        // if (random(1.0) > 0.1 && geneticDifference(tB, dB) < geneticDifference(tB, nB)) {
        //   dB = nB;
        // }
        if (random(1.0f) > 0.1f) {
          dB = nB;
        }

        // if new location amount = 0, copy genes, then mutate
        if (dB.amount < EPSILON) {
          dB.amount = 0;
          dB.gA = tB.gA;
          dB.gB = tB.gB;
          dB.gC = tB.gC;
          dB.mutate();
        }
        // Figure out how much to dump
        dumpAmount = tB.amount * tB.gB;
        tB.amount -= dumpAmount;
        dB.amount += dumpAmount;
      }
    }
  }
}
  public void settings() {  size(1000, 600); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "grid03" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
