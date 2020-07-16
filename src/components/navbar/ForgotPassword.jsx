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
import Axios from 'axios';

const host = process.env.REACT_APP_HOST;

function ForgotPassword() {
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
        Mot de passe oublié ?
      </a>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Mot de passe oublié</ModalHeader>
        <ModalBody>
          <Row>
            <Col xs="2">
              <Label for="email">Votre email</Label>
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
            <em>
              Veuillez remplir ce champ pour recevoir votre nouveau mot de passe
              par mail
            </em>
          </Row>
          {validate ? <p>Un mail vient de vous être envoyé.</p> : ''}
        </ModalBody>
        <ModalFooter>
          <Button className="button" onClick={handleSubmit}>
            Validez
          </Button>
          <Button className="button" onClick={toggle}>
            Annuler
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ForgotPassword;
