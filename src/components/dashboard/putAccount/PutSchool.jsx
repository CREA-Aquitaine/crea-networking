import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Label, Input, Button } from 'reactstrap';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import ModalDelete from './ModalDelete';
import styles from './Put.module.css';

const host = process.env.REACT_APP_HOST;

function PutSchool({ userInfos, token, activityField }) {
  const [schoolName, setSchoolName] = useState(userInfos.companyName);
  const [firstName, setfirstName] = useState(userInfos.firstName);
  const [lastName, setlastName] = useState(userInfos.lastName);
  const [password, setpassword] = useState('');
  const [password2, setpassword2] = useState('');
  const [email, setemail] = useState(userInfos.email);
  const [phone, setphone] = useState(userInfos.phone_number);
  const [phone2, setphone2] = useState(userInfos.phone_number2);
  const [poste, setposte] = useState(userInfos.qualifiction);
  const [sector, setsector] = useState(activityField.label);
  const [localisation, setlocalisation] = useState(userInfos.localisation);
  const [country, setCountry] = useState(userInfos.country);
  const [activityFields, setActivityFields] = useState([]);
  const [ActivityFieldId, setActivityFieldId] = useState();

  const [error, setError] = useState('');

  const setToastSuccess = () => {
    toast.success('Vos informations ont bien été modifiée.', {
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

  const getActivities = async () => {
    try {
      const res = await Axios.get(`${host}/api/v1/activityFields`);
      setActivityFields(res.data);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    getActivities();
  }, []);

  const putInfo = async () => {
    const { id } = userInfos;
    if (password === password2) {
      try {
        Axios.put(
          `${host}/api/v1/users/${id}`,
          {
            lastName,
            firstName,
            email,
            password,
            localisation,
            country,
            phone_number: Number(phone),
            phone_number2: Number(phone2),
            schoolName,
            qualification: poste,
            ActivityFieldId,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setToastSuccess();
      } catch (err) {
        setToastInput();
      }
    } else {
      setToastError();
    }
  };

  return (
    <Container className={styles.container}>
      <h2>Mes informations</h2>
      <Form>
        <Row className="mt-5">
          <Col md={3}>
            <Label for="Nom" className="mt-3">
              Nom de l&apos;établissement
            </Label>
          </Col>
          <Col>
            <Input
              type="text"
              name="lastname"
              required
              id="lastname"
              value={schoolName}
              onChange={(event) => setSchoolName(event.target.value)}
              placeholder="Nom de votre établissement"
            />
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Label for="Nom" className="mt-3">
              Nom
            </Label>
          </Col>
          <Col>
            <Input
              type="text"
              name="lastname"
              id="lastname"
              required
              value={lastName}
              onChange={(event) => setlastName(event.target.value)}
              placeholder="Votre nom ..."
            />
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Label for="Prenom" className="mt-3">
              Prénom
            </Label>
          </Col>
          <Col>
            <Input
              type="text"
              name="firstname"
              id="firstname"
              required
              value={firstName}
              onChange={(event) => setfirstName(event.target.value)}
              placeholder="Votre prénom ..."
            />
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Label for="Email" className="mt-3">
              Email
            </Label>
          </Col>
          <Col>
            <Input
              type="email"
              name="email"
              required
              id="email"
              value={email}
              onChange={(event) => setemail(event.target.value)}
              placeholder="Votre adresse email"
            />
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Label for="Password" className="mt-3">
              Mot de Passe*
            </Label>
          </Col>
          <Col>
            <Input
              type="password"
              name="password"
              id="Password"
              required
              value={password}
              onChange={(event) => setpassword(event.target.value)}
              placeholder="*******"
            />
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Label for="Password" className="mt-3">
              Confirmez votre mot de passe*
            </Label>
          </Col>
          <Col>
            <Input
              type="password"
              name="Password"
              required
              id="Password"
              value={password2}
              onChange={(e) => setpassword2(e.target.value)}
              placeholder="********"
            />
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Label for="phone" className="mt-3">
              Téléphone 1
            </Label>
          </Col>
          <Col>
            <Input
              name="phone"
              id="phone"
              value={phone}
              required
              onChange={(e) => setphone(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Label for="Password" className="mt-3">
              Téléphone 2
            </Label>
          </Col>
          <Col>
            <Input
              value={phone2}
              name="phone2"
              id="phone2"
              onChange={(e) => setphone2(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Label for="localisation" className="mt-3">
              Localisation de l&apos;établissement
            </Label>
          </Col>
          <Col>
            <Input
              type="text"
              name="localisation"
              id="localisation"
              required
              value={localisation}
              onChange={(event) => setlocalisation(event.target.value)}
              placeholder="Bayonne"
            />
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs="3">
            <Label for="country">Pays</Label>
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
        <Row>
          <Col md={3}>
            <Label for="poste" className="mt-3">
              Poste dans l&apos;établissement
            </Label>
          </Col>
          <Col>
            <Input
              type="text"
              name="poste"
              required
              id="poste"
              value={poste}
              onChange={(event) => setposte(event.target.value)}
              placeholder="Etudiant, professeur, ..."
            />
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Label for="sector" className="mt-3">
              Secteur d&apos;activité de l&apos;établissement
            </Label>
          </Col>
          <Col>
            <Input
              type="select"
              name="select"
              id="exampleSelect"
              required
              value={sector}
              onChange={(event) => setsector(event.target.value)}
            >
              {error ? (
                <p>
                  Les secteurs d&apos;activité n&apos;ont pas pu être récupérés.
                </p>
              ) : (
                ''
              )}
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
        <Row className="mt-5">
          <Col xs="4">
            <ModalDelete id={userInfos.id} />
          </Col>
          <Col xs={{ size: 1, offset: 6 }}>
            <Button className="button" onClick={putInfo}>
              Valider
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

PutSchool.propTypes = {
  userInfos: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  activityField: PropTypes.string.isRequired,
};
export default PutSchool;