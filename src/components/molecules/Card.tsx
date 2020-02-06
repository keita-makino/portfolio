import React from 'react';
import {
  Card as CardMui,
  CardActionArea,
  CardContent,
  Typography
} from '@material-ui/core';

export type Props = {};

const Card: React.FC<Props> = (props: Props) => {
  return (
    <CardMui>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardMui>
  );
};

export default Card;
