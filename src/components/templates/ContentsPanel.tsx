import React from 'react';
import CardGrid, { Props as CardGridProps } from '../organisms/CardGrid';
import { Paper, Typography, Grid } from '@material-ui/core';

type Props = { cardGrid: CardGridProps };

const ContentsPanel: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Grid>
        <Typography variant={'h3'}>hoge</Typography>
        <CardGrid cards={props.cardGrid.cards} />
      </Grid>
    </>
  );
};

export default ContentsPanel;
