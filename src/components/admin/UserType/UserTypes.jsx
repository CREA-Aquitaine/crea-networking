import React, { useState, useEffect } from 'react';
import {
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
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const setToastSuccess = () => {
    toast.success("Le type d'utilisateur a bien été publiée.", {
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

  const postUserTypes = async () => {
    try {
      if (label) {
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
        setToastSuccess();
        setTimeout(() => setCreated(false), 2000);
      } else {
        setToastInput();
      }
    } catch (err) {
      setToastError();
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
      <h2 className="mt-1 mb-3">Les types d&apos;utilisateurs</h2>
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
            {created ? '' : ''}
            {error ? '' : ''}
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
