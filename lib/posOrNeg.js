"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.posOrNeg = void 0;

/**
 * Returns a positive or negative number, to help in random positive or negative sign.
 * @returns {Number} Either -1 or 1.
 * @example
 * // Returns either -1 or 1
 * posOrNeg()
 */
var posOrNeg = function posOrNeg() {
  return Math.random() >= 0.5 ? 1 : -1;
};

exports.posOrNeg = posOrNeg;