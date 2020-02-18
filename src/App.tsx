import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ApolloClient, { InMemoryCache, gql } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import data from './data/initialState';

import { ThemeProvider, Grid } from '@material-ui/core';

import { defaultTheme } from './themes/defaultTheme';
import Index from './pages/Index';
import Header from './pages/Header';
import useStyles from './themes/theme';

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache: cache,
  typeDefs: ''
});

cache.writeData({
  data
});
console.log(client.cache);

const App = () => {
  const classes = useStyles();

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={defaultTheme}>
        <Grid container className={classes.root}>
          <Header />
          <Grid
            container
            xs={12}
            md={12}
            lg={12}
            xl={12}
            className={classes.main}
          >
            <BrowserRouter>
              <Route path="/">
                <Index />
              </Route>
            </BrowserRouter>
          </Grid>
        </Grid>
      </ThemeProvider>{' '}
    </ApolloProvider>
  );
};

export default App;
