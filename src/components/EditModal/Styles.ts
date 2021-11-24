import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
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
  confirmDialogBtnsContainer: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  confirmDialogBtn: {
    [theme.breakpoints.down('sm')]: {
      margin: '0.2em',
      width: '100%',
    },
  },
}));
