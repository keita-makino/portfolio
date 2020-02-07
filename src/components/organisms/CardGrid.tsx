import React from 'react';
import { Grid } from '@material-ui/core';
import Card, { Props as CardProps } from '../molecules/Card';

export type Props = { cards: CardProps[] };

const CardGrid: React.FC<Props> = (props: Props) => {
  return (
    <Grid container>
      {props.cards.map(item => (
        <Card {...item} />
      ))}
    </Grid>
  );
};

export default CardGrid;
