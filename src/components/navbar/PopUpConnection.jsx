import React, { useState } from 'react';
import {
  NavLink,
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
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import Axios from 'axios';

import styles from './PopUpConnection.module.css';
import { AUTHENTICATED, USERINFOS } from '../../store/reducerUser';

function PopUpConnection({ setModal, toggle, modal }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

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
      {error ? (
        <div className=" pl-1 pr-1 bg-danger rounded">
          <p>Mot de passe ou identifiant incorrect</p>
        </div>
      ) : (
        ''
      )}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>Espace connexion</ModalHeader>
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
              <Label for="examplePassword">Mot de passe</Label>
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
            <Row className="mt-3">
              <Col xs={{ size: 2, offset: 8 }}>
                <Button type="submit" className={styles.button}>
                  Valider
                </Button>
              </Col>
              <Col>
                <Button className={styles.button} onClick={toggle}>
                  Annuler
                </Button>
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
};

export default connect(mapStateToProps)(PopUpConnection);
