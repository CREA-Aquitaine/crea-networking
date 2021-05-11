import React from 'react';
import { Container } from 'reactstrap';
import { withNamespaces } from 'react-i18next';
import PropTypes from 'prop-types';

import TypeUserChoice from './TypeUserChoice';
import styles from './CreateAccount.module.css';

function CreateAccount({ t }) {
  return (
    <div>
      <h2>{t('sInscrire')}</h2>
      <Container className={styles.container}>
        <TypeUserChoice />
      </Container>
    </div>
  );
}

CreateAccount.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(CreateAccount);
