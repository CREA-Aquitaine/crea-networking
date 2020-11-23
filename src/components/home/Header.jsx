import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';

import { Container } from 'reactstrap';
import styles from './Header.module.css';

function Header({ t }) {
  return (
    <Container className={`${styles.presentation} my-5`}>
      <h2>{t('TitrePresentation')}</h2>
      <p className={styles.pres}>{t('TextePresentationPremPartie')}</p>
      <p className={styles.pres}>{t('TextePresentationDeuxPartie')}</p>
      <p className={styles.pres}>{t('TextePresentationTroisPartie')}</p>
      <Link to="/partners">
        <button className={styles.button} type="button">
          {t('ButtonPartenaires')}
        </button>
      </Link>
    </Container>
  );
}

Header.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(Header);
