/**
 * GroupItem - Item retrieved from Group using randItem().
 */
type GroupItem = object | [] | number | string;

/**
 * Group - Array used in randItem().
 */
type Group = [];

/**
 * Returns a random item from an array.
 * @param {Array} group Array of items.
 * @returns {GroupItem} Random item from the group.
 */
const randItem = (group: Group): GroupItem => {
  if (Array.isArray(group)) {
    return group[Math.floor(Math.random() * group.length)];
  } else {
    throw `pickitt: Function expected array, and instead got ${typeof group}.`;
  }
};

export default randItem;
