"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var date_and_time_1 = __importDefault(require("date-and-time"));
var createDateAndTimeString = function () {
    return date_and_time_1.default.format(new Date(), 'YYYY/MM/DD HH:mm:ss');
};
exports.default = createDateAndTimeString;
//# sourceMappingURL=createDateAndTimeString.js.map