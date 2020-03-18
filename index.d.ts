// Type definitions for Pickitt
// Project: Pickitt
// Definitions by: Alex Lee <www.alexlee.dev>

/**
 * GroupItem - Item retrieved from Group using randItem().
 */
type GroupItem = object | [] | number | string;

/**
 * Group - Array used in randItem().
 */
type Group = [];

/**
 * Returns a positive or negative number, to help in random positive or negative sign.
 * @returns {Number} Either -1 or 1.
 */
export function posOrNeg(): number;

/**
 * Returns a random item from an array.
 * @param {array} group Array of items.
 * @returns {GroupItem} Random item from the group.
 */
export function randItem(group: Group): GroupItem;

/**
 * Reads a file and returns as parsed JSON.
 * @param {string} path - Path to file to be read.
 * @returns {Promise} Resolves with JSON of the file.
 */
export function readIt(path: string): Promise<JSON>;

/**
 * Displays a title in the center of the terminal.
 * @param {string} title Title to be disaplayed.
 * @returns {Promise} Resolves after logging to the console.
 */
export function titleScreen(title: string): Promise<void>;

/**
 * Writes JSON data to a file.
 * @param {string} path Path to file.
 * @param {JSON} data Data to be written.
 * @returns {Promise} Resolves after writing the file successfully.
 */
export function writeIt(path: string, data: JSON): Promise<void>;
