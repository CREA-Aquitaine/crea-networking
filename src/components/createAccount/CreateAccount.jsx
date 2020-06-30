import React from 'react';
import { Container } from 'reactstrap';

import TypeUserChoice from './TypeUserChoice';
import banner from '../image/img_header_crea.png';
import styles from './CreateAccount.module.css';

function CreateAccount() {
  return (
    <div>
      <img className={styles.banner} src={banner} alt="banner" />
      <h2>Inscription</h2>
      <Container className={styles.container}>
        <TypeUserChoice />
      </Container>
    </div>
  );
}

export default CreateAccount;
