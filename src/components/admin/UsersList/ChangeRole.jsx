import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

import styles from './Users_List_Table.module.css';

const host = process.env.REACT_APP_HOST;

function ChangeRole({ user, token, getAllUsers }) {
  const [error, setError] = useState('');
  const [errorPut, setErrorPut] = useState('');
  const [roles, setRoles] = useState([]);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const getRoles = async () => {
    try {
      const role = await Axios.get(`${host}/api/v1/role`);
      setRoles(role.data);
    } catch (err) {
      setError(err);
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
      setModal(false);
      getAllUsers();
    } catch (err) {
      setErrorPut(err);
    }
  };
  useEffect(() => {
    getRoles();
  }, []);

  return (
    <>
      <td onClick={toggle} className={styles.role}>
        {user.RoleId ? user.Role.label : ''}
      </td>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <h4>
            Etes-vous sur de vouloir passer cet utilisateur en administrateur?
          </h4>
        </ModalBody>
        <ModalFooter>
          <Button className="button" onClick={handleRole}>
            Valider
          </Button>
          <Button className="button" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

ChangeRole.propTypes = {
  user: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  getAllUsers: PropTypes.string.isRequired,
};
export default ChangeRole;
