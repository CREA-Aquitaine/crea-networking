import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Announce from './annouce/Annouce';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" />
        <Route path="/user" />
        <Route path="/user/:id" />
        <Route path="/announce/:id" component={Announce} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
