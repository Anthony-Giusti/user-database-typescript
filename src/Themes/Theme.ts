import { createTheme } from '@material-ui/core/styles';
import { blueGrey, red } from '@material-ui/core/colors';

const Theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[700],
    },
    secondary: {
      main: red[900],
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

export default Theme;
