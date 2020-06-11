import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-dom';
import Dashboard from './dashboard/Dashboard';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/user/id" component={Dashboard} />
        <Route path="/user" />
        <Route exact path="/home" />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
