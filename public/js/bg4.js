"use strict";

var sketch = function(p) {
  var numX, numY;
  var maxRadius = 15;
  var spaceX = 100, spaceY = 30;
  var padding = 50;
  var offsetX, offsetY;
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
    p.frameRate(30);
    init();
  };
  
  function init() {
    // 円の描画領域を計算
    var innerWidth = p.width - padding * 2;
    var innerHeight = p.height - padding * 2;
    // 円の数を計算
    numX = Math.ceil(innerWidth / spaceX);
    numY = Math.ceil(innerHeight / spaceY);
    // 左上角からのずれを計算
    offsetX = padding + (innerWidth % spaceX) / 2;
    offsetY = padding + (innerHeight % spaceY) / 2;
  }
  
  p.draw = function() {
    if (!needUpdate) return;
    
    p.background(0, 0, 100);
    
    var angleStepY = p.radians(90/numY);
    var angleStepX = p.radians(15);
    for (var x = 0; x < numX; x++) {
      for (var y = 0; y < numY; y++) {
        var angle = x * angleStepX + y * angleStepY + scrollValue * 0.003;
        var radius = maxRadius * Math.abs(Math.sin(angle));
        var hue = 200 + 20 * Math.sin(angle);
        var posX = offsetX + x * spaceX;
        var posY = offsetY + y * spaceY;
        p.noStroke();
        p.fill(hue, 20, 80);
        p.ellipse(posX, posY, radius * 2, radius * 2);
      }
    }
    
    needUpdate = false;
  };
};

new p5(sketch, "BgCanvasContainer");
