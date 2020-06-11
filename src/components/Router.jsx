import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-dom';
import Dashboard from './dashboard/Dashboard';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" />
        <Route path="/user" />
        <Route path="/user/id" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
