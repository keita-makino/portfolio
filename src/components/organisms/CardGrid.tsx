import React, { useRef, useEffect, useState } from 'react';
import { Grid, useTheme, useMediaQuery } from '@material-ui/core';
import { useMeasure, useWindowSize } from 'react-use';

import Card, { Props as CardProps } from '../molecules/Card';

export type Props = {
  cards: CardProps[];
};

const CardGrid: React.FC<Props> = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const window = useWindowSize();
  const small = useTheme().breakpoints.values.sm;
  const medium = useTheme().breakpoints.values.lg;
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [origin, setOrigin] = useState({ x: 0, y: 0 });

  const num = size.width < small ? 1 : size.width < medium ? 3 : 4;
  const width = (size.width - 24 * (num - 1)) / num;

  useEffect(() => {
    const rect = ref.current!.getBoundingClientRect();
    setSize({ width: rect.width, height: rect.height });
    setOrigin({
      x: -rect.x,
      y:
        -rect.y +
        4 * parseInt(getComputedStyle(document.documentElement).fontSize)
    });
  }, [width, window]);

  return (
    <Grid container xs={12} md={12} lg={12} xl={12} item ref={ref}>
      {props.cards.map((item, index) => (
        <Card
          {...item}
          size={{ width: width, height: 240 }}
          position={{
            x: index * width + (index % num) * 24,
            y: Math.floor(index / num) * 264
          }}
          origin={origin}
        />
      ))}
    </Grid>
  );
};

export default CardGrid;
