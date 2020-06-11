import React from 'react';
import { Container, Row } from 'reactstrap';
import styles from './Steps.module.css';

import partenaire1 from './img/partenaires/partenaire1.png';
import partenaire2 from './img/partenaires/2.jpg';
import partenaire3 from './img/partenaires/bihartean.jpg';
import partenaire4 from './img/partenaires/cci-bayonne.jpg';
import partenaire5 from './img/partenaires/escpau.jpg';

function BestFriends() {
  return (
    <Container fluid>
      <Row>
        <h3 className="mx-auto mt-5 mb-3">Ils nous font confaince</h3>
      </Row>
      <Row>
        <img src={partenaire1} alt="ok" className={styles.partenaire} />
        <img src={partenaire2} alt="ok" className={styles.partenaire} />
        <img src={partenaire3} alt="ok" className={styles.partenaire} />
        <img src={partenaire4} alt="ok" className={styles.partenaire} />
        <img src={partenaire5} alt="ok" className={styles.partenaire} />
      </Row>
    </Container>
  );
}

export default BestFriends;
