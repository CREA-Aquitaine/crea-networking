import React from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import crea from '../image/logo-crea_2015.png';

import styles from './SecondNavbar.module.css';

function SecondNavbar({ isAdministrator }) {
  return (
    <Navbar className={styles.navbar} expand="xs">
      {isAdministrator ? (
        <Nav className="mr-auto align-items-center" navbar>
          <NavItem>
            <NavLink tag={Link} to="/">
              <img src={crea} alt="logo crea" className={styles.logo_crea} />
            </NavLink>
          </NavItem>
          <NavItem className={styles.monDashboard}>
            <NavLink className={styles.navlink} tag={Link} to="/dashboard">
              Mon dashboard
            </NavLink>
          </NavItem>
          <NavItem className={styles.mesnavbarItems}>
            <NavLink className={styles.navlink} tag={Link} to="/users">
              {' '}
              Mes utilisateurs{' '}
            </NavLink>
          </NavItem>
          <NavItem className={styles.mesnavbarItems}>
            <NavLink className={styles.navlink} tag={Link} to="/announces">
              Mes annonces
            </NavLink>
          </NavItem>
          <NavItem className={styles.mesnavbarItems}>
            <NavLink className={styles.navlink} tag={Link} to="/faq">
              FAQ
            </NavLink>
          </NavItem>
          <NavItem className={styles.mesnavbarItems}>
            <NavLink className={styles.navlink} tag={Link} to="/partners">
              Partenaires
            </NavLink>
          </NavItem>
        </Nav>
      ) : (
        <Nav className="mr-auto align-items-center" navbar>
          <NavItem>
            <NavLink>
              <img src={crea} alt="logo crea" className={styles.logo_crea} />
            </NavLink>
          </NavItem>
          <NavItem className={styles.partenaires}>
            <NavLink className={styles.navlink}>PARTENAIRES</NavLink>
          </NavItem>
          <NavItem className={styles.contact}>
            <NavLink className={styles.navlink} tag={Link} to="./contact">
              CONTACT
            </NavLink>
          </NavItem>
        </Nav>
      )}
    </Navbar>
  );
}

const mapStateToProps = (state) => ({
  isAdministrator: state.isAdministrator.isAdmin,
});

SecondNavbar.propTypes = { isAdministrator: PropTypes.string.isRequired };

export default connect(mapStateToProps)(SecondNavbar);
