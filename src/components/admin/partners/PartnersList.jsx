import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

import { AiOutlineStar } from 'react-icons/ai';

import starYellow from './images/starYellow.svg';
import styles from './Partner.module.css';
import PartnerModal from './PartnerModal';

function PartnersList({ partners, getPartners }) {
  return (
    <div Fluid className={styles.container}>
      {partners.map((item) => (
        <div className={styles.row} key={item.id}>
          <Row>
            <Col xs="3">
              <img className={styles.logoPartner} src={item.logo} alt="logo" />
            </Col>
            <Col>
              <Row>
                <Col>
                  <p className={styles.titreDescription}>{item.label}</p>
                </Col>
                <Col md="1" xs="2">
                  {item.favorite === '1' ? (
                    <img
                      className={styles.star}
                      src={starYellow}
                      alt="étoile"
                    />
                  ) : (
                    <AiOutlineStar />
                  )}
                </Col>
              </Row>
              <p className={styles.titreDescription}>{item.description}</p>
              <p className={styles.titreDescription}>{item.url}</p>
            </Col>
          </Row>
          <Row className="justify-content-end">
            <Col md="2" xs="4">
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
