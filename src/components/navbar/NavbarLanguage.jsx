import React from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { withNamespaces } from 'react-i18next';
import { useDispatch } from 'react-redux';

import eus from './images/basque.png';
import fr from './images/france.png';
import esp from './images/espagne.png';
import i18n from '../../i18n';

import styles from './NavBar.module.css';
import './Navbar.css';

function NavbarLanguage() {
  const dispatch = useDispatch();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    switch (lng) {
      case 'fr':
        dispatch({ type: 'FRANCE', payload: 'France' });
        break;
      case 'esp':
        dispatch({ type: 'SPAIN', payload: 'Spain' });
        break;
      case 'eus':
        dispatch({ type: 'BASQUE', payload: 'Basque' });
        break;

      default:
        break;
    }
  };

  return (
    <>
      {changeLanguage('fr') ? (
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            <img src={fr} className={styles.drapeau} alt="drapeau basque" />
          </DropdownToggle>
          <DropdownMenu right className={styles.dropdown}>
            <DropdownItem onClick={() => changeLanguage('esp')}>
              <img src={esp} className={styles.drapeau} alt="drapeau espagne" />
            </DropdownItem>
            <DropdownItem onClick={() => changeLanguage('eus')}>
              <img src={eus} className={styles.drapeau} alt="drapeau basque" />
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      ) : changeLanguage('eus') ? (
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            <img src={eus} className={styles.drapeau} alt="drapeau basque" />
          </DropdownToggle>
          <DropdownMenu right className={styles.dropdown}>
            <DropdownItem onClick={() => changeLanguage('eus')}>
              <img src={fr} className={styles.drapeau} alt="drapeau france" />
            </DropdownItem>
            <DropdownItem onClick={() => changeLanguage('esp')}>
              <img src={esp} className={styles.drapeau} alt="drapeau espagne" />
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      ) : changeLanguage('esp') ? (
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            <img src={esp} className={styles.drapeau} alt="drapeau espagne" />
          </DropdownToggle>
          <DropdownMenu right className={styles.dropdown}>
            <DropdownItem onClick={() => changeLanguage('fr')}>
              <img
                src={fr}
                es
                className={styles.drapeau}
                alt="drapeau france"
              />
            </DropdownItem>
            <DropdownItem onClick={() => changeLanguage('eus')}>
              <img src={eus} className={styles.drapeau} alt="drapeau basque" />
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      ) : (
        ''
      )}
    </>
  );
}

export default withNamespaces()(NavbarLanguage);
