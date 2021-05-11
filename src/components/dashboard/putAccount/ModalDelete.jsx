import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { compose } from 'redux';
import { withNamespaces } from 'react-i18next';
import styles from './Put.module.css';

const host = process.env.REACT_APP_HOST;

function ModalDelete({ id, token, t }) {
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
        {t('supprimerCompte')}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>{t('confirmSuppressionCompte')}</ModalBody>
        <ModalFooter>
          <Button className="button" onClick={deleteUser}>
            {t('oui')}
          </Button>
          <Button className={styles.no} onClick={toggle}>
            {t('non')}
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
  t: PropTypes.func.isRequired,
};

export default compose(connect(mapStateToProps), withNamespaces())(ModalDelete);
