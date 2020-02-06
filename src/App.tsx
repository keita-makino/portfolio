import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ContentsPanel from './components/templates/ContentsPanel';
import Header from './components/templates/Header';
import { ThemeProvider } from '@material-ui/core';

import { defaultTheme } from './themes/defaultTheme';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <Header />
        <BrowserRouter>
          <Route exact path="/">
            <ContentsPanel cardGrid={{ cards: [] }} />
          </Route>
          <Route path="/work">
            <ContentsPanel cardGrid={{ cards: [] }} />
          </Route>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
