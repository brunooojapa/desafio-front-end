import React from 'react';
import Home from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default () => {
  return (
    <BrowserRouter basename='/pokedex/'>
      <Switch>
        <Route path='/' exact={true} component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
