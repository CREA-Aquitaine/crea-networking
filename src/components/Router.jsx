import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Dashboard from './dashboard/Dashboard';
import Footer from './footer/Footer';
import NavBar from './navbar/NavBar';
import Announce from './announce/Announce';
import Home from './home/Home';
import PostAnnounce from './announce/PostAnnounce';
import CreateAccount from './createAccount/CreateAccount';
import Contact from './contact/Contact';
import NavBarAdmin from './navbar/NavBarAdmin';
import HomeAdmin from './admin/homeAdmin/HomeAdmin';

function Router({ isAdministrator }) {
  return (
    <BrowserRouter>
      {isAdministrator === true ? (
        <>
          <NavBarAdmin />
          <Switch>
            <Route exact path="/" component={HomeAdmin} />
          </Switch>
          <Footer />
        </>
      ) : (
        <>
          <NavBar />
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/post" component={PostAnnounce} />
            <Route path="/user" />
            <Route path="/createAccount" component={CreateAccount} />
            <Route path="/announces/:id" component={Announce} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  isAdministrator: state.isAdministrator.isAdmin,
});

Router.propTypes = { isAdministrator: PropTypes.string.isRequired };

export default connect(mapStateToProps)(Router);
