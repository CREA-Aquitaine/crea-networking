import React, { Component } from 'react';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import basque from './images/basque.png';
import france from './images/france.png';
import espagne from './images/espagne.png';

import styles from './NavBar.module.css';
import './Navbar.css';

class NavbarLanguage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'france',
    };
    this.handleBasque = this.handleBasque.bind(this);
    this.handleSpain = this.handleSpain.bind(this);
    this.handleFrance = this.handleFrance.bind(this);
  }

  handleBasque() {
    this.setState({ language: 'basque' });
  }

  handleFrance() {
    this.setState({ language: 'france' });
  }

  handleSpain() {
    this.setState({ language: 'espagne' });
  }

  render() {
    const { language } = this.state;
    return (
      <>
        {language === 'basque' ? (
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              <img
                src={basque}
                className={styles.drapeau}
                alt="drapeau basque"
              />
            </DropdownToggle>
            <DropdownMenu right className={styles.dropdown}>
              <DropdownItem onClick={this.handleFrance}>
                <img
                  src={france}
                  className={styles.drapeau}
                  alt="drapeau france"
                />
              </DropdownItem>
              <DropdownItem onClick={this.handleSpain}>
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

        {language === 'france' ? (
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              <img
                src={france}
                className={styles.drapeau}
                alt="drapeau france"
              />
            </DropdownToggle>
            <DropdownMenu right className={styles.dropdown}>
              <DropdownItem onClick={this.handleBasque}>
                <img
                  src={basque}
                  className={styles.drapeau}
                  alt="drapeau basque"
                />
              </DropdownItem>
              <DropdownItem onClick={this.handleSpain}>
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
        {language === 'espagne' ? (
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              <img
                src={espagne}
                className={styles.drapeau}
                alt="drapeau espagne"
              />
            </DropdownToggle>
            <DropdownMenu right className={styles.dropdown}>
              <DropdownItem onClick={this.handleFrance}>
                <img
                  src={france}
                  className={styles.drapeau}
                  alt="drapeau france"
                />
              </DropdownItem>
              <DropdownItem onClick={this.handleBasque}>
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
}

export default NavbarLanguage;
