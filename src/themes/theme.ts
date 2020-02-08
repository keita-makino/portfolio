import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default
  },
  appBar: {
    color: theme.palette.common.primary
  },
  cardGrid: {},
  card: {
    width: 345,
    height: 240,
    transition: '0.7s',
    position: 'relative'
  },
  cardFocused: {
    width: 1200,
    height: 960,
    position: 'absolute'
  }
}));

export default useStyles;
