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
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var Card_1 = __importDefault(require("@material-ui/core/Card"));
var CardContent_1 = __importDefault(require("@material-ui/core/CardContent"));
var CardActions_1 = __importDefault(require("@material-ui/core/CardActions"));
var Menu_1 = __importDefault(require("@material-ui/core/Menu"));
var MenuItem_1 = __importDefault(require("@material-ui/core/MenuItem"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var useMediaQuery_1 = __importDefault(require("@material-ui/core/useMediaQuery"));
var Divider_1 = __importDefault(require("@material-ui/core/Divider"));
var Delete_1 = __importDefault(require("@material-ui/icons/Delete"));
var Edit_1 = __importDefault(require("@material-ui/icons/Edit"));
var MoreVert_1 = __importDefault(require("@material-ui/icons/MoreVert"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var styles_1 = require("@material-ui/core/styles");
var Styles_1 = __importDefault(require("./Styles"));
var User = function (_a) {
    var user = _a.user, openEditModal = _a.openEditModal, handleRemoveUser = _a.handleRemoveUser;
    var _b = react_1.useState(null), anchorEl = _b[0], setAnchorEl = _b[1];
    var classes = Styles_1.default();
    var theme = styles_1.useTheme();
    var mdDevice = useMediaQuery_1.default(theme.breakpoints.up('md'));
    var smDevice = useMediaQuery_1.default(theme.breakpoints.down('sm'));
    var handleExpandedMenuOpen = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleExpandedMenuClose = function () {
        setAnchorEl(null);
    };
    return (<Card_1.default elevation={1} className={classes.userMain}>
      <CardContent_1.default className={classes.userInfo}>
        <span className={classes.infoCell + " " + classes.name}>
          <Typography_1.default className={classes.userText}>{user.firstName}</Typography_1.default>
        </span>

        <Divider_1.default orientation="vertical" flexItem/>

        <span className={classes.infoCell + " " + classes.name}>
          <Typography_1.default className={classes.userText}>{user.lastName}</Typography_1.default>
        </span>

        <Divider_1.default orientation="vertical" flexItem/>

        <span className={classes.infoCell + " " + classes.sex}>
          <Typography_1.default>{user.sex}</Typography_1.default>
        </span>

        <Divider_1.default orientation="vertical" flexItem/>

        <span className={classes.infoCell + " " + classes.birthday}>
          <Typography_1.default>{user.birthday}</Typography_1.default>
        </span>
      </CardContent_1.default>

      <Divider_1.default orientation="vertical" flexItem/>

      <CardActions_1.default className={classes.userButtons}>
        {mdDevice && (<>
            <IconButton_1.default size="small" onClick={function () { return openEditModal(user); }}>
              <Edit_1.default />
            </IconButton_1.default>
            <IconButton_1.default size="small" onClick={function () { return handleRemoveUser(user); }}>
              <Delete_1.default />
            </IconButton_1.default>
          </>)}
        {smDevice && (<>
            <IconButton_1.default onClick={handleExpandedMenuOpen} size="small">
              <MoreVert_1.default />
            </IconButton_1.default>
          </>)}
        <Menu_1.default anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleExpandedMenuClose}>
          <MenuItem_1.default>
            <Button_1.default startIcon={<Edit_1.default />} size="small" onClick={function () { return handleRemoveUser(user); }}>
              Delete User
            </Button_1.default>
          </MenuItem_1.default>
          <MenuItem_1.default>
            <Button_1.default startIcon={<Delete_1.default />} size="small" onClick={function () { return openEditModal(user); }}>
              Edit User
            </Button_1.default>
          </MenuItem_1.default>
        </Menu_1.default>
      </CardActions_1.default>
    </Card_1.default>);
};
exports.default = User;
//# sourceMappingURL=User.jsx.map