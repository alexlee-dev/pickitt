"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Gets a random number between 0 and a `max`.
 * @param {Number} max A number as a maximum boundary.
 * @returns {Number} A number between 0 and the `max`.
 */
function randomBetween(max) {
    return Math.floor(Math.random() * max);
}
exports.randomBetween = randomBetween;
