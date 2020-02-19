import React from 'react';
import Link, { Props as LinkProps } from '../atoms/Link';

export type LinkStackProps = { links: LinkProps[] };

const LinkStack: React.FC<LinkStackProps> = (props: LinkStackProps) => {
  return (
    <>
      {props.links.map(item => (
        <Link {...item}></Link>
      ))}
    </>
  );
};

export default LinkStack;
