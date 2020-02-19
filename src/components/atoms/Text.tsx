import React from 'react';
import { Grid, Typography } from '@material-ui/core';

export type Props = { text: string };

const Link: React.FC<Props> = (props: Props) => {
  return (
    <Grid>
      <Typography variant={'body1'}>{props.text}</Typography>
    </Grid>
  );
};

export default Link;
