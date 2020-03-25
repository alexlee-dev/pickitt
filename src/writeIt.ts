import { promises } from "fs";

/**
 * Writes JSON data to a file.
 * @param {string} path Path to file.
 * @param {string} data Data to be written.
 * @returns {Promise} Resolves after writing the file successfully.
 */
const writeIt = (path: string, data: string): Promise<void> =>
  new Promise(async (resolve, reject) => {
    try {
      await promises.writeFile(path, data);
      resolve();
    } catch (e) {
      reject(e);
    }
  });

export default writeIt;
