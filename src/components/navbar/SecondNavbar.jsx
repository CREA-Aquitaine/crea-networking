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
  Collapse,
  NavbarToggler,
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
// import { GiHamburgerMenu } from 'react-icons/gi';

import crea from '../image/logo-crea_2015.png';

import styles from './SecondNavbar.module.css';

function SecondNavbar({ role, t }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar className={styles.navbar} light expand="md">
      <div className={styles.toggleButton}>
        <NavbarToggler onClick={toggle} />
        {/* <GiHamburgerMenu onClick={toggle} fill="white" size="25" /> */}
      </div>
      <Collapse isOpen={isOpen} navbar>
        {role === 'admin' ? (
          <Nav
            className={`${styles.bkgRespMenu}mr-auto align-items-center`}
            navbar
          >
            <NavItem className="ml-5">
              <NavLink className={styles.navlink} tag={Link} to="/dashboard">
                {t('Mon dashboard')}
              </NavLink>
            </NavItem>
            <NavItem className="ml-5">
              <NavLink className={styles.navlink} tag={Link} to="/users">
                {t('Mes utilisateurs')}{' '}
              </NavLink>
            </NavItem>
            <NavItem className="ml-5">
              <NavLink className={styles.navlink} tag={Link} to="/announces">
                {t('Mes annonces')}
              </NavLink>
            </NavItem>
            <NavItem className="ml-5">
              <NavLink className={styles.navlink} tag={Link} to="/faq">
                {t('FAQ')}
              </NavLink>
            </NavItem>
            <NavItem className="ml-5">
              <NavLink className={styles.navlink} tag={Link} to="/partners">
                {t('Partenaires')}
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar className="ml-5">
              <DropdownToggle nav caret>
                {t('Divers')}
              </DropdownToggle>
              <DropdownMenu bottom>
                <DropdownItem tag={Link} to="/jobCategory">
                  {t('categoriesEmplois')}
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
          <Nav
            className={`${styles.bkgRespMenu}mr-auto align-items-center`}
            navbar
          >
            <NavItem>
              <NavLink tag={Link} to="/">
                <img src={crea} alt="logo crea" className={styles.logo_crea} />
              </NavLink>
            </NavItem>
            <NavItem className={`ml-5 ${styles.marginLeftResp}`}>
              <NavLink className={styles.navlink} tag={Link} to="/dashboard">
                {t('Mon dashboard')}
              </NavLink>
            </NavItem>

            <NavItem className={`ml-5 ${styles.marginLeftResp}`}>
              <NavLink className={styles.navlink} tag={Link} to="/post">
                {t('Déposer une annonce')}
              </NavLink>
            </NavItem>
            <NavItem className={`ml-5 ${styles.marginLeftResp}`}>
              <NavLink className={styles.navlink} tag={Link} to="/listAnnonce">
                {t('Rechercher une annonce')}
              </NavLink>
            </NavItem>
            <NavItem className={`ml-5 ${styles.marginLeftResp}`}>
              <NavLink className={styles.navlink} tag={Link} to="/partners">
                {t('Partenaires')}
              </NavLink>
            </NavItem>
            <NavItem className={`ml-5 ${styles.marginLeftResp}`}>
              <NavLink className={styles.navlink} tag={Link} to="/faq">
                {t('FAQ')}
              </NavLink>
            </NavItem>

            <NavItem className={`ml-5 ${styles.marginLeftResp}`}>
              <NavLink className={styles.navlink} tag={Link} to="/contact">
                {t('Contact')}
              </NavLink>
            </NavItem>
          </Nav>
        ) : (
          <Nav
            className={`${styles.bkgRespMenu}mr-auto align-items-center`}
            navbar
          >
            <NavItem>
              <NavLink tag={Link} to="/">
                <img src={crea} alt="logo crea" className={styles.logo_crea} />
              </NavLink>
            </NavItem>
            <NavItem className={`ml-5 ${styles.marginLeftResp}`}>
              <NavLink className={styles.navlink} tag={Link} to="/partners">
                {t('Partenaires')}
              </NavLink>
            </NavItem>
            <NavItem className={`ml-5 ${styles.marginLeftResp}`}>
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
  t: PropTypes.func.isRequired,
};

export default compose(
  connect(mapStateToProps),
  withNamespaces()
)(SecondNavbar);
