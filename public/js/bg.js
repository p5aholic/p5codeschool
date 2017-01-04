"use strict";

var width = window.innerWidth * window.devicePixelRatio;
var height = window.innerHeight * window.devicePixelRatio;
var numX, numY;
var spaceX = 20, spaceY = 20;
var $window = $(window);
var scrollValue = 0;
var needUpdate = true;

init();
function init() {
  numX = Math.ceil(width / spaceX);
  numY = Math.ceil(height / spaceY);
}

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

// draw a circle
graphics.lineStyle(0);
graphics.beginFill(0x000000, 1);
for (var x = 0; x < numX; x++) {
  for (var y = 0; y < numY; y++) {
    var posX = x * spaceX;
    var posY = y * spaceY;
    graphics.drawCircle(posX, posY, 0.5);
  }
}
graphics.endFill();

stage.addChild(graphics);

// let's create a moving shape
// var thing = new PIXI.Graphics();
// stage.addChild(thing);
// thing.position.x = 620/2;
// thing.position.y = 380/2;
//
// var count = 0;
animate();

function animate() {
  // count += 0.1;
  // thing.clear();
  // thing.lineStyle(10, 0xff0000, 1);
  // thing.beginFill(0xffFF00, 0.5);
  // thing.moveTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count)* 20);
  // thing.lineTo( 120 + Math.cos(count) * 20, -100 + Math.sin(count)* 20);
  // thing.lineTo( 120 + Math.sin(count) * 20, 100 + Math.cos(count)* 20);
  // thing.lineTo( -120 + Math.cos(count)* 20, 100 + Math.sin(count)* 20);
  // thing.lineTo( -120 + Math.sin(count) * 20, -100 + Math.cos(count)* 20);
  // thing.rotation = count * 0.1;
  renderer.render(stage);
  // requestAnimationFrame(animate);
}
