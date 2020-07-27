/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Container, Col } from 'reactstrap';
import Partner from './Partner';

import styles from './Partners.module.css';

function Partners() {
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
        <p>loading...</p>
      ) : (
        <Container>
          {error ? <p>There is an error</p> : ''}
          <h2>Nos partenaires</h2>
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

export default Partners;
