import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" />
        <Route path="/user" />
        <Route path="/user/:id" />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
