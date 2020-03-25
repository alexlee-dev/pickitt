import { promises } from "fs";

/**
 * Reads a file and returns as parsed JSON.
 * @param {String} path - Path to file to be read.
 * @returns {Promise} Resolves with JSON of the file.
 */
const readIt = <T = object | any[]>(path: string): Promise<T> =>
  new Promise(async (resolve, reject) => {
    try {
      const data: Buffer = await promises.readFile(path);
      resolve(JSON.parse(data.toString()));
    } catch (e) {
      reject(e);
    }
  });

export default readIt;
