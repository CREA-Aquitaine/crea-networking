import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Dashboard from './dashboard/Dashboard';
import Footer from './footer/Footer';
import NavBar from './navbar/NavBar';
import Announce from './announce/Announce';
import Home from './home/Home';
import Partners from './partners/Partners';
import PostAnnounce from './announce/PostAnnounce';
import CreateAccount from './createAccount/CreateAccount';
import Contact from './contact/Contact';
import DashboardAdmin from './admin/dashboardAdmin/DashboardAdmin';
import UsersList from './admin/UsersList/Users_List';
import AnnouncesList from './admin/AnnouncesList/Announces_List';
import Faq from './admin/FAQ/Faq';
import PartnersList from './admin/partners/Partners';
import ListAnnounceUser from './announce/ListAnnounceUser';
import JobCategory from './admin/JobCategory/JobCategory';
import UserTypes from './admin/UserType/UserTypes';
import TypeAnnounce from './admin/TypeAnnounces/TypeAnnounce';
import ActivityFields from './admin/ActivityFields/ActivityFields';
import FaqUser from './faq/FaqUser';

function Router({ role }) {
  return (
    <BrowserRouter>
      {role === 'admin' ? (
        <>
          <NavBar />
          <Switch>
            <Route path="/jobCategory" component={JobCategory} />
            <Route path="/typeAnnounce" component={TypeAnnounce} />
            <Route path="/userType" component={UserTypes} />
            <Route path="/activityFields" component={ActivityFields} />
            <Route path="/dashboard" component={DashboardAdmin} />
            <Route path="/users" component={UsersList} />
            <Route path="/partners" component={PartnersList} />
            <Route path="/faq" component={Faq} />
            <Route path="/announces" component={AnnouncesList} />
            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
        </>
      ) : role === 'user' ? (
        <>
          <NavBar />
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/post" component={PostAnnounce} />
            <Route path="/faq" component={FaqUser} />
            <Route path="/user" />
            <Route path="/partners" component={Partners} />
            <Route path="/listAnnonce" component={ListAnnounceUser} />
            <Route path="/createAccount" component={CreateAccount} />
            <Route path="/announces/:id" component={Announce} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/" component={Home} />
          </Switch>
          <Footer />
        </>
      ) : (
        <>
          <NavBar />
          <Switch>
            <Route path="/partners" component={Partners} />
            <Route path="/createAccount" component={CreateAccount} />
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
  role: state.role.isRole,
});
Router.propTypes = { role: PropTypes.string.isRequired };

export default connect(mapStateToProps)(Router);
