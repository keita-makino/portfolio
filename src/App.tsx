import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ContentsPanel from './components/templates/ContentsPanel';
import Header from './components/templates/Header';
import { ThemeProvider, Grid } from '@material-ui/core';

import { defaultTheme } from './themes/defaultTheme';
import Root from './components/pages/Root';
import useStyles from './themes/theme';

const App = () => {
  const classes = useStyles();

  return (
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
    </ThemeProvider>
  );
};

export default App;
