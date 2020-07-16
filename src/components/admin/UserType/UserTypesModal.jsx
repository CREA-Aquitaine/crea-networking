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

import styles from './UserTypes.module.css';

const host = process.env.REACT_APP_HOST;

function UserTypesModal({ labelf, token, getUserTypes, id }) {
  const [modal, setModal] = useState(false);
  const [label, setLabel] = useState(labelf);
  const [error, setError] = useState('');
  const [errorDelete, setErrorDelete] = useState(false);

  const toggle = () => setModal(!modal);

  const setToastSuccessPut = () => {
    toast.success("Le type d'utilisateur a bien été modifiée.", {
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
    toast.success("Le type d'utilisateur a bien été supprimée.", {
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

  const putUserTypes = async () => {
    try {
      if (label) {
        await Axios.put(
          `${host}/api/v1/userTypes/${id}`,
          {
            label,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setModal(!modal);
        getUserTypes();
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
    putUserTypes();
  };

  const deleteUserTypes = async () => {
    try {
      await Axios.delete(`${host}/api/v1/userTypes/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setModal(!modal);
      getUserTypes();
      setToastSuccessDelete();
    } catch (err) {
      setToastErrorDelete();
      setErrorDelete(err);
    }
  };

  return (
    <div>
      {errorDelete ? '' : ''}
      {error ? '' : ''}
      <Button className="button" onClick={toggle}>
        Modifier
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <h5 className={styles.titleModal}>
            MODIFICATION DU SECTEUR D&apos;ACTIVITE
          </h5>
          <p className={styles.subtitle}>
            <i>
              Modifier le secteur d&apos;activité et cliquez sur valider pour
              l&apos;enregistrer
            </i>
          </p>
          <Form onSubmit={handleSubmit}>
            <Label for="labelFr" />
            <Input
              id="labelFr"
              className={styles.question}
              type="text"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
            />
            <Row className="mt-5">
              <Col xs="3">
                <Button className="button" onClick={deleteUserTypes}>
                  Supprimer
                </Button>
              </Col>
              <Col xs={{ size: 2, offset: 5 }}>
                <Button className={styles.buttonCancel} onClick={toggle}>
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

UserTypesModal.propTypes = {
  token: PropTypes.string.isRequired,
  labelf: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  getUserTypes: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(UserTypesModal);
