import React from 'react';
import { Container } from 'reactstrap';

import TypeUserChoice from './TypeUserChoice';
import styles from './CreateAccount.module.css';

function CreateAccount() {
  return (
    <div>
      <h2>Inscription</h2>
      <Container className={styles.container}>
        <TypeUserChoice />
      </Container>
    </div>
  );
}

export default CreateAccount;
