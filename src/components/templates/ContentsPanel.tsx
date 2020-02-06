import React from 'react';
import CardGrid, { Props as CardGridProps } from '../organisms/CardGrid';

type Props = { cardGrid: CardGridProps };

const ContentsPanel: React.FC<Props> = (props: Props) => {
  return <CardGrid cards={props.cardGrid.cards} />;
};

export default ContentsPanel;
