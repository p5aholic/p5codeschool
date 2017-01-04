"use strict";

var Util = {};

// module.exports = Util;

Util.random = function(a, b) {
  if (typeof a === "undefined") {
    return Math.random();
  } else if (typeof b === "undefined") {
    return Math.random() * a;
  } else {
    return a + Math.random() * (b - a);
  }
};

Util.constrain = function(value, low, high) {
  return Math.max(Math.min(value, high), low);
};

Util.map = function(value, start1, stop1, start2, stop2) {
  return ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
};
