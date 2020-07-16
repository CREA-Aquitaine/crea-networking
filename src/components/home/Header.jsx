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
      <button className={styles.button} tag={Link} to="/partners" type="button">
        {t('ButtonPartenaires')}
      </button>
    </div>
  );
}

Header.propTypes = {
  t: PropTypes.string.isRequired,
};

export default withNamespaces()(Header);
