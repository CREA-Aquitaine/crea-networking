import React, { useState } from 'react';
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

function Faq({ token }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [language, setLanguage] = useState('français');
  const [error, setError] = useState('');
  const [created, setCreated] = useState(false);

  const handleQuestion = (e) => {
    setQuestion(e.target.value);
  };

  const handleAnswer = (e) => {
    setAnswer(e.target.value);
  };

  const postFaq = async () => {
    try {
      await Axios.post(
        'http://localhost:8080/api/v1/faq',
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
              placeholder="Votre question"
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
              placeholder="Votre réponse"
              onChange={handleAnswer}
            />
          </FormGroup>
          <Row>
            <Col xs={{ size: 2, offset: 10 }}>
              <Button className="button" type="submit">
                Valider
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
        <FaqList />
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
