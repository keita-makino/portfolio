import React from 'react';
import ContentsPanel from '../templates/ContentsPanel';

type Props = {};

const Root: React.FC<Props> = (props: Props) => {
  return <ContentsPanel cardGrid={{ cards: ['a'] }}></ContentsPanel>;
};

export default Root;
