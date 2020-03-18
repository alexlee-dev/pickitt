import { writeFile } from "fs";

const writeIt: Function = (path: string, data: JSON): Promise<Buffer> =>
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
