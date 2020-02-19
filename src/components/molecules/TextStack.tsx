import React from 'react';
import Text, { Props as TextProps } from '../atoms/Text';

export type TextStackProps = TextProps[];

const TextStack: React.FC<TextStackProps> = (props: TextStackProps) => {
  return (
    <>
      {props.map(item => (
        <Text {...item}></Text>
      ))}
    </>
  );
};

export default TextStack;
