"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var pickers_1 = require("@material-ui/pickers");
var BirthdayPicker = function (_a) {
    var userBirthday = _a.userBirthday, userBirthdayChange = _a.userBirthdayChange;
    var handleDateChange = function (newBirthday) {
        userBirthdayChange(newBirthday);
    };
    return (<>
      <pickers_1.KeyboardDatePicker inputVariant="outlined" openTo="year" disableToolbar variant="dialog" format="MM/dd/yyyy" maxDate={new Date()} value={userBirthday} onChange={function () { return handleDateChange; }} KeyboardButtonProps={{
            'aria-label': 'change date',
        }}/>
    </>);
};
exports.default = BirthdayPicker;
//# sourceMappingURL=BirthdayPicker.jsx.map