'use strict'
/**
 * Checks if a `group` is similar to an array: if the `group` has a length greater than 0.
 * @param {*} group The group to be checked.
 * @returns {Boolean} true | false
 */
function isArray(group) {
  if (
    typeof group === 'string' ||
    typeof group === 'number' ||
    typeof group === 'boolean' ||
    typeof group === 'undefined' ||
    typeof group === 'function' ||
    group === null
  ) {
    return false
  } else {
    return group.length > 0
  }
}
/**
 * Gets a random number between 0 and a `max`.
 * @param {Number} max A number as a maximum boundary.
 * @returns {Number} A number between 0 and the `max`.
 */
function randomBetween(max) {
  return Math.floor(Math.random() * max)
}
/**
 * Get a randomly chosen element from a group of elements.
 * @param {*} group A group of items to pick from.
 * @returns {Element | Undefined} A randomly chosen element from the group. Returns `undefined` if the group didn't have a length greater than 0.
 */
function pickitt(group) {
  var array = isArray(group) ? group : undefined
  if (array) {
    var length_1 = array.length
    return length_1 > 0 ? array[randomBetween(length_1)] : undefined
  } else {
    throw 'pickit: Function expected array, and instead got ' +
      typeof group +
      '.'
  }
}
module.exports = {
  pickitt: pickitt,
  isArray: isArray,
  randomBetween: randomBetween
}
