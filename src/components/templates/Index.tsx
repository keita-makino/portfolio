import React, { useEffect, HTMLAttributes } from 'react';
import CardGrid, { Props as CardGridProps } from '../organisms/CardGrid';
import { Paper, Typography, Grid } from '@material-ui/core';

import Profile from '../organisms/Profile';

type Props = {
  academic: CardGridProps;
  school: CardGridProps;
  personal: CardGridProps;
} & HTMLAttributes<HTMLElement>;

const Index: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Profile />
      <Grid
        container
        xs={12}
        md={12}
        lg={12}
        xl={12}
        item
        alignContent={'flex-start'}
      >
        <Typography variant={'h3'}>Academic</Typography>
        <CardGrid cards={props.academic.cards} />
      </Grid>
      <Grid
        container
        xs={12}
        md={12}
        lg={12}
        xl={12}
        item
        alignContent={'flex-start'}
      >
        <Typography variant={'h3'}>School</Typography>
        <CardGrid cards={props.school.cards} />
      </Grid>
      <Grid
        container
        xs={12}
        md={12}
        lg={12}
        xl={12}
        item
        alignContent={'flex-start'}
      >
        <Typography variant={'h3'}>Personal</Typography>
        <CardGrid cards={props.personal.cards} />
      </Grid>
    </>
  );
};

export default Index;
