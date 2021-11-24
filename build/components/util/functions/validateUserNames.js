"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isAlpha_1 = __importDefault(require("validator/es/lib/isAlpha"));
var validateUserNames = function (user) {
    var errors = {
        firstName: false,
        lastName: false,
    };
    if (!isAlpha_1.default(user.firstName)) {
        errors.firstName = true;
    }
    if (!isAlpha_1.default(user.lastName)) {
        errors.lastName = true;
    }
    return errors;
};
exports.default = validateUserNames;
//# sourceMappingURL=validateUserNames.js.map