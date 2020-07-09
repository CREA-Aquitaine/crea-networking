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

import styles from './UserTypes.module.css';

const host = process.env.REACT_APP_HOST;

function UserTypesModal({ labelf, token, getUserTypes, id }) {
  const [modal, setModal] = useState(false);
  const [label, setLabel] = useState(labelf);
  const [error, setError] = useState('');
  const [errorDelete, setErrorDelete] = useState(false);

  const toggle = () => setModal(!modal);

  const putUserTypes = async () => {
    try {
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
    } catch (err) {
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
    } catch (err) {
      setErrorDelete(err);
    }
  };

  return (
    <div>
      {errorDelete ? <p>Le secteur d&apos;activité a bien été supprimé</p> : ''}
      {error ? <p>Il y a eu une erreur lors de la modification.</p> : ''}
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
