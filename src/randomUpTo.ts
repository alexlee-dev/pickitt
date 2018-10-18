/**
 * Gets a random number between 0 and a `max`. Number returned will not be the upper bound.
 * @param {Number} max A number as a upper boundary. The number returned will never be this number, but will be between 0 and this number.
 * @returns {Number} A number between 0 and the `max`.
 * @example
 * // Returns either 0, 1, or 2.
 * randomUpTo(3)
 */
export function randomUpTo(max: number) {
  return Math.floor(Math.random() * max)
}
