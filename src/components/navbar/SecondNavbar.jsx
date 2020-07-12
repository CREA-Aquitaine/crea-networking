import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import crea from '../image/logo-crea_2015.png';

import styles from './SecondNavbar.module.css';

function SecondNavbar({ role }) {
  return (
    <Navbar className={styles.navbar} expand="xs">
      {role === 'admin' ? (
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
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret className={styles.mesnavbarItems}>
              Divers
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem tag={Link} to="/jobCategory">
                Catégories d&apos;emplois
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem tag={Link} to="/typeAnnounce">
                Types d&apos;annonces
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem tag={Link} to="/userType">
                Types d&apos;utilisateurs
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem tag={Link} to="/activityFields">
                Secteurs d&apos;activité
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      ) : role === 'user' ? (
        <Nav className="mr-auto align-items-center" navbar>
          <NavItem>
            <NavLink tag={Link} to="/">
              <img src={crea} alt="logo crea" className={styles.logo_crea} />
            </NavLink>
          </NavItem>
          <NavItem className={styles.partenairesUser}>
            <NavLink className={styles.navlink} tag={Link} to="/post">
              Déposer une annonce
            </NavLink>
          </NavItem>
          <NavItem className={styles.itemUser}>
            <NavLink className={styles.navlink} tag={Link} to="/listAnnonce">
              Rechercher une annonce
            </NavLink>
          </NavItem>
          <NavItem className={styles.itemUser}>
            <NavLink className={styles.navlink} tag={Link} to="/partners">
              Partenaires
            </NavLink>
          </NavItem>
          <NavItem className={styles.itemUser}>
            <NavLink className={styles.navlink} tag={Link} to="/faq">
              Faq
            </NavLink>
          </NavItem>
          <NavItem className={styles.itemUser}>
            <NavLink className={styles.navlink} tag={Link} to="/contact">
              Contact
            </NavLink>
          </NavItem>
        </Nav>
      ) : (
        <Nav className="mr-auto align-items-center" navbar>
          <NavItem>
            <NavLink tag={Link} to="/">
              <img src={crea} alt="logo crea" className={styles.logo_crea} />
            </NavLink>
          </NavItem>
          <NavItem className={styles.partenaires}>
            <NavLink className={styles.navlink} tag={Link} to="/partners">
              PARTENAIRES
            </NavLink>
          </NavItem>
          <NavItem className={styles.contact}>
            <NavLink className={styles.navlink} tag={Link} to="/contact">
              CONTACT
            </NavLink>
          </NavItem>
        </Nav>
      )}
    </Navbar>
  );
}

const mapStateToProps = (state) => ({
  role: state.role.isRole,
});

SecondNavbar.propTypes = { role: PropTypes.string.isRequired };

export default connect(mapStateToProps)(SecondNavbar);
