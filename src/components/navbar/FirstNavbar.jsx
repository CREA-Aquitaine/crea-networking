import React, { useState } from 'react';
import { Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';

import NavbarLanguage from './NavbarLanguage';
import PopUpConnection from './PopUpConnection';

import styles from './NavBar.module.css';
import './Navbar.css';
import AccountModal from '../admin/account/AccountModal';

function FirstNavbar({ role }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();

  const disconnect = () => {
    dispatch({ type: 'DISCONNECT' });
  };

  const [modal, setModal] = useState(false);
  const toggle2 = () => setModal(!modal);

  return (
    <Navbar color="light" expand="xs" className={styles.nav}>
      <NavbarToggler onClick={toggle} />
      <Nav navbar className={`${styles.navbar} mr-5`}>
        <NavItem className={`${styles.navItem} mr-5 mt-2`}>
          {role === 'admin' ? <AccountModal /> : ''}
        </NavItem>
        {role === 'admin' ? (
          <NavItem
            className={`${styles.navItem} mr-5 mt-2`}
            onClick={disconnect}
          >
            Se déconnecter
          </NavItem>
        ) : role === 'user' ? (
          <NavItem
            className={`${styles.navItem} mr-5 mt-2`}
            onClick={disconnect}
          >
            Se déconnecter
          </NavItem>
        ) : (
          <NavItem className="mr-5">
            <NavLink className={styles.navItem} onClick={toggle2}>
              Espace connexion
            </NavLink>
            <PopUpConnection
              setModal={setModal}
              toggle={toggle2}
              modal={modal}
            />
          </NavItem>
        )}

        <NavItem>
          <NavLink>Langue</NavLink>
        </NavItem>
        <NavbarLanguage />
      </Nav>
    </Navbar>
  );
}
const mapStateToProps = (state) => ({
  role: state.role.isRole,
});

FirstNavbar.propTypes = { role: PropTypes.string.isRequired };

export default connect(mapStateToProps)(FirstNavbar);
