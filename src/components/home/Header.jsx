import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';

import styles from './Header.module.css';

function Header({ t }) {
  return (
    <div className={`${styles.presentation} my-5`}>
      <h2>{t('TitrePresentation')}</h2>
      <p className={styles.pres}>{t('TextePresentation')}</p>
      <Link to="/partners">
        <button className={styles.button} type="button">
          {t('ButtonPartenaires')}
        </button>
      </Link>
    </div>
  );
}

Header.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(Header);
