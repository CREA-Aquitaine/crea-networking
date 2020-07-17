import React, { useState } from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  NavbarToggler,
  Collapse,
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

import crea from '../image/logo-crea_2015.png';

import styles from './SecondNavbar.module.css';

function SecondNavbar({ role, t }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar className={styles.navbar} light expand="md">
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        {role === 'admin' ? (
          <Nav className="mr-auto align-items-center" navbar>
            <NavItem className={styles.monDashboard}>
              <NavLink className={styles.navlink} tag={Link} to="/dashboard">
                {t('Mon dashboard')}
              </NavLink>
            </NavItem>
            <NavItem className={styles.mesnavbarItems}>
              <NavLink className={styles.navlink} tag={Link} to="/users">
                {t('Mes utilisateurs')}{' '}
              </NavLink>
            </NavItem>
            <NavItem className={styles.mesnavbarItems}>
              <NavLink className={styles.navlink} tag={Link} to="/announces">
                {t('Mes annonces')}
              </NavLink>
            </NavItem>
            <NavItem className={styles.mesnavbarItems}>
              <NavLink className={styles.navlink} tag={Link} to="/faq">
                {t('FAQ')}
              </NavLink>
            </NavItem>
            <NavItem className={styles.mesnavbarItems}>
              <NavLink className={styles.navlink} tag={Link} to="/partners">
                {t('Partenaires')}
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className={styles.mesnavbarItems}>
                {t('Divers')}
              </DropdownToggle>
              <DropdownMenu bottom>
                <DropdownItem tag={Link} to="/jobCategory">
                  {t('Catégories d&apos;emplois')}
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag={Link} to="/typeAnnounce">
                  {t('Types d&apos;annonces')}
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag={Link} to="/userType">
                  {t('Types d&apos;utilisateurs')}
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag={Link} to="/activityFields">
                  {t('Secteurs d&apos;activité')}
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
              <NavLink className={styles.navlink} tag={Link} to="/dashboard">
                {t('Mon dashboard')}
              </NavLink>
            </NavItem>

            <NavItem className={styles.itemUser}>
              <NavLink className={styles.navlink} tag={Link} to="/post">
                {t('Déposer une annonce')}
              </NavLink>
            </NavItem>
            <NavItem className={styles.itemUser}>
              <NavLink className={styles.navlink} tag={Link} to="/listAnnonce">
                {t('Rechercher une annonce')}
              </NavLink>
            </NavItem>
            <NavItem className={styles.itemUser}>
              <NavLink className={styles.navlink} tag={Link} to="/partners">
                {t('Partenaires')}
              </NavLink>
            </NavItem>
            <NavItem className={styles.itemUser}>
              <NavLink className={styles.navlink} tag={Link} to="/faq">
                {t('FAQ')}
              </NavLink>
            </NavItem>

            <NavItem className={styles.itemUser}>
              <NavLink className={styles.navlink} tag={Link} to="/contact">
                {t('CONTACT')}
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
                {t('Partenaires')}
              </NavLink>
            </NavItem>
            <NavItem className={styles.contact}>
              <NavLink className={styles.navlink} tag={Link} to="/contact">
                {t('Contact')}
              </NavLink>
            </NavItem>
          </Nav>
        )}
      </Collapse>
    </Navbar>
  );
}

const mapStateToProps = (state) => ({
  role: state.role.isRole,
});

SecondNavbar.propTypes = {
  role: PropTypes.string.isRequired,
  t: PropTypes.string.isRequired,
};

export default compose(
  connect(mapStateToProps),
  withNamespaces()
)(SecondNavbar);
