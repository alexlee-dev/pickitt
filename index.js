/**
 * Checks if a `group` is similar to an array: if the `group` has a length greater than 0.
 * @param {*} group The group to be checked.
 * @returns {Boolean} true | false
 */
function isArray(group) {
  return group.length > 0
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
  const array = isArray(group) ? group : undefined
  const length = array.length

  return length > 0 ? array[randomBetween(length)] : undefined
}

module.exports = {
  pickitt
}
