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

import styles from './Faq_List.module.css';
import FaqList from './FaqList';

const host = process.env.REACT_APP_HOST;

function Faq({ token }) {
  const [faq, setFaq] = useState([]);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [language, setLanguage] = useState('');
  const [error, setError] = useState('');
  const [created, setCreated] = useState(false);

  const handleQuestion = (e) => {
    setQuestion(e.target.value);
  };
  const handleLanguageFrance = (e) => {
    setLanguage(e.target.value);
  };
  const handleLanguageEspagne = (e) => {
    setLanguage(e.target.value);
  };

  const handleAnswer = (e) => {
    setAnswer(e.target.value);
  };

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
  useEffect(() => {
    getFaq();
  }, []);

  const postFaq = async () => {
    try {
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
    } catch (err) {
      setError(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postFaq();
  };

  return (
    <Container>
      <Breadcrumb>
        <BreadcrumbItem>Accueil</BreadcrumbItem>
        <BreadcrumbItem active>FAQ</BreadcrumbItem>
      </Breadcrumb>
      <Container fluid className={styles.containerQR}>
        <Row className={styles.searchBar}>
          <Col xs="2" className={styles.faqTitle}>
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
              onChange={handleQuestion}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail" />
            <Input
              className={styles.inputQR}
              type="text"
              name="answer"
              id="answer"
              placeholder="Ajouter votre réponse"
              onChange={handleAnswer}
            />
          </FormGroup>
          <FormGroup>
            <Row>
              <Col xs="1">
                <Label for="exampleSelect">Pays</Label>
              </Col>
              <Col xs="3">
                <Input type="select" name="select" id="exampleSelect">
                  <option onClick={handleLanguageFrance}>France</option>
                  <option onClick={handleLanguageEspagne}>Espagne</option>
                </Input>
              </Col>
            </Row>
          </FormGroup>
          <Row>
            <Col xs={{ size: 2, offset: 10 }}>
              <Button className="button" type="submit">
                Ajouter
              </Button>
            </Col>
            {created ? <p> Votre question/réponse a bien été crée.</p> : ''}
            {error ? (
              <p>
                Il y a eu une erreur lors de la création de la question/réponse.
              </p>
            ) : (
              ''
            )}
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
};

export default connect(mapStateToProps)(Faq);
