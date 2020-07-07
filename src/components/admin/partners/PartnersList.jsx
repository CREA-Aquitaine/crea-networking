import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

import star from './images/star.svg';
import starYellow from './images/starYellow.svg';
import styles from './Partner.module.css';

function PartnersList({ partners }) {
  return (
    <div Fluid className={styles.container}>
      {partners.map((item) => (
        <>
          <Row className={styles.row}>
            <Col xs="3">
              <img src={item.logo} alt="logo" />
            </Col>
            <Col>
              <Row>
                <Col>
                  <p className={styles.titreDescription}>{item.label}</p>
                </Col>
                <Col xs="1">
                  {item.favorite ? (
                    <img
                      className={styles.star}
                      src={starYellow}
                      alt="étoile"
                    />
                  ) : (
                    <img className={styles.star} src={star} alt="étoile" />
                  )}
                </Col>
              </Row>
              <p className={styles.titreDescription}>{item.description}</p>
              <p className={styles.titreDescription}>{item.url}</p>
            </Col>
          </Row>
        </>
      ))}
    </div>
  );
}

PartnersList.propTypes = {
  partners: PropTypes.string.isRequired,
};
export default PartnersList;
