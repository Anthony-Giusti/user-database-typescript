"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
exports.default = core_1.makeStyles(function (theme) { return ({
    btnActive: {
        color: theme.palette.secondary.main,
    },
    btnPassive: {
        color: theme.palette.getContrastText(theme.palette.primary.main),
    },
}); });
//# sourceMappingURL=Styles.js.map