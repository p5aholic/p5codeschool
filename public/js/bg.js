"use strict";

var width = window.innerWidth * window.devicePixelRatio;
var height = window.innerHeight * window.devicePixelRatio;
var spaceX = 30, spaceY = 30;
var $window = $(window);
var scrollValue = 0;
var needUpdate = true;

$window.on("scroll", function() {
  scrollValue = $window.scrollTop();
  needUpdate = true;
});

PIXI.utils.skipHello();
var rendererOption = {
  antialias: true,
  resolution: window.devicePixelRatio,
};
var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, rendererOption);
renderer.backgroundColor = 0xffffff;
document.getElementById("BgCanvasContainer").appendChild(renderer.view);

var stage = new PIXI.Container();
var graphics = new PIXI.Graphics();

graphics.lineStyle(1, 0xf5f5f5, 1);
for (var x = 0; x < width; x += spaceX) {
  graphics.moveTo(x, 0);
  graphics.lineTo(x, height);
}
for (var y = 0; y < height; y += spaceY) {
  graphics.moveTo(0, y);
  graphics.lineTo(width, y);
}

graphics.lineStyle(0);
for (var x = 0; x < width; x += spaceX) {
  for (var y = 0; y < height; y += spaceY) {
    var r = Math.floor(Util.random(30));
    var radius;
    if (r == 0) {
      graphics.beginFill(0x21a3db, 1.0);
      radius = Util.random(1.0, 4.0);
    } else if (r == 1) {
      graphics.beginFill(0xdb2254, 1.0);
      radius = Util.random(1.0, 4.0);
    } else {
      graphics.beginFill(0x000000, Util.random(1.0));
      radius = Util.random(0.5, 1.0);
    }
    graphics.drawCircle(x, y, radius);
  }
}
graphics.endFill();

stage.addChild(graphics);

animate();

function animate() {
  renderer.render(stage);
  // requestAnimationFrame(animate);
}
