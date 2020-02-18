import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default
  },
  main: { marginTop: '4rem' },
  appBar: {
    color: theme.palette.common.primary
  },
  card: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  }
}));

export default useStyles;
