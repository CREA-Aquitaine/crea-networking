import React from 'react';
import { Row, Container, Col } from 'reactstrap';

import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';

import '../../index.css';
import styles from './Steps.module.css';
import inscription from './img/inscription.png';
import search from './img/search.png';
import cv from './img/cv.png';

function Steps({ t }) {
  return (
    <Container fluid className="redCrea">
      <Row>
        <h3 className="mx-auto mt-5 text-white">{t('marche')} ?</h3>
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
            <figcaption className={styles.color}>{t('inscrit')}</figcaption>
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
            <figcaption className={styles.color}>{t('annonce')}</figcaption>
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
            <figcaption className={styles.color}>{t('postule')}</figcaption>
          </figure>
        </Col>
      </Row>
    </Container>
  );
}
Steps.propTypes = {
  t: PropTypes.string.isRequired,
};

export default withNamespaces()(Steps);
