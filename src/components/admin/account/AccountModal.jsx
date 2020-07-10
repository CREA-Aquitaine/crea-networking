import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  NavItem,
  FormGroup,
  Label,
  Input,
  Form,
  Row,
  Col,
} from 'reactstrap';
import Axios from 'axios';

import styles from './Account.module.css';

const host = process.env.REACT_APP_HOST;

function AccountModal({ token, userInfos }) {
  const [modal, setModal] = useState(false);
  const [lastName, setLastname] = useState(userInfos.lastName);
  const [firstName, setFirstname] = useState(userInfos.firstName);
  const [email, setEmail] = useState(userInfos.email);
  const [password, setPassword] = useState(userInfos.password);
  const [localisation, setLocalisation] = useState(userInfos.localisation);
  const [country, setCountry] = useState(userInfos.country);
  const [phone, setPhone] = useState(userInfos.phone_number);
  const [error, setError] = useState('');

  const toggle = () => setModal(!modal);

  const putUser = async () => {
    try {
      await Axios.put(
        `${host}/api/v1/users/${userInfos.id}`,
        {
          lastName,
          firstName,
          email,
          password,
          localisation,
          country,
          phone_number: phone,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setModal(!modal);
    } catch (err) {
      setError(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    putUser();
  };

  return (
    <>
      <NavItem onClick={toggle}>Mon compte</NavItem>
      {error ? <p>Erreur lors de la modification</p> : ''}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Mes informations</ModalHeader>
        <Form onSubmit={handleSubmit}>
          <ModalBody>
            <FormGroup>
              <Row className={styles.rowInput}>
                <Col xs="2">
                  <Label for="lastname">Nom</Label>
                </Col>
                <Col>
                  <Input
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={lastName}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </Col>
              </Row>
              <Row className={styles.rowInput}>
                <Col xs="2">
                  <Label for="firstname">Prénom</Label>
                </Col>
                <Col>
                  <Input
                    type="firstname"
                    name="firstname"
                    id="firstname"
                    value={firstName}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </Col>
              </Row>
              <Row className={styles.rowInput}>
                <Col xs="2">
                  <Label for="email">Email</Label>
                </Col>
                <Col>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Col>
              </Row>
              <Row className={styles.rowInput}>
                <Col xs="2">
                  <Label for="password">Password</Label>
                </Col>
                <Col>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Col>
              </Row>
              <Row className={styles.rowInput}>
                <Col xs="2">
                  <Label for="localisation">Localisation</Label>
                </Col>
                <Col>
                  <Input
                    type="localisation"
                    name="localisation"
                    id="localisation"
                    value={localisation}
                    onChange={(e) => setLocalisation(e.target.value)}
                  />
                </Col>
              </Row>
              <Row className={styles.rowInput}>
                <Col xs="2">
                  <Label for="country">Pays</Label>
                </Col>
                <Col>
                  <Input
                    type="country"
                    name="country"
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </Col>
              </Row>
              <Row className={styles.rowInput}>
                <Col xs="2">
                  <Label for="phone">Téléphone</Label>
                </Col>
                <Col>
                  <Input
                    type="phone"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Col>
              </Row>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button className={styles.buttonCancel} onClick={toggle}>
              Annuler
            </Button>
            <Button className="button" type="submit">
              Valider
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  );
}
const mapStateToProps = (state) => ({
  token: state.authenticated.token,
  userInfos: state.authenticated.userInfos,
});

AccountModal.propTypes = {
  token: PropTypes.string.isRequired,
  userInfos: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(AccountModal);
