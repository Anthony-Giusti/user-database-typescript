"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
exports.default = core_1.makeStyles(function (theme) {
    var _a, _b;
    return ({
        modalMain: {
            width: '60%',
        },
        title: {
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: 24,
        },
        userId: {
            padding: '0 24px',
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
        userFields: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gridGap: 10,
            marginTop: '1.5em',
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