import { writeFile } from "fs";

/**
 * Writes JSON data to a file.
 * @param {string} path Path to file.
 * @param {string} data Data to be written.
 * @returns {Promise} Resolves after writing the file successfully.
 */
const writeIt: Function = (path: string, data: string): Promise<void> =>
  new Promise((resolve: Function, reject: Function) => {
    try {
      writeFile(path, data, (err: Error) => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    } catch (e) {
      reject(e);
    }
  });

export default writeIt;
