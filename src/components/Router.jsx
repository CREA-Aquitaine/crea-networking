import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';

import Footer from './Footer';
import NavBar from './navbar/NavBar';

function Router() {
  return (
    <BrowserRouter>
      <NavBar />
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
