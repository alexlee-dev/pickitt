import boxen, { Options as boxenOptions, BorderStyle } from "boxen";
import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";

/**
 * Blank style applied to Boxen.
 */
export const blankBoxenStyle: boxenOptions = {
  borderStyle: {
    topLeft: " ",
    topRight: " ",
    bottomLeft: " ",
    bottomRight: " ",
    horizontal: " ",
    vertical: " "
  },
  float: "center",
  padding: { top: 0, bottom: 0, right: 1, left: 1 }
};

/**
 * Default style applied to Boxen.
 */
export const defaultBoxenStyle: boxenOptions = {
  borderColor: "magentaBright",
  borderStyle: BorderStyle.Round,
  float: "center",
  padding: { top: 0, bottom: 0, right: 1, left: 1 }
};

/**
 * Uses Figlet to transform your text to ASCII.
 * @param {String} txt Text to be figlet-itized.
 * @param {Object} options Options object.
 * @returns {Promise} Resolves with text.
 */
const figletPromise: Function = (
  txt: string,
  options: object = {}
): Promise<string> =>
  new Promise((resolve, reject) =>
    figlet.text(
      txt,
      options,
      (error: undefined | object, result: undefined | string) => {
        if (error) {
          return reject(error);
        }

        resolve(result);
      }
    )
  );

const titleScreen: Function = (title: string) =>
  new Promise(async (resolve: Function, reject: Function) => {
    try {
      const text: string = await figletPromise(title, {
        font: "slant"
      });

      clear();
      console.log(boxen(chalk.blueBright(text), defaultBoxenStyle));
      resolve();
    } catch (e) {
      reject(e);
    }
  });

export default titleScreen;
