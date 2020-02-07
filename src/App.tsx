import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ApolloClient, { InMemoryCache, gql } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import data from './data/initialState';

import Header from './components/templates/Header';
import { ThemeProvider, Grid } from '@material-ui/core';

import { defaultTheme } from './themes/defaultTheme';
import Root from './components/pages/Root';
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
          <Grid container style={{ marginTop: '4rem' }}>
            <BrowserRouter>
              <Route path="/">
                <Root />
              </Route>
              <Route path="/work">
                <Root />
              </Route>
            </BrowserRouter>
          </Grid>
        </Grid>
      </ThemeProvider>{' '}
    </ApolloProvider>
  );
};

export default App;
