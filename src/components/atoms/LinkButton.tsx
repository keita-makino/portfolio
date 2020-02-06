import React from 'react';
import { Button } from '@material-ui/core';

type Props = { link: string; text: string };

const LinkButton: React.FC<Props> = (props: Props) => {
  return (
    <Button href={props.link} target="_blank">
      {props.text}
    </Button>
  );
};

export default LinkButton;
