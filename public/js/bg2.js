var sketch = function(p) {
  var cells = [];
  var cellSize = 25; // セル一個の大きさ
  var numX, numY;    // セルの列数と行数
  var cellColor;     // 生きているセルの色
  p.setup = function() {
    p.createCanvas(window.innerWidth, window.innerHeight);
    p.colorMode(p.HSB, 360, 100, 100, 100);
    p.noStroke();
    p.frameRate(1);
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
    cellColor = p.color(210, 20, 90);
  }
  
  p.draw = function() {
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
  };
  
  function Cell(x, y) {
    this.x = x + cellSize/2;
    this.y = y + cellSize/2;
    
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
    // 周りのセルの生存数をカウント
    var liveCount = 0;
    for (var i = 0, l = this.neighbours.length; i < l; i++) {
      // 周りのセルが生きているならカウントアップ
      if (this.neighbours[i].state === 1) {
        liveCount++;
      }
    }
    // もし自分が生きていて
    if (this.state === 1) {
      // もし周りのセルの生存数が2か3なら
      if (liveCount === 2 || liveCount === 3) {
        // 次フレームも生き残る
        this.nextState = 1;
      }
      // そうでなければ
      else {
        // 次フレームで死ぬ
        this.nextState = 0;
      }
    }
    // もし自分が死んでいて
    else {
      // もし周りのセルの生存数が3なら
      if (liveCount === 3) {
        // 次フレームで生き返る
        this.nextState = 1;
      }
      // そうでなければ
      else {
        // 次フレームも死んだまま
        this.nextState = 0;
      }
    }
  };
  
  Cell.prototype.drawCell = function() {
    // 状態を更新
    this.state = this.nextState;
    // 生きているなら
    if (this.state === 1) {
      // p.fill(cellColor);
      p.stroke(cellColor);
      p.strokeWeight(4);
      p.point(this.x, this.y);
      p.strokeWeight(1);
      if (this.neighbours[0].nextState === 1) {
        p.line(this.x, this.y, this.x, this.y - cellSize/2);
      }
      if (this.neighbours[2].nextState === 1) {
        p.line(this.x, this.y, this.x + cellSize/2, this.y);
      }
      if (this.neighbours[4].nextState === 1) {
        p.line(this.x, this.y, this.x, this.y + cellSize/2);
      }
      if (this.neighbours[6].nextState === 1) {
        p.line(this.x, this.y, this.x - cellSize/2, this.y);
      }
    }
  };
};

new p5(sketch, "BgCanvasContainer");
