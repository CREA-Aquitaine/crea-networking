/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Container, Col } from 'reactstrap';
import { withNamespaces } from 'react-i18next';
import PropTypes from 'prop-types';

import Partner from './Partner';
import styles from './Partners.module.css';

function Partners({ t }) {
  const [partners, setPartners] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState('');

  const getPartner = async () => {
    const host = process.env.REACT_APP_HOST;
    try {
      const res = await axios.get(`${host}/api/v1/partners`);
      setPartners(res.data);
      setisLoading(false);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    getPartner();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Chargement...</p>
      ) : (
        <Container>
          {error ? <p>I y a une erreur</p> : ''}
          <h2>{t('nosPartenaires')}</h2>
          <Row className={styles.rowPartners}>
            {partners.map((item) => (
              <Col xs="3" className={styles.colLogo} key={item.id}>
                <Partner {...item} />
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </>
  );
}

Partners.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(Partners);
