import React from 'react';
import { Grid } from '@material-ui/core';
import Card, { Props as CardProps } from '../molecules/Card';
import useStyles from '../../themes/theme';

export type Props = { cards: CardProps[] };

const CardGrid: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.cardGrid}>
      {props.cards.map(item => (
        <Card {...item} />
      ))}
    </Grid>
  );
};

export default CardGrid;
