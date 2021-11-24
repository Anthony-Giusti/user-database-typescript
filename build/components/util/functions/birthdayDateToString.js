"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var date_and_time_1 = __importDefault(require("date-and-time"));
var brithdayDateToString = function (birthday) {
    return date_and_time_1.default.format(birthday, 'MM-DD-YYYY');
};
exports.default = brithdayDateToString;
//# sourceMappingURL=birthdayDateToString.js.map