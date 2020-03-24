/**
 * GroupItem - Item retrieved from Group using randItem().
 */
declare type GroupItem = object | [] | number | string;
/**
 * Returns a random item from an array.
 * @param {Array} group Array of items.
 * @returns {GroupItem} Random item from the group.
 */
declare const randItem: (group: []) => GroupItem;
export default randItem;
