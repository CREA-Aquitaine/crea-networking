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
import { compose } from 'redux';

import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

import crea from '../image/logo-crea_2015.png';

import styles from './SecondNavbar.module.css';

function SecondNavbar({ role, t }) {
  return (
    <Navbar className={styles.navbar} light expand>
      {role === 'admin' ? (
        <Nav className="ml-5" navbar>
          <NavItem>
            <NavLink className={styles.navlink} tag={Link} to="/dashboard">
              {t('monDashboard')}
            </NavLink>
          </NavItem>
          <NavItem className="ml-5">
            <NavLink className={styles.navlink} tag={Link} to="/users">
              {t('mesUsers')}{' '}
            </NavLink>
          </NavItem>
          <NavItem className="ml-5">
            <NavLink className={styles.navlink} tag={Link} to="/announces">
              {t('mesAnnonces')}
            </NavLink>
          </NavItem>
          <NavItem className="ml-5">
            <NavLink className={styles.navlink} tag={Link} to="/faq">
              {t('faq')}
            </NavLink>
          </NavItem>
          <NavItem className="ml-5">
            <NavLink className={styles.navlink} tag={Link} to="/partners">
              {t('partenaires')}
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar className="ml-5 mr-5 pr-5">
            <DropdownToggle nav caret>
              {t('divers')}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem tag={Link} to="/jobCategory">
                {t('categoriesEmplois')}
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem tag={Link} to="/typeAnnounce">
                {t('typeAnnonce')}
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem tag={Link} to="/userType">
                {t('typesUtilisateur')}
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem tag={Link} to="/activityFields">
                {t('secteurActivite')}
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem tag={Link} to="/errorsLog">
                {t('journalisationErreur')}
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
              {t('monDashboard')}
            </NavLink>
          </NavItem>

          <NavItem className={`ml-5 ${styles.marginLeftResp}`}>
            <NavLink className={styles.navlink} tag={Link} to="/post">
              {t('deposerAnnonce')}
            </NavLink>
          </NavItem>
          <NavItem className={`ml-5 ${styles.marginLeftResp}`}>
            <NavLink className={styles.navlink} tag={Link} to="/listAnnonce">
              {t('rechercheAnnonce')}
            </NavLink>
          </NavItem>
          <NavItem className={`ml-5 ${styles.marginLeftResp}`}>
            <NavLink className={styles.navlink} tag={Link} to="/partners">
              {t('partenaires')}
            </NavLink>
          </NavItem>
          <NavItem className={`ml-5 ${styles.marginLeftResp}`}>
            <NavLink className={styles.navlink} tag={Link} to="/faq">
              {t('faq')}
            </NavLink>
          </NavItem>

          <NavItem className={`ml-5 ${styles.marginLeftResp}`}>
            <NavLink className={styles.navlink} tag={Link} to="/contact">
              {t('contact')}
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
              {t('partenaires')}
            </NavLink>
          </NavItem>
          <NavItem className={`ml-5 ${styles.marginLeftResp}`}>
            <NavLink className={styles.navlink} tag={Link} to="/contact">
              {t('contact')}
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

SecondNavbar.propTypes = {
  role: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

export default compose(
  connect(mapStateToProps),
  withNamespaces()
)(SecondNavbar);
