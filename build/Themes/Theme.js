"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styles_1 = require("@material-ui/core/styles");
var colors_1 = require("@material-ui/core/colors");
var Theme = styles_1.createTheme({
    palette: {
        primary: {
            main: colors_1.blueGrey[700],
        },
        secondary: {
            main: colors_1.red[900],
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});
exports.default = Theme;
//# sourceMappingURL=Theme.js.map