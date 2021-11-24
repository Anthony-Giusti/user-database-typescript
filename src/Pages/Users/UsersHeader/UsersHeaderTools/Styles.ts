import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
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
}));
