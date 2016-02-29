float noise = 0.0;
float noiseStep = 0.05;

// シード値を設定して乱数を固定

noiseSeed(10);
for (int i = 0; i < 10; i++) {
  float n = noise(noise) * 100;
  println(n);
  noise += noiseStep;
}