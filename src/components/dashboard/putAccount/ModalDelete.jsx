import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

import styles from './Put.module.css';

const host = process.env.REACT_APP_HOST;

function ModalDelete({ id, token }) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [errorDelete, setErrorDelete] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const deleteUser = async () => {
    try {
      await Axios.delete(`${host}/api/v1/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      history.push('/');
      dispatch({ type: 'DISCONNECT' });
    } catch (err) {
      setErrorDelete(err);
    }
  };
  return (
    <div>
      <Button className="button" onClick={toggle}>
        Supprimer mon compte
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <h3>Êtes-vous sûr de vouloir supprimer votre compte ?</h3>
        </ModalBody>
        <ModalFooter>
          <Button className="button" onClick={deleteUser}>
            Oui
          </Button>
          <Button className={styles.no} onClick={toggle}>
            Non
          </Button>
          {errorDelete ? '' : ''}
        </ModalFooter>
      </Modal>
    </div>
  );
}
const mapStateToProps = (state) => ({
  token: state.authenticated.token,
});

ModalDelete.propTypes = {
  token: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(ModalDelete);
