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
var Divider_1 = __importDefault(require("@material-ui/core/Divider"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var ExpandMore_1 = __importDefault(require("@material-ui/icons/ExpandMore"));
var ExpandLess_1 = __importDefault(require("@material-ui/icons/ExpandLess"));
var useMediaQuery_1 = __importDefault(require("@material-ui/core/useMediaQuery"));
var styles_1 = require("@material-ui/core/styles");
var UsersHeaderTools_1 = __importDefault(require("./UsersHeaderTools/UsersHeaderTools"));
var Styles_1 = __importDefault(require("./Styles"));
var SortButton_1 = __importDefault(require("../../../components/SortButton/SortButton"));
var UsersHeader = function (_a) {
    var handleSexFilter = _a.handleSexFilter, sortUsers = _a.sortUsers, userData = _a.userData, sexFilter = _a.sexFilter;
    var _b = react_1.useState(false), expandedHeader = _b[0], setExpandedHeader = _b[1];
    var _c = react_1.useState('_id'), selectedSortBtn = _c[0], setSelectedSortBtn = _c[1];
    var classes = Styles_1.default();
    var theme = styles_1.useTheme();
    var smDevice = useMediaQuery_1.default(theme.breakpoints.down('sm'));
    var handleSort = function (order, list) {
        sortUsers(order, list);
        setSelectedSortBtn(list);
    };
    var handleExpandHeader = function () {
        setExpandedHeader(function (prev) { return !prev; });
    };
    return (<div className={classes.usersHeaderMain}>
      <div className={classes.usersHeader}>
        <span className={classes.usersDivders}>
          <div className={classes.name}>
            <Typography_1.default className={classes.columnName}>First Name</Typography_1.default>
            <SortButton_1.default handleSort={handleSort} toBeSorted="firstName" selectedSortBtn={selectedSortBtn}/>
          </div>

          <Divider_1.default orientation="vertical" flexItem/>

          <div className={classes.name}>
            <Typography_1.default className={classes.columnName}>Last Name</Typography_1.default>
            <SortButton_1.default handleSort={handleSort} toBeSorted="lastName" selectedSortBtn={selectedSortBtn}/>
          </div>

          <Divider_1.default orientation="vertical" flexItem/>

          <div className={classes.sex}>
            <Typography_1.default className={classes.columnName}>Sex</Typography_1.default>
          </div>

          <Divider_1.default light orientation="vertical" flexItem/>

          <div className={classes.birthday}>
            <Typography_1.default className={classes.columnName}>
              {smDevice ? 'Birth Day' : 'Birthday'}
            </Typography_1.default>
            <SortButton_1.default handleSort={handleSort} toBeSorted="birthday" selectedSortBtn={selectedSortBtn}/>
          </div>
        </span>

        <Divider_1.default orientation="vertical" flexItem/>

        <span className={classes.dropDownBtnContainer}>
          <IconButton_1.default className={classes.dropDownBtn} size="small" onClick={handleExpandHeader}>
            {expandedHeader ? (<ExpandLess_1.default fontSize={smDevice ? 'default' : 'large'}/>) : (<ExpandMore_1.default fontSize={smDevice ? 'default' : 'large'}/>)}
          </IconButton_1.default>
        </span>
      </div>
      {expandedHeader && (<UsersHeaderTools_1.default handleSexFilter={handleSexFilter} userData={userData} sexFilter={sexFilter}/>)}
    </div>);
};
exports.default = UsersHeader;
//# sourceMappingURL=UsersHeader.jsx.map