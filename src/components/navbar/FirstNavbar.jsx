import React, { useState } from 'react';
import { Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NavbarLanguage from './NavbarLanguage';
import PopUpConnection from './PopUpConnection';

import styles from './NavBar.module.css';
import './Navbar.css';

function FirstNavbar({ isAdministrator }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" expand="xs" className={styles.nav}>
      <NavbarToggler onClick={toggle} />
      <Nav navbar className={`${styles.navbar} mr-5`}>
        <NavItem className="mr-5">
          {isAdministrator ? 'Mon compte' : <PopUpConnection />}
        </NavItem>
        <NavItem>
          <NavLink>Langue</NavLink>
        </NavItem>
        <NavbarLanguage />
      </Nav>
    </Navbar>
  );
}
const mapStateToProps = (state) => ({
  isAdministrator: state.isAdministrator.isAdmin,
});

FirstNavbar.propTypes = { isAdministrator: PropTypes.string.isRequired };

export default connect(mapStateToProps)(FirstNavbar);
