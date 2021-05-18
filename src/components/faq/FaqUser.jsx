import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import Axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withNamespaces } from 'react-i18next';

import styles from './FaqUser.module.css';

const host = process.env.REACT_APP_HOST;

function FaqUser({ token, t }) {
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
      <h2 className="mt-1">{t('faq')}</h2>
      {error ? <p>{t('erreurVu')}</p> : ''}
      {faq.map((question) => (
        <div className={styles.container}>
          <h4 className={styles.question}>{question.question}</h4>
          <h5 className={styles.answer}>{question.answer}</h5>
        </div>
      ))}
    </Container>
  );
}
const mapStateToProps = (state) => ({
  token: state.authenticated.token,
});

FaqUser.propTypes = {
  token: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

export default compose(connect(mapStateToProps), withNamespaces())(FaqUser);
