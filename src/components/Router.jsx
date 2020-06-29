import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import Footer from './footer/Footer';
import NavBar from './navbar/NavBar';
import Announce from './announce/Announce';
import Home from './home/Home';
import PostAnnounce from './announce/PostAnnounce';
import CreateAccount from './createAccount/CreateAccount';

function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/user/id" component={Dashboard} />
        <Route path="/user/post" component={PostAnnounce} />
        <Route path="/user" />
        <Route path="/createAccount" component={CreateAccount} />
        <Route path="/announce/:id" component={Announce} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
