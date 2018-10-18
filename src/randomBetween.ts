/**
 * Gets a random number between 0 and a `max`.
 * @param {Number} max A number as a maximum boundary.
 * @returns {Number} A number between 0 and the `max`.
 */
export function randomBetween(max: number) {
  return Math.floor(Math.random() * max)
}
