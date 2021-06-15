import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { Modal, ModalBody, ModalFooter, Button, ModalHeader } from 'reactstrap';
import { withNamespaces } from 'react-i18next';

const host = process.env.REACT_APP_HOST;

function ChangeRole({ user, token, getAllUsers, t, visible, setVisible }) {
  const [error, setError] = useState('');
  const [errorPut, setErrorPut] = useState('');
  const [roles, setRoles] = useState([]);

  const toggle = () => setVisible(!visible);

  const getRoles = async () => {
    try {
      const role = await Axios.get(`${host}/api/v1/role`);
      setRoles(role.data);
      return '';
    } catch (err) {
      setError(err);
      return error;
    }
  };

  const handleRole = async () => {
    const roleChanging = roles.filter((item) => item.id !== user.RoleId);
    try {
      await Axios.put(
        `${host}/api/v1/users/${user.id}`,
        { RoleId: roleChanging[0].id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setVisible(false);
      getAllUsers();
      return '';
    } catch (err) {
      setErrorPut(err);
      return errorPut;
    }
  };
  useEffect(() => {
    getRoles();
  }, []);

  return (
    <>
      <Modal isOpen={visible} toggle={toggle}>
        <ModalHeader>Changement de rôle</ModalHeader>
        <ModalBody>
          <p>
            <b>Êtes-vous sûr de vouloir changer le rôle de cette personne ?</b>
          </p>
        </ModalBody>
        <ModalFooter>
          <Button className="button" onClick={handleRole}>
            {t('valider')}
          </Button>
          <Button className="button" onClick={toggle}>
            {t('annuler')}
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

ChangeRole.propTypes = {
  user: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  getAllUsers: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
};

export default withNamespaces()(ChangeRole);
