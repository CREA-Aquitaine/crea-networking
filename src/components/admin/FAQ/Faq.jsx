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
import { compose } from 'redux';
import { withNamespaces } from 'react-i18next';

import styles from './Faq_List.module.css';
import FaqList from './FaqList';

const host = process.env.REACT_APP_HOST;

function Faq({ token, t }) {
  const [faq, setFaq] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [language, setLanguage] = useState('France');
  const [error, setError] = useState('');
  const [created, setCreated] = useState(false);

  const getFaq = async () => {
    try {
      const res = await Axios.get(`${host}/api/v1/faq`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFaq(res.data);
    } catch (err) {
      setError(err);
    }
  };

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

  const postFaq = async () => {
    try {
      if (question && answer && language) {
        await Axios.post(
          `${host}/api/v1/faq`,
          {
            question,
            answer,
            language,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCreated(true);
        getFaq();
        setToastSuccess();
        setTimeout(() => setCreated(false), 2000);
        setQuestion('');
        setAnswer('');
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
    postFaq();
  };

  useEffect(() => {
    getFaq();
  }, []);

  return (
    <Container>
      <h2 className="mt-1 mb-3">{t('faq')}</h2>
      <Container fluid className={`${styles.containerQR}`}>
        <Row className={styles.searchBar}>
          <Col xs="12" md="2" className={`mb-3 ${styles.faqTitle}`}>
            Gérer la FAQ
          </Col>
        </Row>
        <Form fluid className={styles.addQR} onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="question" />
            <Input
              className={styles.inputQR}
              type="text"
              name="question"
              id="question"
              placeholder="Ajouter votre question"
              onChange={(e) => setQuestion(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail" />
            <Input
              className={styles.inputQR}
              type="textarea"
              name="answer"
              id="answer"
              placeholder="Ajouter votre réponse"
              onChange={(e) => setAnswer(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Row>
              <Col md="1" xs="4">
                <Label for="exampleSelect">Pays</Label>
              </Col>
              <Col md="3" xs="6">
                <Input
                  type="select"
                  name="select"
                  id="exampleSelect"
                  value={language}
                >
                  <option onClick={(e) => setLanguage(e.target.value)}>
                    France
                  </option>
                  <option onClick={(e) => setLanguage(e.target.value)}>
                    Espagne
                  </option>
                </Input>
              </Col>
            </Row>
          </FormGroup>
          <Row className="justify-content-end">
            <Col md="2" xs="4">
              <Button className="button" type="submit">
                Ajouter
              </Button>
            </Col>
            {created ? '' : ''}
            {error ? '' : ''}
          </Row>
        </Form>
        <FaqList faq={faq} getFaq={getFaq} />
      </Container>
    </Container>
  );
}
const mapStateToProps = (state) => ({
  token: state.authenticated.token,
});

Faq.propTypes = {
  token: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

export default compose(connect(mapStateToProps), withNamespaces())(Faq);
