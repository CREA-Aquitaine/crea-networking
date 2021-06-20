import React from 'react';
import { Button } from 'reactstrap';
import { withNamespaces } from 'react-i18next';
import { useDispatch } from 'react-redux';

import basque from './images/basque.png';
import france from './images/france.png';
import espagne from './images/espagne.png';
import i18n from '../../i18n';

import styles from './NavBar.module.css';

function TraductionNav() {
  const dispatch = useDispatch();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    switch (lng) {
      case 'fr':
        dispatch({ type: 'FRANCE', payload: 'France' });
        localStorage.setItem('currentLanguage', 'fr');
        break;
      case 'esp':
        dispatch({ type: 'SPAIN', payload: 'Spain' });
        localStorage.setItem('currentLanguage', 'esp');
        break;
      case 'eus':
        dispatch({ type: 'BASQUE', payload: 'Basque' });
        localStorage.setItem('currentLanguage', 'eus');
        break;

      default:
        localStorage.setItem('currentLanguage', '');
        break;
    }
  };

  return (
    <>
      <Button
        style={{
          backgroundColor: 'inherit',
          borderColor: 'inherit',
          border: '0',
        }}
        onClick={() => changeLanguage('fr')}
      >
        <img className={styles.drapeau} src={france} alt="drapeau france" />
      </Button>
      <Button
        style={{
          backgroundColor: 'inherit',
          borderColor: 'inherit',
          border: '0',
        }}
        onClick={() => changeLanguage('eus')}
      >
        <img className={styles.drapeau} src={basque} alt="drapeau basque" />
      </Button>
      <Button
        style={{
          backgroundColor: 'inherit',
          borderColor: 'inherit',
          border: '0',
        }}
        onClick={() => changeLanguage('esp')}
      >
        <img src={espagne} className={styles.drapeau} alt="drapeau espagne" />
      </Button>
    </>
  );
}

export default withNamespaces()(TraductionNav);
