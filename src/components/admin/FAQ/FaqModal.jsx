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
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { compose } from 'redux';
import { withNamespaces } from 'react-i18next';

import styles from './Faq_List.module.css';

const host = process.env.REACT_APP_HOST;

function FaqModal({ request, response, id, country, token, getFaq, t }) {
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

  const setToastSuccessPut = () => {
    toast.success('Votre question a bien été modifiée.', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const setToastSuccessDelete = () => {
    toast.success('Votre question a bien été supprimée.', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const setToastErrorPut = () => {
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

  const setToastErrorDelete = () => {
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

  const setToastInputPut = () => {
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

  const putFaq = async () => {
    try {
      if (question && answer) {
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
        setToastSuccessPut();
      } else {
        setToastInputPut();
      }
    } catch (err) {
      setToastErrorPut();
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
      setToastSuccessDelete();
    } catch (err) {
      setToastErrorDelete();
      setErrorDelete(err);
    }
  };

  return (
    <div>
      {error ? '' : ''}
      {errorDelete ? '' : ''}
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
                  {t('annuler')}
                </Button>
              </Col>
              <Col xs="2">
                <Button className="button" type="submit">
                  {t('valider')}
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
  getFaq: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default compose(connect(mapStateToProps), withNamespaces())(FaqModal);
