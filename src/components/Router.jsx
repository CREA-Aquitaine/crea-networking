import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';

import Footer from './Footer';

import Announce from './annouce/Annouce';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/user/id" component={Dashboard} />
        <Route path="/user" />
        <Route path="/user/:id" />
        <Route path="/announce/:id" component={Announce} />
        <Route exact path="/home" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
