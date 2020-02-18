import React from 'react';
import IndexTemplate from '../components/templates/Index';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import useStyles from '../themes/theme';

type Props = {};

const query = gql`
  {
    academic @client {
      cards {
        title
        subtitle
        descriptions
        __typename
      }
    }
    school @client {
      cards {
        title
        descriptions
        __typename
      }
    }
    personal @client {
      cards {
        title
        descriptions
        __typename
      }
    }
  }
`;

const Index: React.FC<Props> = (props: Props) => {
  const { data } = useQuery(query);

  return <IndexTemplate {...data} />;
};

export default Index;
