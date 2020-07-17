import React, { useState, useEffect } from 'react';
import { Collapse, Label, Input, Row, Col, Button, Form } from 'reactstrap';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AUTHENTICATED, USERINFOS } from '../../store/reducerUser';

import styles from './CreateAccount.module.css';

const host = process.env.REACT_APP_HOST;

function CollapseSchool({ isOpen, userTypeId, roleId }) {
  const [schoolName, setSchoolName] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [phone2, setPhone2] = useState('');
  const [localisation, setLocalisation] = useState('');
  const [country, setCountry] = useState('France');
  const [qualification, setQualification] = useState('');
  const [activityFields, setActivityFields] = useState([]);
  const [ActivityFieldId, setActivityFieldId] = useState('');
  const [error, setError] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [created, setCreated] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const setToastSuccess = () => {
    toast.success('Vous êtes bien enregistré.', {
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
  const setToastInput = () => {
    toast.info("Renseignez tous les champs s'il vous plait", {
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
        schoolName &&
        qualification &&
        ActivityFieldId &&
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
          schoolName,
          qualification,
          ActivityFieldId,
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

  const getActivities = async () => {
    try {
      const res = await Axios.get(`${host}/api/v1/activityFields`);
      setActivityFields(res.data);
      setActivityFieldId(res.data[0].id);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    getActivities();
  }, []);

  return (
    <Collapse isOpen={isOpen}>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-2">
          <Col xs="3">
            <Label for="schoolName">Nom de l&apos;établissement*</Label>
          </Col>
          <Col>
            <Input
              type="text"
              name="schoolName"
              id="schoolName"
              required
              placeholder="Wild Code School"
              onChange={(e) => setSchoolName(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs="3">
            <Label for="firstname">Votre prénom*</Label>
          </Col>
          <Col>
            <Input
              type="text"
              name="firstname"
              required
              id="firstname"
              placeholder="Jean"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs="3">
            <Label for="firstname">Votre nom*</Label>
          </Col>
          <Col>
            <Input
              type="text"
              name="lastname"
              required
              id="lastname"
              placeholder="Dupont"
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
            <Label for="password">Mot de passe*</Label>
          </Col>
          <Col>
            <Input
              type="password"
              name="password"
              required
              id="password"
              placeholder="*******"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs="3">
            <Label for="password2">Confirmez votre mot de passe*</Label>
          </Col>
          <Col>
            <Input
              type="password"
              name="password2"
              required
              id="password2"
              placeholder="*******"
              onChange={(e) => setPasswordRepeat(e.target.value)}
            />
          </Col>
        </Row>
        {errorPassword ? <p>Veuillez ressaisir votre mot de passe</p> : ''}
        <Row className="mb-2">
          <Col xs="3">
            <Label for="localisation">
              Localisation de l&apos;établissement*
            </Label>
          </Col>
          <Col>
            <Input
              type="text"
              name="localisation"
              required
              id="localisation"
              placeholder="Biarritz"
              onChange={(e) => setLocalisation(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs="3">
            <Label for="country">Pays*</Label>
          </Col>
          <Col>
            <Input
              type="select"
              name="country"
              required
              id="country"
              onChange={(e) => setCountry(e.target.value)}
            >
              <option>France</option>
              <option>Espagne</option>
            </Input>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs="3">
            <Label for="phone">Téléphone*</Label>
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
            <Label for="phone2">Téléphone 2 </Label>
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
        <Row className="mb-2">
          <Col xs="3">
            <Label for="poste">Poste dans l&apos;établissement*</Label>
          </Col>
          <Col>
            <Input
              type="text"
              required
              name="poste"
              id="poste"
              placeholder="Etudiant, professeur, ..."
              onChange={(e) => setQualification(e.target.value)}
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs="3">
            <Label for="exampleSelect">
              Secteur d&apos;activité de l&apos;établissement*
            </Label>
          </Col>
          <Col>
            <Input type="select" name="select" id="exampleSelect" required>
              {activityFields.map((item) => (
                <option
                  value={item.id}
                  onClick={() => setActivityFieldId(item.id)}
                >
                  {item.labelFr}
                </option>
              ))}
            </Input>
          </Col>
        </Row>
        <p className={styles.champs}>Les champs * sont obligatoires.</p>
        <Row>
          <Col xs={{ size: 2, offset: 5 }}>
            <Button className={`${styles.buttonValidate} button`} type="submit">
              Valider
            </Button>
          </Col>
        </Row>
        {created ? <p>L&apos;utilisateur a bien été créé</p> : ''}
        {error ? <p>Erreur lors de la création de l&apos;utilisateur</p> : ''}
      </Form>
    </Collapse>
  );
}

const mapStateToProps = (state) => ({
  token: state.authenticated.token,
  userInfos: state.authenticated.userInfos,
});

CollapseSchool.propTypes = {
  isOpen: PropTypes.string.isRequired,
  roleId: PropTypes.string.isRequired,
  userTypeId: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(CollapseSchool);
