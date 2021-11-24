"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
exports.default = core_1.makeStyles(function (theme) { return ({
    toolsMain: {
        display: 'grid',
        gridGap: 10,
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 300px))',
        padding: '1em',
        borderTop: '1px solid white',
    },
    toolsSection: {
        backgroundColor: theme.palette.getContrastText(theme.palette.primary.main),
        borderRadius: '1em',
        padding: '1em',
    },
}); });
//# sourceMappingURL=Styles.js.map