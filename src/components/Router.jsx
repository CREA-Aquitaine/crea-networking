import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-dom';
import Dashboard from './dashboard/Dashboard';

import Footer from './Footer';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/user/id" component={Dashboard} />
        <Route path="/user" />
        <Route exact path="/home" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
