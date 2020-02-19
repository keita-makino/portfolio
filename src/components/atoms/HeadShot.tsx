import React from 'react';
import Image from '../../images/profile/headshot.jpg';
import { printIntrospectionSchema } from 'graphql';

type Props = { height: number };

const HeadShot: React.FC<Props> = (props: Props) => {
  return <img src={Image} style={{ height: props.height }} />;
};

export default HeadShot;
