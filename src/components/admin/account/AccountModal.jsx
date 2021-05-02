import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { compose } from 'redux';
import { withNamespaces } from 'react-i18next';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
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

function AccountModal({ token, userInfos, t }) {
  const [modal, setModal] = useState(false);
  const [lastName, setLastname] = useState(userInfos.lastName);
  const [firstName, setFirstname] = useState(userInfos.firstName);
  const [email, setEmail] = useState(userInfos.email);
  const [password, setPassword] = useState(userInfos.password);
  const [localisation, setLocalisation] = useState(userInfos.localisation);
  const [country, setCountry] = useState(userInfos.country);
  const [phone, setPhone] = useState(userInfos.phone_number);
  const [error, setError] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const toggle = () => setModal(!modal);

  const setToastErrorDelete = () => {
    toast.error('Une erreur est survenue, veuillez réessayer.', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const setToastSuccessDelete = () => {
    toast.success('Votre utilisateur a bien été supprimé.', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

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

  const deleteUser = async () => {
    try {
      await Axios.delete(`${host}/api/v1/users/${userInfos.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setModal(!modal);
      setToastSuccessDelete();
      history.push('/');
      dispatch({ type: 'DISCONNECT' });
    } catch (err) {
      setToastErrorDelete();
    }
  };

  return (
    <>
      <NavItem onClick={toggle}>{t('monCompte')}</NavItem>
      {error ? <p>Erreur lors de la modification</p> : ''}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Mes informations</ModalHeader>
        <Form onSubmit={handleSubmit}>
          <ModalBody>
            <FormGroup>
              <Row className={styles.rowInput}>
                <Col xs="2">
                  <Label for="lastname"> {t('nom')}</Label>
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
                  <Label for="firstname">{t('prenom')}</Label>
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
                  <Label for="password">{t('motDePasse')}</Label>
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
                  <Label for="localisation"> {t('localisation')}</Label>
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
                  <Label for="country"> {t('pays')}</Label>
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
                  <Label for="phone">{t('telMobile')}</Label>
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
          <Row className="mb-4 ml-4">
            <Col xs="4">
              <Button className="button" onClick={deleteUser}>
                Supprimer mon compte
              </Button>
            </Col>
            <Col xs={{ size: 2, offset: 4 }}>
              <Button className={styles.buttonCancel} onClick={toggle}>
                {t('annuler')}
              </Button>
            </Col>
            <Col xs="2">
              <Button className="button" type="submit">
                {t('valider')}
              </Button>
            </Col>
          </Row>
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
  t: PropTypes.func.isRequired,
};

export default compose(
  connect(mapStateToProps),
  withNamespaces()
)(AccountModal);
