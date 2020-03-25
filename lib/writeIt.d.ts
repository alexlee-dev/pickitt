/**
 * Writes JSON data to a file.
 * @param {string} path Path to file.
 * @param {string} data Data to be written.
 * @returns {Promise} Resolves after writing the file successfully.
 */
declare const writeIt: (path: string, data: string) => Promise<void>;
export default writeIt;
