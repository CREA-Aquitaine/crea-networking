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

import TypeAnnounceList from './TypeAnnounceList';
import styles from './TypeAnnounce.module.css';

const host = process.env.REACT_APP_HOST;

function TypeAnnounce({ token }) {
  const [typePost, setTypePost] = useState([]);
  const [labelFr, setLabelFr] = useState('');
  const [labelEs, setLabelEs] = useState('');
  const [labelEus, setLabelEus] = useState('');
  const [error, setError] = useState('');
  const [created, setCreated] = useState(false);

  const getType = async () => {
    try {
      const res = await Axios.get(`${host}/api/v1/postTypes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTypePost(res.data);
    } catch (err) {
      setError(err);
    }
  };
  useEffect(() => {
    getType();
  }, []);

  const setToastSuccess = () => {
    toast.success('Votre question a bien été publiée.', {
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

  const postTypeAnnounce = async () => {
    try {
      if (labelFr && labelEs && labelEus) {
        await Axios.post(
          `${host}/api/v1/postTypes`,
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
        getType();
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
    postTypeAnnounce();
    setLabelEs('');
    setLabelEus('');
    setLabelFr('');
  };

  return (
    <Container>
      <h2 className="mt-1 mb-3">Les types d&apos;annonces</h2>
      <Container fluid className={styles.containerQR}>
        <Row className={styles.searchBar}>
          <Col xs="4" className={styles.faqTitle}>
            Gérer les types d&apos;annonces
          </Col>
        </Row>
        <Form fluid className={styles.addTypePost} onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="question" />
            <Input
              className={styles.inputQR}
              type="text"
              name="question"
              id="question"
              value={labelFr}
              placeholder="Ajouter votre type d'annonces en Français"
              onChange={(e) => setLabelFr(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="question" />
            <Input
              className={styles.inputQR}
              type="text"
              name="answer"
              id="answer"
              placeholder="Ajouter votre type d'annonces en Espagnol"
              value={labelEs}
              onChange={(e) => setLabelEs(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="question" />
            <Input
              className={styles.inputQR}
              type="text"
              name="answer"
              id="answer"
              placeholder="Ajouter votre type d'annonces en Basque"
              value={labelEus}
              onChange={(e) => setLabelEus(e.target.value)}
            />
          </FormGroup>
          <Row>
            <Col xs={{ size: 2, offset: 10 }}>
              <Button className="button" type="submit">
                Ajouter
              </Button>
            </Col>
            {created ? '' : ''}
            {error ? (
              <p>
                Il y a eu une erreur lors de la création du type d&apos;annonce.
              </p>
            ) : (
              ''
            )}
          </Row>
        </Form>
      </Container>
      <TypeAnnounceList typePost={typePost} getType={getType} />
    </Container>
  );
}
const mapStateToProps = (state) => ({
  token: state.authenticated.token,
});

TypeAnnounce.propTypes = {
  token: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(TypeAnnounce);
