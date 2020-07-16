import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Label,
  Col,
  Row,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import Axios from 'axios';

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
      return setValidate(true);
    } catch (err) {
      setError(err);
      return error;
    }
  };

  return (
    <div>
      <a href="a" onKeyDown={toggle} role="button" tabIndex={0}>
        {t('mdp2')}
      </a>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{t('mdp2')}</ModalHeader>
        <ModalBody>
          <Row>
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
          <Row>
            <em>{t('champ')}</em>
          </Row>
          {validate ? <p>{t('mailsend')}</p> : ''}
        </ModalBody>
        <ModalFooter>
          <Button className="button" onClick={handleSubmit}>
            {t('Validez')}
          </Button>
          <Button className="button" onClick={toggle}>
            {t('Annuler')}
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

ForgotPassword.propTypes = {
  t: PropTypes.string.isRequired,
};

export default withNamespaces()(ForgotPassword);
