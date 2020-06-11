import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Footer from './Footer';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" />
        <Route path="/user" />
        <Route path="/user/:id" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
