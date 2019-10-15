/**
 * Returns a positive or negative number, to help in random positive or negative sign.
 * @returns {Number} Either -1 or 1.
 * @example
 * // Returns either -1 or 1
 * posOrNeg()
 */
export const posOrNeg = () => (Math.random() >= 0.5 ? 1 : -1)
