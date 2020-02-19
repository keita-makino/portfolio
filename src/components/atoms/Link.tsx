import React from 'react';
import { Grid, Link as LinkMui, Typography } from '@material-ui/core';
import * as Icons from '@material-ui/icons';

export type Props = { link: string; text: string; icon: keyof typeof Icons };

const Link: React.FC<Props> = (props: Props) => {
  const Icon = Icons[props.icon];
  return (
    <LinkMui href={props.link}>
      <Grid item container justify={'flex-end'} alignItems={'center'}>
        <Grid>{Icon !== undefined ? <Icon /> : null}</Grid>
        <Grid>
          <Typography variant={'body1'}>{props.text}</Typography>
        </Grid>
      </Grid>
    </LinkMui>
  );
};

export default Link;
