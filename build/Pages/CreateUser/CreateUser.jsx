"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var Styles_1 = __importDefault(require("./Styles"));
var UserForm_1 = __importDefault(require("../../components/UserForm/UserForm"));
var CreateUser = function (_a) {
    var submitUser = _a.submitUser;
    var classes = Styles_1.default();
    // const ref = useRef(null);
    var ref = react_1.useRef(document.createElement('form'));
    var handleSubmit = function (newUser) {
        submitUser(newUser);
    };
    return (<div>
      <Typography_1.default variant="h2">New User</Typography_1.default>
      <div className={classes.userFormContainer}>
        <UserForm_1.default user={null} editMade={null} submit={handleSubmit} ref={ref}/>
      </div>
      <Button_1.default variant="contained" color="primary" onClick={function () { return ref.current.sendForm(); }}>
        Submit New User
      </Button_1.default>
    </div>);
};
exports.default = CreateUser;
//# sourceMappingURL=CreateUser.jsx.map