import React, { useState } from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { withNamespaces } from 'react-i18next';
import { compose } from 'redux';

import { useHistory } from 'react-router-dom';
import styles from './NavBar.module.css';

import PopUpConnection from './PopUpConnection';

import AccountModal from '../admin/account/AccountModal';

import TraductionNav from './TraductionNav';

function FirstNavbar({ role, t }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const disconnect = () => {
    dispatch({ type: 'DISCONNECT' });
    history.push('/');
  };

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <Navbar color="light" expand="xs" className={styles.nav}>
      <Nav navbar className={`${styles.navbar} mr-5`}>
        <NavItem className={`${styles.navItem} mr-5 mt-2`}>
          {role === 'admin' ? <AccountModal /> : ''}
        </NavItem>
        {role === 'admin' ? (
          <NavItem
            className={`${styles.navItem} mr-5 mt-2`}
            onClick={disconnect}
          >
            {t('Deconnexion')}
          </NavItem>
        ) : role === 'user' ? (
          <NavItem
            className={`${styles.navItem} mr-5 mt-2`}
            onClick={disconnect}
          >
            {t('Deconnexion')}
          </NavItem>
        ) : (
          <NavItem className="mr-5">
            <NavLink className={styles.navItem} onClick={toggle}>
              {t('Espace connexion')}
            </NavLink>
            <PopUpConnection
              setModal={setModal}
              toggle={toggle}
              modal={modal}
            />
          </NavItem>
        )}

        {/* <NavItem>
          <NavLink>{t('Langue')}</NavLink>
        </NavItem> */}
        <TraductionNav />
      </Nav>
    </Navbar>
  );
}
const mapStateToProps = (state) => ({
  role: state.role.isRole,
});

FirstNavbar.propTypes = {
  role: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

export default compose(connect(mapStateToProps), withNamespaces())(FirstNavbar);
