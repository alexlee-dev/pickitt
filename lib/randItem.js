"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns a random item from an array.
 * @param {Array} group Array of items.
 * @returns {GroupItem} Random item from the group.
 */
var randItem = function (group) {
    if (Array.isArray(group)) {
        return group[Math.floor(Math.random() * group.length)];
    }
    else {
        throw "pickitt: Function expected array, and instead got " + typeof group + ".";
    }
};
exports.default = randItem;
