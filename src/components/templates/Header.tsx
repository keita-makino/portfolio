import React from 'react';
import { AppBar, Box, Grid, makeStyles, Theme } from '@material-ui/core';
import useStyles from '../../themes/theme';
import { Http2SecureServer } from 'http2';

type Props = {
  title: string;
  links: {
    title: string;
    link: string;
  }[];
};

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
            {props.title}{' '}
          </Grid>
          <Grid container item xs={2} justify={'space-around'}>
            {props.links.map(item => (
              <a href={item.link}>{item.title}</a>
            ))}
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
};

export default Header;
