/**
 * Reads a file and returns as parsed JSON.
 * @param {String} path - Path to file to be read.
 * @returns {Promise} Resolves with JSON of the file.
 */
declare const readIt: <T = object | any[]>(path: string) => Promise<T>;
export default readIt;
