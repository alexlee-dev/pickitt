"use strict";
/**
 * Gets a random number between 0 and a `max`.
 * @param {Number} max A number as a maximum boundary.
 * @returns {Number} A number between 0 and the `max`.
 */
function randomBetween(max) {
    return Math.floor(Math.random() * max);
}
/**
 * Get a randomly chosen element from a group of elements.
 * @param {*} group A group of items to pick from.
 * @returns {Element | Undefined} A randomly chosen element from the group. Returns `undefined` if the group didn't have a length greater than 0.
 */
function pickitt(group) {
    if (Array.isArray(group)) {
        return group[randomBetween(group.length)];
    }
    else {
        throw "pickitt: Function expected array, and instead got " + typeof group + ".";
    }
}
module.exports = {
    pickitt: pickitt,
    randomBetween: randomBetween
};
