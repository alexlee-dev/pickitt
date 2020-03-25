import { Options as boxenOptions } from "boxen";
/**
 * Blank style applied to Boxen.
 */
export declare const blankBoxenStyle: boxenOptions;
/**
 * Default style applied to Boxen.
 */
export declare const defaultBoxenStyle: boxenOptions;
/**
 * Displays a title in the center of the terminal.
 * @param {String} title Title to be disaplayed.
 * @returns {Promise} Resolves after logging to the console.
 */
declare const titleScreen: (title: string) => Promise<void>;
export default titleScreen;
