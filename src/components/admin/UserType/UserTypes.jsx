import React, { useState, useEffect } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Container,
  Row,
  Col,
  Input,
  Button,
  Form,
  FormGroup,
  Label,
} from 'reactstrap';
import Axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './UserTypes.module.css';
import UserTypeList from './UserTypeList';

const host = process.env.REACT_APP_HOST;

function UserTypes({ token }) {
  const [userTypes, setuserTypes] = useState([]);
  const [label, setLabel] = useState('');
  const [error, setError] = useState('');
  const [created, setCreated] = useState(false);

  const getUserTypes = async () => {
    try {
      const res = await Axios.get(`${host}/api/v1/userTypes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setuserTypes(res.data);
    } catch (err) {
      setError(err);
    }
  };
  useEffect(() => {
    getUserTypes();
  }, []);

  const postUserTypes = async () => {
    try {
      await Axios.post(
        `${host}/api/v1/userTypes`,
        {
          label,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCreated(true);
      getUserTypes();
      setTimeout(() => setCreated(false), 2000);
    } catch (err) {
      setError(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postUserTypes();
    setLabel('');
  };
  return (
    <Container>
      <Breadcrumb>
        <BreadcrumbItem>Accueil</BreadcrumbItem>
        <BreadcrumbItem>Divers</BreadcrumbItem>
        <BreadcrumbItem active>Types d&apos;utilisateurs</BreadcrumbItem>
      </Breadcrumb>
      <Container fluid className={styles.container}>
        <Row className={styles.title}>
          <Col xs="4" className={styles.activityTitle}>
            Gérer les types d&apos;utilisateurs
          </Col>
        </Row>
        <Form fluid className={styles.addActivity} onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="label" />
            <Input
              className={styles.input}
              type="text"
              name="label"
              id="label"
              value={label}
              placeholder="Ajouter votre type d'utilisateur"
              onChange={(e) => setLabel(e.target.value)}
            />
          </FormGroup>
          <Row>
            <Col xs={{ size: 2, offset: 10 }}>
              <Button className="button" type="submit">
                Ajouter
              </Button>
            </Col>
            {created ? <p>Le type d&apos;utilisateurs a bien été crée.</p> : ''}
            {error ? (
              <p>
                Il y a eu une erreur lors de la création du type
                d&apos;utilisateurs.
              </p>
            ) : (
              ''
            )}
          </Row>
        </Form>
        <UserTypeList userTypes={userTypes} getUserTypes={getUserTypes} />
      </Container>
    </Container>
  );
}
const mapStateToProps = (state) => ({
  token: state.authenticated.token,
});

UserTypes.propTypes = {
  token: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(UserTypes);
