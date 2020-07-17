import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import styles from './Steps.module.css';

const host = process.env.REACT_APP_HOST;

function BestFriends({ t }) {
  const [partners, setPartners] = useState([]);

  const getPartners = async () => {
    try {
      const res = await Axios.get(`${host}/api/v1/partners`);
      return setPartners(res.data);
    } catch (err) {
      return err;
    }
  };

  useEffect(() => {
    getPartners();
  }, []);

  const partnersFavorite = partners.filter((item) => item.favorite === '1');
  return (
    <Container fluid className={`${styles.partner} my-5`}>
      <Row>
        <h3 className="mx-auto mt-5 mb-3">{t('confiance')}</h3>
      </Row>
      <Row className="mt-5">
        {partnersFavorite.map((item) => (
          <Col key={item.id}>
            <img
              className={styles.partenaire}
              alt={item.label}
              src={item.logo}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

BestFriends.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(BestFriends);
