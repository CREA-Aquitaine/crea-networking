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

import styles from './ActivityFields.module.css';
import ActivityFieldsList from './ActivityFieldsList';

const host = process.env.REACT_APP_HOST;

function ActivityFields({ token }) {
  const [activity, setActivity] = useState([]);
  const [labelFr, setLabelFr] = useState('');
  const [labelEs, setLabelEs] = useState('');
  const [labelEus, setLabelEus] = useState('');
  const [error, setError] = useState('');
  const [created, setCreated] = useState(false);

  const getActivity = async () => {
    try {
      const res = await Axios.get(`${host}/api/v1/activityFields`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setActivity(res.data);
    } catch (err) {
      setError(err);
    }
  };
  useEffect(() => {
    getActivity();
  });

  const setToastSuccess = () => {
    toast.success("Votre secteur d'activité a bien été publiée.", {
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

  const postActivity = async () => {
    try {
      if (labelFr && labelEs && labelEus) {
        await Axios.post(
          `${host}/api/v1/activityFields`,
          {
            labelFr,
            labelEs,
            labelEus,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCreated(true);
        getActivity();
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
    postActivity();
    setLabelEs('');
    setLabelEus('');
    setLabelFr('');
  };
  return (
    <Container>
      <h2 className="mt-1 mb-3">Les secteurs d&apos;activité</h2>
      <Container fluid className={styles.container}>
        <Row className={styles.title}>
          <Col xs="12" md="4" className={`m-3 ${styles.activityTitle}`}>
            Gérer les secteurs d&apos;activité
          </Col>
        </Row>
        <Form fluid className={styles.addActivity} onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="labelFr" />
            <Input
              className={styles.input}
              type="text"
              name="labelFr"
              id="labelFr"
              value={labelFr}
              placeholder="Ajouter votre secteur d'activité en français"
              onChange={(e) => setLabelFr(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="labelEs" />
            <Input
              className={styles.input}
              type="text"
              name="labelEs"
              id="labelEs"
              value={labelEs}
              placeholder="Ajouter votre secteur d'activité en espagnol"
              onChange={(e) => setLabelEs(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="labelEus" />
            <Input
              className={styles.inputEnd}
              type="text"
              name="labelEus"
              id="labelEus"
              value={labelEus}
              placeholder="Ajouter votre secteur d'activité en basque"
              onChange={(e) => setLabelEus(e.target.value)}
            />
          </FormGroup>
          <Row className="justify-content-end">
            <Col md="2" xs="4">
              <Button className="button" type="submit">
                Ajouter
              </Button>
            </Col>
            {created ? '' : ''}
            {error ? (
              <p>
                Il y a eu une erreur lors de la création du secteur
                d&apos;activité.
              </p>
            ) : (
              ''
            )}
          </Row>
        </Form>
        <ActivityFieldsList
          activityFields={activity}
          getActivity={getActivity}
        />
      </Container>
    </Container>
  );
}
const mapStateToProps = (state) => ({
  token: state.authenticated.token,
});

ActivityFields.propTypes = {
  token: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(ActivityFields);
