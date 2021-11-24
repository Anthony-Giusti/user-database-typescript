import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  usersHeaderMain: {
    background: theme.palette.primary.main,
    borderRadius: '0.5em 0.5em 0 0',
    margin: '0 -0.5em 0.5em -0.5em',
    padding: '0 0.5em',
  },
  usersHeader: {
    display: 'flex',
    width: '100%',
    paddingTop: '0.4em',
  },
  columnName: {
    color: theme.palette.getContrastText(theme.palette.primary.main),
  },
  usersDivders: {
    display: 'flex',
    width: '90%',
  },
  name: {
    width: '35%',
  },
  sex: {
    width: '10%',
  },
  birthday: {
    width: '20%',
  },
  dropDownBtnContainer: {
    width: '10%',
    display: 'flex',
  },
  dropDownBtn: {
    margin: '0 auto',
    color: theme.palette.getContrastText(theme.palette.primary.main),
  },
}));
