"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randItem = function (group) {
    if (Array.isArray(group)) {
        return group[Math.floor(Math.random() * group.length)];
    }
    else {
        throw "pickitt: Function expected array, and instead got " + typeof group + ".";
    }
};
