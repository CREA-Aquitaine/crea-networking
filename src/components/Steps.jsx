import React from 'react';
import { Row, Container, Col } from 'reactstrap';

import '../index.css';
import styles from './Steps.module.css';
import inscription from './img/inscription.png';
import search from './img/search.png';
import cv from './img/cv.png';

function Steps() {
  return (
    <Container fluid className="redCrea">
      <Row>
        <h3 className="mx-auto mt-5 text-white">Comment ça marche ?</h3>
      </Row>
      <Row className={styles.size}>
        <Col className={styles.position}>
          <img src={inscription} alt="inscription" className="mb-4" />
          <p className={styles.color}>je m&apos;inscris</p>
        </Col>
        <Col className={styles.position}>
          <img src={search} alt="search" className="mb-4" />
          <p className={styles.color}>Je consulte les annonces</p>
        </Col>
        <Col className={styles.position}>
          <img src={cv} alt="cv" className="mb-4" />
          <p className={styles.color}>Je postule</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Steps;
