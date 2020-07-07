import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';

import styles from './Faq_List.module.css';
import FaqModal from './FaqModal';

function FaqList({ token }) {
  const [faq, setFaq] = useState([]);
  const [error, seterror] = useState('');

  const getFaq = async () => {
    try {
      const res = await Axios.get('http://localhost:8080/api/v1/faq', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFaq(res.data);
    } catch (err) {
      seterror(err);
    }
  };

  useEffect(() => {
    getFaq();
  }, []);

  return (
    <>
      <div Fluid className={styles.container}>
        {faq.map((item) => (
          <>
            <FormGroup check className={styles.checkbox}>
              <Label check />
              <Input type="checkbox" /> {item.question}
            </FormGroup>
            <p className={styles.response}>{item.answer}</p>
          </>
        ))}
      </div>
      <Row>
        <Col xs={{ size: 1.5, offset: 8 }}>
          <FaqModal />
        </Col>
        <Col xs="2">
          <Button className="button">Supprimer</Button>
        </Col>
      </Row>
    </>
  );
}

const mapStateToProps = (state) => ({
  token: state.authenticated.token,
});

FaqList.propTypes = {
  token: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(FaqList);
