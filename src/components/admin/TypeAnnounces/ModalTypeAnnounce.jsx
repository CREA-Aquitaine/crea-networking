import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form,
  Label,
  Col,
  Row,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Axios from 'axios';
import { connect } from 'react-redux';
import styles from './TypeAnnounce.module.css';

const host = process.env.REACT_APP_HOST;

function ModalType({ className, getType, token, id }) {
  const [modal, setModal] = useState(false);
  const [labelFr, setLabelFr] = useState('');
  const [labelEs, setLabelEs] = useState('');
  const [labelEus, setLabelEus] = useState('');
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
      <Button color="danger" onClick={toggle}>
        Modifier/supprimer
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
          Modification ou suppression des données
        </ModalHeader>
        <Row>
          <Col xs={6}>
            <ModalBody>
              Modification du type d&apos;annonce
              <Form onSubmit={handleSubmit}>
                <Label for="type" />
                <Input
                  className={`${styles.input}`}
                  type="text"
                  value={labelFr}
                  placeholder="Types d'annonce"
                  onChange={(e) => setLabelFr(e.target.value)}
                />
                <Label for="type" />
                <Input
                  className={`${styles.input} mt-2`}
                  type="text"
                  placeholder="Iragarki motak"
                  value={labelEus}
                  onChange={(e) => setLabelEus(e.target.value)}
                />
                <Label for="type" />
                <Input
                  className={`${styles.input} mt-2`}
                  type="text"
                  value={labelEs}
                  placeholder="Tipos de anuncios"
                  onChange={(e) => setLabelEs(e.target.value)}
                />
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button
                className="md-auto mr-5 ml-5"
                color="warning"
                onClick={toggle}
              >
                Non
              </Button>{' '}
              <Button
                className="md-auto mr-5 ml-5"
                color="danger"
                onClick={putType}
              >
                Oui
              </Button>
            </ModalFooter>
          </Col>
          <Col xs={6}>
            <ModalBody>
              Souhaitez vous supprimer ce type d&apos;annonce ?
            </ModalBody>
            <ModalFooter>
              <Button
                className="md-auto ml-5 mr-5"
                color="warning"
                onClick={toggle}
              >
                {' '}
                Non
              </Button>{' '}
              <Button
                className="md-auto ml-5 mr-5"
                color="danger"
                onClick={deleteType}
              >
                {' '}
                Oui
              </Button>
            </ModalFooter>
          </Col>
        </Row>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => ({
  token: state.authenticated.token,
});
ModalType.propTypes = {
  token: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  getType: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(ModalType);
