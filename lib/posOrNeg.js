"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns a positive or negative number, to help in random positive or negative sign.
 * @returns {Number} Either -1 or 1.
 */
var posOrNeg = function () { return (Math.random() >= 0.5 ? 1 : -1); };
exports.default = posOrNeg;
