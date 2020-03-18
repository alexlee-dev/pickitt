import { readFile } from "fs";

/**
 * Reads a file and returns as parsed JSON.
 * @param {String} path - Path to file to be read.
 * @returns {Promise} Resolves with JSON object of the file.
 */
const readIt: Function = (path: string): Promise<object> =>
  new Promise((resolve, reject) => {
    try {
      readFile(path, (err: undefined | object, data: undefined | object) => {
        if (err) {
          return reject(err);
        }

        resolve(JSON.parse(data.toString()));
      });
    } catch (e) {
      reject(e);
    }
  });

export default readIt;