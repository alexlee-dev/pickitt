"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomUpTo_1 = require("./randomUpTo");
/**
 * Get a randomly chosen element from a group of elements.
 * @param {*} group A group of items to pick from.
 * @returns {Element | Undefined} A randomly chosen element from the group. Returns `undefined` if the group didn't have a length greater than 0.
 */
function pickitt(group) {
    if (Array.isArray(group)) {
        return group[randomUpTo_1.randomUpTo(group.length)];
    }
    else {
        throw "pickitt: Function expected array, and instead got " + typeof group + ".";
    }
}
exports.pickitt = pickitt;
