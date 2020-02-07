import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default
  },
  appBar: {
    color: theme.palette.common.primary
  },
  card: {
    width: 345,
    height: 240,
    transition: '1s',
    position: 'fixed'
  },
  bigCard: {
    width: 1200,
    height: 960,
    transition: '1s',
    position: 'absolute'
  }
}));

export default useStyles;
