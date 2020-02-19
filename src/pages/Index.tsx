import React from 'react';
import IndexTemplate from '../components/templates/Index';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import useStyles from '../themes/theme';
import { Grid } from '@material-ui/core';

type Props = {};

const query = gql`
  {
    profile @client {
      title
      positions
      links {
        text
        link
        icon
      }
    }
    academic @client {
      cards {
        title
        subtitle
        descriptions
      }
    }
    school @client {
      cards {
        title
        descriptions
      }
    }
    personal @client {
      cards {
        title
        descriptions
      }
    }
  }
`;

const Index: React.FC<Props> = (props: Props) => {
  const { data } = useQuery(query);

  return (
    <Grid item container xs={12} sm={12} md={12} lg={12} xl={12}>
      <IndexTemplate {...data} />
    </Grid>
  );
};

export default Index;
