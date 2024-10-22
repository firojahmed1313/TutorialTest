"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logTwo = function (x) {
    if (x instanceof Number) {
        return x.toString();
    }
    else {
        return x.length;
    }
};
var logTwo2 = function (x) {
    return x.toString !== undefined;
};
