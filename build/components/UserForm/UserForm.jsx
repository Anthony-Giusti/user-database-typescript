"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var pickers_1 = require("@material-ui/pickers");
var isAlpha_1 = __importDefault(require("validator/es/lib/isAlpha"));
var date_fns_1 = __importDefault(require("@date-io/date-fns"));
var BirthdayPicker_1 = __importDefault(require("../BirthdayPicker/BirthdayPicker"));
var birthdayDateToString_1 = __importDefault(require("../util/functions/birthdayDateToString"));
var birthdayStringToDate_1 = __importDefault(require("../util/functions/birthdayStringToDate"));
var createDateAndTimeString_1 = __importDefault(require("../util/functions/createDateAndTimeString"));
var sexIntToString_1 = __importDefault(require("../util/functions/sexIntToString"));
var sexStringToInt_1 = __importDefault(require("../util/functions/sexStringToInt"));
var Styles_1 = __importDefault(require("./Styles"));
var UserForm = react_1.forwardRef(function (props, ref) {
    var _a = react_1.useState(props.user ? sexStringToInt_1.default(props.user.sex) : 3), userSex = _a[0], setUserSex = _a[1];
    var _b = react_1.useState(props.user ? birthdayStringToDate_1.default(props.user.birthday) : new Date()), userBirthday = _b[0], setUserBirthday = _b[1];
    var classes = Styles_1.default();
    var _c = react_1.useState(false), firstNameError = _c[0], setFirstNameError = _c[1];
    var _d = react_1.useState(false), lastNameError = _d[0], setLastNameError = _d[1];
    var firstNameField;
    var lastNameField;
    var userSexChange = function (e) {
        setUserSex(sexStringToInt_1.default(e.target.value));
        if (props.editMade) {
            props.editMade();
        }
    };
    var userBirthdayChange = function (newBirthday) {
        setUserBirthday(newBirthday);
        if (props.editMade) {
            props.editMade();
        }
    };
    var validateForm = function () {
        var errorsFound = false;
        if (!isAlpha_1.default(firstNameField.value)) {
            setFirstNameError(true);
            errorsFound = true;
        }
        else {
            setFirstNameError(false);
        }
        if (!isAlpha_1.default(lastNameField.value)) {
            setLastNameError(true);
            errorsFound = true;
        }
        else {
            setLastNameError(false);
        }
        var now = createDateAndTimeString_1.default();
        if (!errorsFound) {
            var editedUser = {
                _id: props.user ? props.user._id : '',
                firstName: firstNameField.value,
                lastName: lastNameField.value,
                sex: sexIntToString_1.default(userSex),
                birthday: birthdayDateToString_1.default(userBirthday),
                created: props.user ? props.user.created : now,
                lastEdit: now,
            };
            props.submit(editedUser);
        }
    };
    react_1.useImperativeHandle(ref, function () { return ({
        sendForm: function () {
            validateForm();
        },
    }); });
    return (<>
      <div className={classes.userFields}>
        <core_1.TextField 
    // className={classes.userField}
    variant="outlined" error={firstNameError} onChange={props.editMade ? props.editMade : undefined} 
    // onChange={props.editMade}
    label="First Name" helperText={firstNameError ? 'Must contain only letters' : ''} defaultValue={props.user ? props.user.firstName : ''} inputRef={function (ref) {
            firstNameField = ref;
        }}/>

        <core_1.TextField 
    // className={classes.userField}
    variant="outlined" error={lastNameError} onChange={props.editMade ? props.editMade : undefined} 
    // onChange={props.editMade}
    label="Last Name" helperText={lastNameError ? 'Must contain only letters' : ''} defaultValue={props.user ? props.user.lastName : ''} inputRef={function (ref) {
            lastNameField = ref;
        }}/>

        <core_1.FormControl /* className={classes.userField} */>
          <core_1.TextField label="Sex" variant="outlined" onChange={userSexChange} value={userSex} select>
            <core_1.MenuItem value={1}>M</core_1.MenuItem>
            <core_1.MenuItem value={2}>F</core_1.MenuItem>
            <core_1.MenuItem value={3}>NB</core_1.MenuItem>
          </core_1.TextField>
        </core_1.FormControl>

        <pickers_1.MuiPickersUtilsProvider utils={date_fns_1.default}>
          <BirthdayPicker_1.default 
    // className={classes.userField}
    userBirthday={userBirthday} userBirthdayChange={userBirthdayChange}/>
        </pickers_1.MuiPickersUtilsProvider>
      </div>
    </>);
});
UserForm.displayName = 'UserForm';
exports.default = UserForm;
//# sourceMappingURL=UserForm.jsx.map