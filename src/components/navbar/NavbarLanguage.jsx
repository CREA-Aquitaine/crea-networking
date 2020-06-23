import React from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { useDispatch, connect } from 'react-redux';
import PropTypes from 'prop-types';

import basque from './images/basque.png';
import france from './images/france.png';
import espagne from './images/espagne.png';

import styles from './NavBar.module.css';
import './Navbar.css';

function NavbarLanguage({ language }) {
  const dispatch = useDispatch();

  return (
    <>
      {language === 'Basque' ? (
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            <img src={basque} className={styles.drapeau} alt="drapeau basque" />
          </DropdownToggle>
          <DropdownMenu right className={styles.dropdown}>
            <DropdownItem onClick={() => dispatch({ type: 'FRANCE' })}>
              <img
                src={france}
                className={styles.drapeau}
                alt="drapeau france"
              />
            </DropdownItem>
            <DropdownItem onClick={() => dispatch({ type: 'SPAIN' })}>
              <img
                src={espagne}
                className={styles.drapeau}
                alt="drapeau espagne"
              />
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      ) : (
        ''
      )}

      {language === 'France' ? (
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            <img src={france} className={styles.drapeau} alt="drapeau france" />
          </DropdownToggle>
          <DropdownMenu right className={styles.dropdown}>
            <DropdownItem onClick={() => dispatch({ type: 'BASQUE' })}>
              <img
                src={basque}
                className={styles.drapeau}
                alt="drapeau basque"
              />
            </DropdownItem>
            <DropdownItem onClick={() => dispatch({ type: 'SPAIN' })}>
              <img
                src={espagne}
                className={styles.drapeau}
                alt="drapeau espagne"
              />
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      ) : (
        ''
      )}
      {language === 'Spain' ? (
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            <img
              src={espagne}
              className={styles.drapeau}
              alt="drapeau espagne"
            />
          </DropdownToggle>
          <DropdownMenu right className={styles.dropdown}>
            <DropdownItem onClick={() => dispatch({ type: 'FRANCE' })}>
              <img
                src={france}
                className={styles.drapeau}
                alt="drapeau france"
              />
            </DropdownItem>
            <DropdownItem onClick={() => dispatch({ type: 'BASQUE' })}>
              <img
                src={basque}
                className={styles.drapeau}
                alt="drapeau basque"
              />
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      ) : (
        ''
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  language: state.language.country,
});

NavbarLanguage.propTypes = { language: PropTypes.string.isRequired };

export default connect(mapStateToProps)(NavbarLanguage);
