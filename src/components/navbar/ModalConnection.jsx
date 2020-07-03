import React from 'react';
import {
  Button,
  Modal,
  FormGroup,
  Label,
  Input,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import styles from './PopUpConnection.module.css';

function ModalConnection({ modal, toggle }) {
  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>Espace connexion</ModalHeader>
        <ModalBody>
          <FormGroup className={styles.formgroup}>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" />
          </FormGroup>
          <FormGroup className={styles.formgroup}>
            <Label for="examplePassword">Mot de passe</Label>
            <Input type="password" name="password" id="examplePassword" />
          </FormGroup>
          <Row>
            <Col xs={{ size: 3, offset: 2 }}>
              <a href="a">
                <Link onClick={toggle} to="/createAccount">
                  S&lsquo;inscrire
                </Link>
              </a>
            </Col>
            <Col>
              <a href="a" onClick={toggle}>
                Mot de passe oublié ?
              </a>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button className={styles.button} onClick={toggle}>
            Valider
          </Button>
          <Button className={styles.button} onClick={toggle}>
            Annuler
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
ModalConnection.propTypes = {
  modal: PropTypes.string.isRequired,
  toggle: PropTypes.string.isRequired,
};
export default ModalConnection;
