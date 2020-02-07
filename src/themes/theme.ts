import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default
  },
  appBar: {
    color: theme.palette.common.primary
  }
}));

export default useStyles;
