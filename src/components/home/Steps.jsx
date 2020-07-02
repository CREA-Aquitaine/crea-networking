import React from 'react';
import { Row, Container, Col } from 'reactstrap';

import '../../index.css';
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
          <figure>
            <img
              width="20%"
              src={inscription}
              alt="inscription"
              className={`${styles.image} mb-4`}
            />
            <figcaption className={styles.color}>Je m&apos;inscris</figcaption>
          </figure>
        </Col>
        <Col className={styles.position}>
          <figure>
            <img
              width="20%"
              src={search}
              alt="search"
              className={`${styles.image} mb-4`}
            />
            <figcaption className={styles.color}>
              Je consulte les annonces
            </figcaption>
          </figure>
        </Col>
        <Col className={styles.position}>
          <figure>
            <img
              width="20%"
              src={cv}
              alt="cv"
              className={`${styles.image} mb-4`}
            />
            <figcaption className={styles.color}>Je postule</figcaption>
          </figure>
        </Col>
      </Row>
    </Container>
  );
}

export default Steps;
