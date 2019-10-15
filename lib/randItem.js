"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randItem = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var randItem = function randItem(group) {
  if (Array.isArray(group)) {
    return group[Math.floor(Math.random() * group.length)];
  } else {
    throw "pickitt: Function expected array, and instead got ".concat(_typeof(group), ".");
  }
};

exports.randItem = randItem;