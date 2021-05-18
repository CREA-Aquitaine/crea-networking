import React, { useState } from 'react';
import { Collapse, Label, Input, Row, Col, Form, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { withNamespaces } from 'react-i18next';

import { AUTHENTICATED, USERINFOS } from '../../store/reducerUser';

import styles from './CreateAccount.module.css';

const host = process.env.REACT_APP_HOST;

function CollapseSeeker({ isOpen, userTypeId, roleId, t }) {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [localisation, setLocalisation] = useState('');
  const [country, setCountry] = useState('France');
  const [phone2, setPhone2] = useState('');
  const [error, setError] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [created, setCreated] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const setToastSuccess = () => {
    toast.success(t('userCree'), {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const setToastError = () => {
    toast.error(t('erreurReessaye'), {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const setToastInput = () => {
    toast.info(t('renseignerChamps'), {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const postUser = async () => {
    try {
      if (
        lastName &&
        firstName &&
        email &&
        password &&
        localisation &&
        country &&
        phone &&
        userTypeId &&
        roleId
      ) {
        await Axios.post(`${host}/api/v1/auth/register`, {
          lastName,
          firstName,
          email,
          password,
          localisation,
          country,
          phone_number: Number(phone),
          phone_number2: Number(phone2),
          UserTypeId: userTypeId,
          RoleId: roleId,
        });
        setCreated(true);
        setToastSuccess();
      } else {
        setToastInput();
      }
    } catch (err) {
      setError(err);
      setToastError();
    }
  };
  const postRegister = async () => {
    try {
      const res = await Axios.post(`${host}/api/v1/auth/login`, {
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
      history.push('/dashboard');
    } catch (err) {
      setError(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === passwordRepeat) {
      try {
        await postUser();
        await postRegister();
      } catch (err) {
        setError(err);
      }
    } else {
      setErrorPassword(true);
    }
  };

  return (
    <Collapse isOpen={isOpen}>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-2">
          <Col xs="3">
            <Label for="nameOrganisation">{t('prenom')}*</Label>
          </Col>
          <Col>
            <Input
              type="text"
              name="firstname"
              id="firstname"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs="3">
            <Label for="lastname">{t('nom')}*</Label>
          </Col>
          <Col>
            <Input
              type="text"
              required
              name="lastname"
              id="lastname"
              onChange={(e) => setLastName(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs="3">
            <Label for="email">Email*</Label>
          </Col>
          <Col>
            <Input
              type="email"
              name="email"
              required
              id="email"
              placeholder="jean.dupont@world.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs="3">
            <Label for="password">{t('motDePasse')}*</Label>
          </Col>
          <Col>
            <Input
              type="password"
              name="password"
              required
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs="3">
            <Label for="password2">{t('confirmMotPasse')}*</Label>
          </Col>
          <Col>
            <Input
              type="password"
              name="password2"
              id="password2"
              required
              onChange={(e) => setPasswordRepeat(e.target.value)}
            />
          </Col>
        </Row>
        {errorPassword ? <p>{t('saisirPasse')}</p> : ''}
        <Row className="mb-2">
          <Col xs="3">
            <Label for="localisation">{t('localisation')}*</Label>
          </Col>
          <Col>
            <Input
              type="text"
              required
              name="localisation"
              id="localisation"
              onChange={(e) => setLocalisation(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs="3">
            <Label for="country">{t('langue')}*</Label>
          </Col>
          <Col>
            <Input
              type="select"
              name="country"
              required
              id="country"
              onChange={(e) => setCountry(e.target.value)}
            >
              <option>Español</option>
              <option>Euskara</option>
              <option>Français</option>
            </Input>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs="3">
            <Label for="phone">{t('telMobile')}*</Label>
          </Col>
          <Col>
            <Input
              type="text"
              required
              name="phone"
              id="phone"
              placeholder="0102030405"
              onChange={(e) => setPhone(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs="3">
            <Label for="phone2">{t('telFixe')}</Label>
          </Col>
          <Col>
            <Input
              type="text"
              name="phone2"
              id="phone2"
              placeholder="0102030405"
              onChange={(e) => setPhone2(e.target.value)}
            />
          </Col>
        </Row>
        <p className={styles.champs}>{t('champsObligatoire')}.</p>
        <Row>
          <Col xs={{ size: 2, offset: 5 }}>
            <Button className={`${styles.buttonValidate} button`} type="submit">
              {t('valider')}
            </Button>
          </Col>
        </Row>
        {created ? <p>{t('confirmCreationUser')}</p> : ''}
        {error ? <p>{t('erreurCreatUser')}</p> : ''}
      </Form>
    </Collapse>
  );
}

CollapseSeeker.propTypes = {
  isOpen: PropTypes.string.isRequired,
  roleId: PropTypes.string.isRequired,
  userTypeId: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(CollapseSeeker);
