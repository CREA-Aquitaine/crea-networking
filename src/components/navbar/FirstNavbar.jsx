import React, { useState } from 'react';
import { Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';

import NavbarLanguage from './NavbarLanguage';

import styles from './NavBar.module.css';
import './Navbar.css';

function FirstNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" expand="md" className={styles.nav}>
      <NavbarToggler onClick={toggle} />
      <Nav navbar className={`${styles.navbar} mr-5`}>
        <NavItem className="mr-5">
          <NavLink>Espace connexion</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Langue</NavLink>
        </NavItem>
        <NavbarLanguage />
      </Nav>
    </Navbar>
  );
}

export default FirstNavbar;
