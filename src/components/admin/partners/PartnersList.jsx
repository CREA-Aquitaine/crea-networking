import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

import star from './images/star.svg';
import starYellow from './images/starYellow.svg';
import styles from './Partner.module.css';
import PartnerModal from './PartnerModal';

function PartnersList({ partners, getPartners }) {
  return (
    <div Fluid className={styles.container}>
      {partners.map((item) => (
        <div className={styles.row}>
          <Row>
            <Col xs="3">
              <img className={styles.logoPartner} src={item.logo} alt="logo" />
            </Col>
            <Col>
              <Row>
                <Col>
                  <p className={styles.titreDescription}>{item.label}</p>
                </Col>
                <Col xs="1">
                  {item.favorite === '1' ? (
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
          <Row>
            <Col xs={{ size: 1.5, offset: 10 }}>
              <PartnerModal
                getPartners={getPartners}
                isfavorite={item.favorite}
                id={item.id}
                urlPartner={item.url}
                descriptionPartner={item.description}
                labelPartner={item.label}
                image={item.logo}
              />
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
}

PartnersList.propTypes = {
  partners: PropTypes.string.isRequired,
  getPartners: PropTypes.string.isRequired,
};
export default PartnersList;
