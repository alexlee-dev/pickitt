"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
/**
 * Reads a file and returns as parsed JSON.
 * @param {String} path - Path to file to be read.
 */
var readIt = function (path) {
    return new Promise(function (resolve, reject) {
        try {
            fs_1.readFile(path, function (err, data) {
                if (err) {
                    return reject(err);
                }
                resolve(JSON.parse(data.toString()));
            });
        }
        catch (e) {
            reject(e);
        }
    });
};
exports.default = readIt;
