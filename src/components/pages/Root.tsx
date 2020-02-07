import React from 'react';
import ContentsPanel from '../templates/ContentsPanel';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

type Props = {};

const query = gql`
  {
    school @client {
      cards {
        title
        descriptions
        __typename
      }
    }
  }
`;

const Root: React.FC<Props> = (props: Props) => {
  const { data } = useQuery(query);

  return <ContentsPanel cardGrid={data.school}></ContentsPanel>;
};

export default Root;
