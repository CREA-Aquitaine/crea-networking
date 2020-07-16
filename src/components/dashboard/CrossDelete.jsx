import React, { useState } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { Modal, Button, ModalBody, ModalFooter } from 'reactstrap';

import styles from './Dashboard_table.module.css';
import cross from './img/cross.png';

const host = process.env.REACT_APP_HOST;

function CrossDelete({ id, token, getDatas, route }) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [error, setError] = useState(false);

  const deletePost = async () => {
    try {
      await Axios.delete(`${host}/api/v1/${route}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getDatas();
      setModal(!modal);
      return '';
    } catch (err) {
      setError(err);
      return error;
    }
  };
  return (
    <div>
      <button type="button" className={styles.deleteButton} onClick={toggle}>
        <img className={styles.cross} src={cross} alt="croix" />
      </button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <h5>Êtes-vous sûr de vouloir supprimer ?</h5>
        </ModalBody>
        <ModalFooter>
          <Button className="button" onClick={deletePost}>
            Oui
          </Button>
          <Button className="button" onClick={toggle}>
            Non
          </Button>
          {error ? '' : ''}
        </ModalFooter>
      </Modal>
    </div>
  );
}

CrossDelete.propTypes = {
  token: PropTypes.string.isRequired,
  getDatas: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default CrossDelete;
