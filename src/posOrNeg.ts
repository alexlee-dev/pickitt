/**
 * Returns a positive or negative number, to help in random positive or negative sign.
 * @returns {Number} Either -1 or 1.
 */
const posOrNeg: Function = (): number => (Math.random() >= 0.5 ? 1 : -1);

export default posOrNeg;
