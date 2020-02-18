import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import HeaderTemplate from '../components/templates/Header';

type Props = {};

const query = gql`
  {
    header {
      title
      links {
        title
        link
      }
    }
  }
`;

const Header: React.FC<Props> = (props: Props) => {
  const { data } = useQuery(query);
  return <HeaderTemplate {...data.header} />;
};

export default Header;
