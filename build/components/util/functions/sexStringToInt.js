"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sexStringToInt = function (sex) {
    switch (sex) {
        case 'M':
            return 1;
        case 'F':
            return 2;
        default:
            return 3;
    }
};
exports.default = sexStringToInt;
//# sourceMappingURL=sexStringToInt.js.map