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

import styles from './JobCategory.module.css';
import JobCategoryList from './JobCategoryList';

const host = process.env.REACT_APP_HOST;

function JobCategory({ token }) {
  const [category, setCategory] = useState([]);
  const [labelFr, setLabelFr] = useState('');
  const [labelEs, setLabelEs] = useState('');
  const [labelEus, setLabelEus] = useState('');
  const [error, setError] = useState('');
  const [created, setCreated] = useState(false);

  const getCategories = async () => {
    try {
      const res = await Axios.get(`${host}/api/v1/jobCategories`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCategory(res.data);
    } catch (err) {
      setError(err);
    }
  };
  useEffect(() => {
    getCategories();
  });

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

  const postCategory = async () => {
    try {
      if (labelFr && labelEs && labelEus) {
        await Axios.post(
          `${host}/api/v1/jobCategories`,
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
        getCategories();
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
    postCategory();
    setLabelEs('');
    setLabelEus('');
    setLabelFr('');
  };

  return (
    <Container>
      <h2 className="mt-1 mb-3">Les catégories d&apos;emploi</h2>
      <Container fluid className={styles.container}>
        <Row className={styles.title}>
          <Col xs="4" className={styles.activityTitle}>
            Gérer les catégories d&apos;emploi
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
              placeholder="Ajouter votre catégorie en français"
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
              placeholder="Ajouter votre catégorie en espagnol"
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
              placeholder="Ajouter votre catégorie en basque"
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
              <p>Il y a eu une erreur lors de la création de la catégorie.</p>
            ) : (
              ''
            )}
          </Row>
        </Form>
        <JobCategoryList jobCategory={category} getCategories={getCategories} />
      </Container>
    </Container>
  );
}
const mapStateToProps = (state) => ({
  token: state.authenticated.token,
});

JobCategory.propTypes = {
  token: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(JobCategory);
