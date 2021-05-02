import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Input,
  Label,
  Col,
  Row,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import Axios from 'axios';

import styles from './ForgotPassword.module.css';

const host = process.env.REACT_APP_HOST;

function ForgotPassword({ t }) {
  const [modal, setModal] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [validate, setValidate] = useState(false);

  const toggle = () => setModal(!modal);

  const handleSubmit = async () => {
    try {
      Axios.post(`${host}/api/v1/auth/forgetPassword`, {
        email,
      });
      setModal(!modal);
      return setValidate(true);
    } catch (err) {
      setError(err);
      return error;
    }
  };

  return (
    <div>
      <div
        onClick={toggle}
        onKeyDown={toggle}
        role="button"
        tabIndex={0}
        className={styles.button}
      >
        {t('motDePasse2')}
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{t('motDePasse2')}</ModalHeader>
        <ModalBody>
          <Row className="ml-4 mr-4">
            <Col xs="2">
              <Label for="email">Email</Label>
            </Col>
            <Col>
              <Input
                id="email"
                placeholder="email@email.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="mx-4 my-4">
            <em>{t('champ')}</em>
          </Row>
          {validate ? <p>{t('mailsend')}</p> : ''}
        </ModalBody>
        <Row className="mb-4 mx-4">
          <Col xs={{ size: 2, offset: 8 }}>
            <Button className="button" onClick={handleSubmit}>
              {t('valider')}
            </Button>
          </Col>
          <Col>
            <Button className={styles.buttonCancel} onClick={toggle}>
              {t('annuler')}
            </Button>
          </Col>
        </Row>
      </Modal>
    </div>
  );
}

ForgotPassword.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(ForgotPassword);
