import React from 'react';
import {
  Card as CardMui,
  CardActionArea,
  CardContent,
  Typography
} from '@material-ui/core';
import { motion } from 'framer-motion';
import useStyles from '../../themes/theme';
import { useLocation, useHistory } from 'react-router-dom';

export type Props = {
  title: string;
  descriptions: string[];
};

type HistoryState = {
  focus?: string;
};

const Card: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const historyState = useLocation().state as HistoryState;
  const history = useHistory();

  const focus = historyState.focus;
  console.log(focus);

  const onClick = (event: any) => {
    if (focus !== props.title) {
      history.push({
        state: { focus: event.currentTarget.value }
      });
    } else {
      history.push({
        state: { focus: undefined }
      });
    }
  };

  return (
    <motion.div animate={{ rotate: 360 }} transition={{ duration: 2 }}>
      <CardMui
        className={focus === props.title ? classes.bigCard : classes.card}
      >
        <CardActionArea onClick={onClick} value={props.title}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            {props.descriptions.map(item => (
              <Typography variant="body2" color="textSecondary" component="p">
                {item}
              </Typography>
            ))}
          </CardContent>
        </CardActionArea>
      </CardMui>
    </motion.div>
  );
};

export default Card;
