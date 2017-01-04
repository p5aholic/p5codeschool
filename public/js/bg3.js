var sketch = function(p) {
  var cells = [];
  var cellSize = 30; // セル一個の大きさ
  var numX, numY;    // セルの列数と行数
  var cellColor;     // 生きているセルの色
  var $window = $(window);
  var scrollValue = 0;
  var needUpdate = true;
  
  $window.on("scroll", function() {
    scrollValue = $window.scrollTop();
    needUpdate = true;
  });
  
  p.setup = function() {
    p.createCanvas(window.innerWidth, window.innerHeight);
    p.colorMode(p.HSB, 360, 100, 100, 100);
    p.noStroke();
    p.frameRate(60);
    // セルの列数と行数を、画面サイズとセルの大きさから計算
    numX = Math.floor(p.width / cellSize);
    numY = Math.floor(p.height / cellSize);
    initCells();
  };
  
  function initCells() {
    // 全てのセルを初期化
    cells = [];
    for (var x = 0; x < numX; x++) {
      cells[x] = [];
      for (var y = 0; y < numY; y++) {
        // cellSizeずつずらした座標を渡す
        cells[x][y] = new Cell(x * cellSize, y * cellSize);
      }
    }
    // 全てのセルのneighboursにセルを追加
    for (var x = 0; x < numX; x++) {
      for (var y = 0; y < numY; y++) {
        var above = y - 1; // 上
        var below = y + 1; // 下
        var left  = x - 1; // 左
        var right = x + 1; // 右
        // 上端と下端をつなげる
        if (above < 0) above = numY - 1;
        if (below === numY) below = 0;
        // 左端と右端をつなげる
        if (left < 0) left = numX - 1;
        if (right === numX) right = 0;
        // 時計回りにセル追加
        cells[x][y].addNeighbour(cells[x][above]);     // 0 上
        cells[x][y].addNeighbour(cells[right][above]); // 1 右上
        cells[x][y].addNeighbour(cells[right][y]);     // 2 右
        cells[x][y].addNeighbour(cells[right][below]); // 3 右下
        cells[x][y].addNeighbour(cells[x][below]);     // 4 下
        cells[x][y].addNeighbour(cells[left][below]);  // 5 左下
        cells[x][y].addNeighbour(cells[left][y]);      // 6 左
        cells[x][y].addNeighbour(cells[left][above]);  // 7 左上
      }
    }
    // 色をランダムに設定
    cellColor = p.color(210, 40, 90);
  }
  
  p.draw = function() {
    if (!needUpdate) return;
    
    p.background(0, 0, 100);
    
    // 全てのセルの次の状態を計算
    for (var x = 0; x < numX; x++) {
      for (var y = 0; y < numY; y++) {
        cells[x][y].calcNextState();
      }
    }
    // 全てのセルを描画
    for (var x = 0; x < numX; x++) {
      for (var y = 0; y < numY; y++) {
        cells[x][y].drawCell();
      }
    }
    
    needUpdate = false;
  };
  
  function Cell(x, y) {
    this.x = x + cellSize/2;
    this.y = y + cellSize/2;
    this.noiseValue;
    
    // 確率５０％で次の状態を生に
    if (p.random() > 0.5) {
      this.nextState = 1;
    }
    // 確率５０％で次の状態を死に
    else {
      this.nextState = 0;
    }
    this.state = this.nextState;
    this.neighbours = [];
  }
  
  // neighboursに自分の周りのセルを追加
  Cell.prototype.addNeighbour = function(cell) {
    this.neighbours.push(cell);
  };
  
  // 次の状態を計算する
  Cell.prototype.calcNextState = function() {
    this.noiseValue = p.noise(this.x * 0.006, this.y * 0.006, scrollValue * 0.01);
    if (this.noiseValue > 0.5) {
      this.nextState = 1;
    } else {
      this.nextState = 0;
    }
  };
  
  Cell.prototype.drawCell = function() {
    // 状態を更新
    this.state = this.nextState;
    // 生きているなら
    if (this.state === 1) {
      // p.fill(cellColor);
      p.stroke(cellColor, this.noiseValue);
      p.strokeWeight(4);
      p.point(this.x, this.y);
      p.strokeWeight(1);
      // if (this.neighbours[0].nextState === 1) { // 上
      //   p.line(this.x, this.y, this.x, this.y - cellSize/2);
      // }
      if (this.neighbours[1].nextState === 1) { // 右上
        p.line(this.x, this.y, this.x + cellSize/2, this.y - cellSize/2);
      }
      // if (this.neighbours[2].nextState === 1) { // 右
      //   p.line(this.x, this.y, this.x + cellSize/2, this.y);
      // }
      if (this.neighbours[3].nextState === 1) { // 右下
        p.line(this.x, this.y, this.x + cellSize/2, this.y + cellSize/2);
      }
      // if (this.neighbours[4].nextState === 1) { // 下
      //   p.line(this.x, this.y, this.x, this.y + cellSize/2);
      // }
      if (this.neighbours[5].nextState === 1) { // 左下
        p.line(this.x, this.y, this.x - cellSize/2, this.y + cellSize/2);
      }
      // if (this.neighbours[6].nextState === 1) { // 左
      //   p.line(this.x, this.y, this.x - cellSize/2, this.y);
      // }
      if (this.neighbours[7].nextState === 1) { // 左上
        p.line(this.x, this.y, this.x - cellSize/2, this.y - cellSize/2);
      }
    }
  };
};

new p5(sketch, "BgCanvasContainer");
