import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
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
