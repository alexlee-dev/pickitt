"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var writeIt = function (path, data) {
    return new Promise(function (resolve, reject) {
        try {
            fs_1.writeFile(path, data, function (err) {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        }
        catch (e) {
            reject(e);
        }
    });
};
exports.default = writeIt;
