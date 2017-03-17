int NUM_COLS = 100;
int NUM_ROWS = 100;
int NUM_BUCKETS = NUM_COLS * NUM_COLS;
float BUCKET_DRAW_SIZE = 8;

Grid theGrid = new Grid();

void setup() {
  size(1000, 600);
}

void draw() {
  background(0);
  theGrid.update();
  theGrid.draw();
}

class Bucket {
  float MIN_AMOUNT = 0.01;
  float MIN_MUTATION = 0.01;
  float MAX_MUTATION = 1.0;
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

  void randomize() {
    gA = random(0.0, 4.0);
    gB = random(MIN_AMOUNT, 1.0);
    gC = random(MIN_MUTATION, MAX_MUTATION);
    amount = 1.0;
  }

  void mutate() {
    float dirMutRate = gC * random(-1.5, 1.5);
    float amtMutRate = gC * random(-0.3, 0.3);
    float rateMutRate = gC * random(-0.3, 0.3);

    gA += dirMutRate;
    gB += amtMutRate;
    gC += rateMutRate;

    if (gA > 4.0) {
      gA = gA % 4.0;
    } else if (gA < 0.0) {
      gA = 4.0 - abs(gA % 4.0);
    }

    if (gB > 1.0) {
      gB = gB % 1.0;
    } else if (gB < 0.0) {
      gB = 1.0 - abs(gB % 1.0);
    }

    if (gB < MIN_AMOUNT) {
      gB = MIN_AMOUNT;
    }

    if (gC > 1.0) {
      gC = gC % 1.0;
    } else if (gC < 0.0) {
      gC = 1.0 - abs(gC % 1.0);
    }

    if (gC < MIN_MUTATION) {
      gC = 0.1;
    }
  }
}

class Grid {
  Bucket[] buckets = new Bucket[NUM_BUCKETS];

  Grid() {
    initBuckets();
  }

  Bucket getBucket(int xP, int yP) {
    int i = yP * NUM_COLS + xP;
    return buckets[i];
  }

  void draw() {
    for (int i = 0; i < NUM_BUCKETS; i++) {
      Bucket tB = buckets[i];
      stroke(30);
      fill(tB.amount * 255.0);
      rect(tB.x * BUCKET_DRAW_SIZE, tB.y * BUCKET_DRAW_SIZE, BUCKET_DRAW_SIZE, BUCKET_DRAW_SIZE);
      tB.mutate();
    }
  }

  float geneticDifference(Bucket B1, Bucket B2) {
    return abs(B1.gA - B2.gA) + abs(B1.gB - B2.gB) + abs(B1.gC - B2.gC);
  }

  void initBuckets() {
    int tX, tY;
    for (int i = 0; i < NUM_BUCKETS; i++) {
      tX = i % NUM_COLS;
      tY = floor(i / NUM_COLS);
      buckets[i] = new Bucket(tX, tY);
    }
  }

  void update() {
    Bucket tB;
    Bucket dB;
    Bucket nB;
    float dumpAmount;

    for (int ix = 0; ix < NUM_COLS; ix++) {
      for (int iy = 0; iy < NUM_ROWS; iy++) {
        tB = getBucket(ix, iy);
        if (tB.amount < EPSILON) {
          continue;
        } else if (tB.amount > 1.0) {
          tB.mutate();
        }
        // Do bucket computation
        // Figure out which direction to dump
        // direction : 0-1 = up, 1-2 = right, 2-3 = down, 3-4 = left
        int newX = tB.x;
        int newY = tB.y;
        if (tB.gA < 1.0) {
          // up
          newY++;
        } else if (tB.gA < 2.0) {
          // right
          newX++;
        } else if (tB.gA < 3.0) {
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
        if (random(1.0) > 0.1) {
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
