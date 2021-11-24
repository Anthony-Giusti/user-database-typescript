"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_1 = require("react-router");
var AppBar_1 = __importDefault(require("@material-ui/core/AppBar"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var Toolbar_1 = __importDefault(require("@material-ui/core/Toolbar"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var useMediaQuery_1 = __importDefault(require("@material-ui/core/useMediaQuery"));
var List_1 = __importDefault(require("@material-ui/icons/List"));
var Add_1 = __importDefault(require("@material-ui/icons/Add"));
var styles_1 = require("@material-ui/core/styles");
var Styles_1 = __importDefault(require("./Styles"));
var NavBar = function () {
    var history = react_router_1.useHistory();
    var location = react_router_1.useLocation();
    var classes = Styles_1.default();
    var theme = styles_1.useTheme();
    var mdDevice = useMediaQuery_1.default(theme.breakpoints.up('sm'));
    var handlePageChange = function (route) {
        history.push(route);
    };
    return (<AppBar_1.default className={classes.navBarMain}>
      <Toolbar_1.default className={classes.toolbar}>
        <Button_1.default className={classes.toolbarBtn} variant="contained" endIcon={!mdDevice ? null : <List_1.default />} onClick={function () { return handlePageChange('/'); }} color={location.pathname === '/' ? 'secondary' : 'default'}>
          <Typography_1.default>Users</Typography_1.default>
        </Button_1.default>
        <Button_1.default variant="contained" endIcon={!mdDevice ? null : <Add_1.default />} onClick={function () { return handlePageChange('/create-user'); }} color={location.pathname === '/create-user' ? 'secondary' : 'default'}>
          <Typography_1.default>Create New User</Typography_1.default>
        </Button_1.default>
      </Toolbar_1.default>
    </AppBar_1.default>);
};
exports.default = NavBar;
//# sourceMappingURL=NavBar.jsx.map