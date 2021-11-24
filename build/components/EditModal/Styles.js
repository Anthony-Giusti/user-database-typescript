"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
exports.default = core_1.makeStyles(function (theme) {
    var _a, _b;
    return ({
        title: {
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: 24,
        },
        dateBox: {
            display: 'flex',
            alignItems: 'center',
            margin: '0.25em 0',
        },
        dateTitle: {
            width: '20%',
        },
        date: {
            flexBasis: '50%',
            flexGrow: 1,
            paddingLeft: '1em',
        },
        confirmDialogBtnsContainer: (_a = {},
            _a[theme.breakpoints.down('sm')] = {
                flexDirection: 'column',
            },
            _a),
        confirmDialogBtn: (_b = {},
            _b[theme.breakpoints.down('sm')] = {
                margin: '0.2em',
                width: '100%',
            },
            _b),
    });
});
//# sourceMappingURL=Styles.js.map