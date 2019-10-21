import React from 'react';
import Home from './containers/index';
import details from './containers/details';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CardDetails from './containers/cardDetails';

export default () => {
  return (
    <BrowserRouter basename='/pokedex/'>
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path='/details' component={details} />
        <Route path='/cardDetails' component={CardDetails} />
      </Switch>
    </BrowserRouter>
  );
};
