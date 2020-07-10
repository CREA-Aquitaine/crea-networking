import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  Row,
  Col,
  Input,
  Label,
  Form,
} from 'reactstrap';
import Axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './Faq_List.module.css';

const host = process.env.REACT_APP_HOST;

function FaqModal({ request, response, id, country, token, getFaq }) {
  const [modal, setModal] = useState(false);
  const [question, setQuestion] = useState(request);
  const [answer, setAnswer] = useState(response);
  const [error, setError] = useState('');
  const [language, setLanguage] = useState(country);
  const [errorDelete, setErrorDelete] = useState(false);

  const toggle = () => setModal(!modal);

  const handleQuestion = (e) => {
    setQuestion(e.target.value);
  };
  const handleAnswer = (e) => {
    setAnswer(e.target.value);
  };

  const handleLanguageFrance = (e) => {
    setLanguage(e.target.value);
  };
  const handleLanguageEspagne = (e) => {
    setLanguage(e.target.value);
  };

  const putFaq = async () => {
    try {
      await Axios.put(
        `${host}/api/v1/faq/${id}`,
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
      setModal(!modal);
      getFaq();
    } catch (err) {
      setError(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    putFaq();
  };

  const deleteFaq = async () => {
    try {
      await Axios.delete(`${host}/api/v1/faq/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setModal(!modal);
      getFaq();
    } catch (err) {
      setErrorDelete(err);
    }
  };

  return (
    <div>
      {errorDelete ? <p>La question/réponse a bien été supprimé</p> : ''}
      {error ? <p>Il y a eu une erreur lors de la modification.</p> : ''}
      <Button className="button" onClick={toggle}>
        Modifier
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <h5 className={styles.title}>MODIFICATION DE LA QUESTION/REPONSE</h5>
          <p className={styles.subtitle}>
            <i>
              Modifier votre question/réponse et cliquez sur valider pour
              l&apos;enregistrer
            </i>
          </p>

          {/* TODO : review placeholder/value input */}
          <Form onSubmit={handleSubmit}>
            <Label for="quest" />
            <Input
              id="quest"
              className={styles.question}
              type="textarea"
              value={question}
              onChange={handleQuestion}
            />
            <Label for="reponse" />
            <Input
              id="reponse"
              type="textarea"
              className={styles.reponse}
              value={answer}
              onChange={handleAnswer}
            />
            <Row>
              <Col xs="1">
                <Label for="exampleSelect">Pays</Label>
              </Col>
              <Col xs="3">
                {language === 'France' ? (
                  <Input type="select" name="select" id="exampleSelect">
                    <option onClick={handleLanguageFrance}>France</option>
                    <option onClick={handleLanguageEspagne}>Espagne</option>
                  </Input>
                ) : (
                  <Input type="select" name="select" id="exampleSelect">
                    <option onClick={handleLanguageEspagne}>Espagne</option>
                    <option onClick={handleLanguageFrance}>France</option>
                  </Input>
                )}
              </Col>
            </Row>
            <Row className="mt-5">
              <Col xs="3">
                <Button className="button" onClick={deleteFaq}>
                  Supprimer
                </Button>
              </Col>
              <Col xs={{ size: 2, offset: 5 }}>
                <Button className={styles.buttonDropdown} onClick={toggle}>
                  Annuler
                </Button>
              </Col>
              <Col xs="2">
                <Button className="button" type="submit">
                  Valider
                </Button>
              </Col>
            </Row>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => ({
  token: state.authenticated.token,
});

FaqModal.propTypes = {
  token: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  request: PropTypes.string.isRequired,
  response: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  getFaq: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(FaqModal);
