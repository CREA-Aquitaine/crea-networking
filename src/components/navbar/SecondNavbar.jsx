import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import crea from '../image/logo-crea_2015.png';
import anec from '../image/logo_anec.png';

import styles from './SecondNavbar.module.css';

function SecondNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className={styles.navbar} expand="xs">
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto align-items-center" navbar>
          <NavItem>
            <NavLink>
              <img src={crea} alt="logo crea" className={styles.logo_crea} />
            </NavLink>
          </NavItem>
          <NavItem className={styles.partenaires}>
            <NavLink>PARTENAIRES</NavLink>
          </NavItem>
          <NavItem className={styles.contact}>
            <NavLink>CONTACT</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default SecondNavbar;
