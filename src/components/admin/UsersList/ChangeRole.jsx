import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap';

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
      setModal(false);
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
      <td className={styles.role}>
        <div onClick={toggle} onKeyDown={toggle} role="button" tabIndex={0}>
          {user.RoleId ? user.Role.label : ''}
        </div>
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