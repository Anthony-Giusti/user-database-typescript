"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
var react_1 = __importDefault(require("react"));
var Checkbox_1 = __importDefault(require("@material-ui/core/Checkbox"));
var FormControl_1 = __importDefault(require("@material-ui/core/FormControl"));
var FormControlLabel_1 = __importDefault(require("@material-ui/core/FormControlLabel"));
var FormGroup_1 = __importDefault(require("@material-ui/core/FormGroup"));
var FormLabel_1 = __importDefault(require("@material-ui/core/FormLabel"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var Styles_1 = __importDefault(require("./Styles"));
var birthdayStringToDate_1 = __importDefault(require("../../../../components/util/functions/birthdayStringToDate"));
var UsersHeaderTools = function (_a) {
    var handleSexFilter = _a.handleSexFilter, sexFilter = _a.sexFilter, userData = _a.userData;
    var handleChange = function (e) {
        handleSexFilter(e.target.value);
    };
    var handleGetAverage = function () {
        var now = new Date();
        var birthdaysInDays = userData.map(function (user) {
            var diffTime = Math.abs(now - birthdayStringToDate_1.default(user.birthday));
            var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays;
        });
        var sum = birthdaysInDays.reduce(function (a, b) { return a + b; }, 0);
        return Math.round(sum / birthdaysInDays.length / 365);
    };
    var classes = Styles_1.default();
    return (<div className={classes.toolsMain}>
      <div className={classes.toolsSection}>
        <FormControl_1.default component="fieldset">
          <FormLabel_1.default component="legend">Only Include</FormLabel_1.default>
          <FormGroup_1.default>
            <FormControlLabel_1.default onChange={handleChange} control={<Checkbox_1.default name="male"/>} value="M" label="Male" checked={sexFilter.includes('M')}/>
            <FormControlLabel_1.default control={<Checkbox_1.default name="female"/>} onChange={handleChange} value="F" label="Female" checked={sexFilter.includes('F')}/>
            <FormControlLabel_1.default control={<Checkbox_1.default name="non-binary"/>} onChange={handleChange} value="NB" label="Non-Binary" checked={sexFilter.includes('NB')}/>
          </FormGroup_1.default>
        </FormControl_1.default>
      </div>
      <div className={classes.toolsSection}>
        <Typography_1.default>Average User Age:</Typography_1.default>
        <Typography_1.default>{handleGetAverage()}</Typography_1.default>
      </div>
    </div>);
};
// UsersHeaderTools.propTypes = {
//   handleSexFilter: PropTypes.func,
//   sexFilter: PropTypes.array,
//   userData: PropTypes.array,
// };
exports.default = UsersHeaderTools;
//# sourceMappingURL=UsersHeaderTools.jsx.map