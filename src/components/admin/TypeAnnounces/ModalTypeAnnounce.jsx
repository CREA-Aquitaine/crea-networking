import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalBody,
  Input,
  Form,
  Label,
  Col,
  Row,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { compose } from 'redux';
import { withNamespaces } from 'react-i18next';

import Axios from 'axios';
import { connect } from 'react-redux';
import styles from './TypeAnnounce.module.css';

const host = process.env.REACT_APP_HOST;

function ModalType({ french, euskara, castillan, getType, token, id, t }) {
  const [modal, setModal] = useState(false);
  const [labelFr, setLabelFr] = useState(french);
  const [labelEs, setLabelEs] = useState(castillan);
  const [labelEus, setLabelEus] = useState(euskara);
  const [errorPut, setErrorPut] = useState('');
  const [errorDelete, setErrorDelete] = useState(false);

  const setToastSuccessPut = () => {
    toast.success("Votre type d'annonce a bien été modifiée.", {
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
    toast.success("Votre type d'annonce a bien été supprimée.", {
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

  const putType = async () => {
    try {
      if (labelFr && labelEus && labelEs) {
        await Axios.put(
          `${host}/api/v1/postTypes/${id}`,
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
        setModal(!modal);
        getType();
        setToastSuccessPut();
      } else {
        setToastInputPut();
      }
    } catch (err) {
      setErrorPut(err);
      setToastErrorPut();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    putType();
  };

  const deleteType = async () => {
    try {
      await Axios.delete(`${host}/api/v1/postTypes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getType();
      setToastSuccessDelete();
    } catch (err) {
      setToastErrorDelete();
      setErrorDelete(err);
    }
  };

  const toggle = () => setModal(!modal);
  return (
    <div>
      {errorDelete ? '' : ''}
      {errorPut ? '' : ''}
      <Button className="button" onClick={toggle}>
        Modifier
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        {/* <ModalHeader toggle={toggle}>
          Modification ou suppression des données
        </ModalHeader> */}
        {/* <Row> */}
        {/* <Col xs={6}> */}
        <ModalBody>
          <h5 className={styles.titleModal}>
            MODIFICATION DU TYPE D&apos;ANNONCES
          </h5>
          <p className={styles.subtitle}>
            <i>
              Modifiez votre type d&apos;annonce et cliquez sur valider pour
              l&apos;enregistrer
            </i>
          </p>
          <Form onSubmit={handleSubmit}>
            <Label for="labelFr" />
            <Input
              id="labelFr"
              className={styles.input}
              type="text"
              value={labelFr}
              onChange={(e) => setLabelFr(e.target.value)}
            />
            <Label for="labelEs" />
            <Input
              className={`${styles.input} mt-2`}
              id="labelEs"
              type="text"
              value={labelEs}
              onChange={(e) => setLabelEs(e.target.value)}
            />
            <Label for="labelEus" />
            <Input
              className={`${styles.input} mt-2`}
              type="text"
              id="labelEus"
              value={labelEus}
              onChange={(e) => setLabelEus(e.target.value)}
            />
            <Row className="mt-5">
              <Col xs="3">
                <Button className="mb-2 ml-2 button" onClick={deleteType}>
                  Supprimer
                </Button>
              </Col>
              <Col xs={{ size: 2, offset: 5 }}>
                <Button className={styles.buttonCancel} onClick={toggle}>
                  {t('annuler')}
                </Button>
              </Col>
              <Col xs="2">
                <Button className="button mb-2" type="submit">
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
ModalType.propTypes = {
  token: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  getType: PropTypes.func.isRequired,
  french: PropTypes.string.isRequired,
  castillan: PropTypes.string.isRequired,
  euskara: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

export default compose(connect(mapStateToProps), withNamespaces())(ModalType);
