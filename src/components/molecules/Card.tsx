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
import { useWindowSize } from 'react-use';

export type Props = {
  title: string;
  subtitle?: string;
  descriptions: string[];
  size: {
    width: number;
    height: number;
  };
  position: {
    x: number;
    y: number;
  };
  origin: {
    x: number;
    y: number;
  };
};

type HistoryState = {
  focus?: string;
};

const Card: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const window = useWindowSize();
  const historyState = useLocation().state as HistoryState;
  const history = useHistory();
  const focus = historyState !== undefined ? historyState.focus : undefined;

  const onClick = (event: any) => {
    if (focus === undefined) {
      history.push({
        state: { focus: event.currentTarget.value }
      });
    } else {
      history.push({
        state: { focus: undefined }
      });
    }
  };

  const rem = parseInt(getComputedStyle(document.documentElement).fontSize);

  const position = focus === props.title ? props.origin : props.position;
  const size =
    focus === props.title
      ? { width: window.width, height: window.height - 4 * rem }
      : props.size;

  return (
    <>
      <div
        style={{
          width: 345,
          height: 240
        }}
      ></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: focus === props.title ? 0.2 : 0,
          zIndex: focus === props.title ? 100 : 0
        }}
        style={{
          backgroundColor: '#000000',
          position: 'fixed',
          top: 0,
          left: 0,
          ...window
        }}
      ></motion.div>
      <motion.div
        animate={{
          ...position,
          ...size,
          zIndex: focus === props.title ? 100 : 1
        }}
        style={{
          position: 'absolute'
        }}
      >
        <CardMui className={classes.card}>
          <CardActionArea onClick={onClick} value={props.title}>
            <CardContent>
              <Typography gutterBottom variant="h5">
                {props.title}
              </Typography>
              {props.subtitle !== undefined ? (
                <Typography variant="subtitle1"> {props.subtitle}</Typography>
              ) : null}
              {props.descriptions.map(item => (
                <Typography variant="body2" color="textSecondary">
                  {item}
                </Typography>
              ))}
            </CardContent>
          </CardActionArea>
        </CardMui>
      </motion.div>
    </>
  );
};

export default Card;
