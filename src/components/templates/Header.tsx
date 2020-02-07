import React from 'react';
import { AppBar, Box, Grid, makeStyles, Theme } from '@material-ui/core';
import useStyles from '../../themes/theme';

type Props = {};

const Header: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.appBar}>
        <Grid
          container
          justify={'space-between'}
          alignContent={'center'}
          style={{ height: '4rem' }}
        >
          <Grid item xs={2}>
            Keita Makino
          </Grid>
          <Grid container item xs={2} justify={'space-around'}>
            <Grid item>Linkedin</Grid>
            <Grid item>Github</Grid>
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
};

export default Header;
