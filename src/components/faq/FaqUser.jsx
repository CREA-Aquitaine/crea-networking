import React, { useState, useEffect } from 'react';
import { Breadcrumb, BreadcrumbItem, Container, Row, Col } from 'reactstrap';
import Axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from '../admin/FAQ/Faq_List.module.css';

const host = process.env.REACT_APP_HOST;

function FaqUser({ token }) {
  const [faq, setFaq] = useState([]);
  const [error, setError] = useState('');

  const getFaq = async () => {
    try {
      const res = await Axios.get(`${host}/api/v1/faq`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFaq(res.data);
    } catch (err) {
      setError(err);
    }
  };
  useEffect(() => {
    getFaq();
  }, []);

  return (
    <Container>
      <Breadcrumb>
        <BreadcrumbItem>Accueil</BreadcrumbItem>
        <BreadcrumbItem active>FAQ</BreadcrumbItem>
      </Breadcrumb>
      {error ? <p>error</p> : ''}

      {faq.map((question) => (
        <Container fluid className={styles.containerQR}>
          <Row className={styles.searchBar}>
            <Col xs="2" className={styles.faqTitle}>
              {question.question}
            </Col>
          </Row>
          <Row>
            <Col style={{ textAlign: 'left' }}>
              <strong>{question.answer}</strong>
            </Col>
          </Row>
        </Container>
      ))}
    </Container>
  );
}
const mapStateToProps = (state) => ({
  token: state.authenticated.token,
});

FaqUser.propTypes = {
  token: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(FaqUser);
