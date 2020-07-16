import React, { useState } from 'react';
import {
  Col,
  Row,
  Button,
  Label,
  Input,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import Axios from 'axios';

import styles from './PopUpConnection.module.css';
import { AUTHENTICATED, USERINFOS } from '../../store/reducerUser';
import ForgotPassword from './ForgotPassword';

function PopUpConnection({ setModal, toggle, modal, t }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const getUser = async () => {
    try {
      const res = await Axios.post('http://localhost:8080/api/v1/auth/login', {
        email,
        password,
      });
      dispatch({ type: AUTHENTICATED, payload: res.data.token });
      dispatch({ type: USERINFOS, payload: res.data.user });
      if (res.data.user.Role.label === 'ADMIN') {
        dispatch({ type: 'ADMIN' });
      } else if (res.data.user.Role.label === 'USER') {
        dispatch({ type: 'USER' });
      }
      setModal(!modal);
      history.push('/dashboard');
    } catch (err) {
      setError(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getUser();
  };

  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>{t('Espace connexion')}</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup className={styles.formgroup}>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                onChange={handleEmail}
              />
            </FormGroup>
            <FormGroup className={styles.formgroup}>
              <Label for="examplePassword">{t('mdp')}</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                onChange={handlePassword}
              />
            </FormGroup>
            <Row>
              <Col xs={{ size: 3, offset: 2 }}>
                <a href="a">
                  <Link onClick={toggle} to="/createAccount">
                    {t('Inscription')}
                  </Link>
                </a>
              </Col>
              <Col>
                <ForgotPassword />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col xs={{ size: 2, offset: 7 }}>
                <Button type="submit" className={styles.button}>
                  {t('Valider')}
                </Button>
              </Col>
              <Col>
                <Button className={styles.button} onClick={toggle}>
                  {t('Annuler')}
                </Button>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col xs={{ size: 5, offset: 3 }}>
                {error ? (
                  <p className={styles.error}>
                    {t('mdp')} {t('ou')} {t('incorrect')}
                  </p>
                ) : (
                  ''
                )}
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
}
const mapStateToProps = (state) => ({
  token: state.authenticated.token,
  userInfos: state.authenticated.userInfos,
});

PopUpConnection.propTypes = {
  toggle: PropTypes.string.isRequired,
  modal: PropTypes.string.isRequired,
  setModal: PropTypes.string.isRequired,
  t: PropTypes.string.isRequired,
};

export default connect(mapStateToProps) && withNamespaces()(PopUpConnection);
