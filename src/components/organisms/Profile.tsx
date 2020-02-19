import React, { useRef, useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import HeadShot from '../atoms/HeadShot';
import LinkStack, { LinkStackProps } from '../molecules/LinkStack';
import TextStack, { TextStackProps } from '../molecules/TextStack';

export type Props = {
  title: string;
  positions: TextStackProps[];
} & LinkStackProps;

const Profile: React.FC<Props> = (props: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (ref.current) {
      const element = ref.current;
      setHeight(element.getBoundingClientRect().height);
    }
  }, []);
  console.log(props.links);

  return (
    <Grid item container xs={12} sm={12} md={12} lg={12} xl={12} ref={ref}>
      <Grid item container xs={12} sm={12} md={4} lg={3} xl={2}>
        <HeadShot height={height} />
      </Grid>
      <Grid item container xs={12} sm={12} md={8} lg={9} xl={10}>
        <Grid
          item
          container
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          direction={'column'}
        >
          <Typography variant={'h3'}>{props.title}</Typography>
          {/* <TextStack {props.positions} /> */}
        </Grid>
        <Grid
          item
          container
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          direction={'column'}
          alignContent={'flex-end'}
        >
          <LinkStack links={props.links} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profile;
