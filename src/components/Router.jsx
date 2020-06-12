import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Header';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/home" />
        <Route path="/user" />
        <Route path="/user/:id" />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
