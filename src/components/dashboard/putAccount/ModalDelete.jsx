import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';

function ModalDelete({ className, deleteInfo }) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Supprimer mon compte
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader>Supprimer</ModalHeader>
        <ModalBody>Voulez-vous supprimer votre compte ?</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={deleteInfo}>
            Oui
          </Button>
          <Button color="secondary" onClick={toggle}>
            Non
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

ModalDelete.propTypes = {
  className: PropTypes.string.isRequired,
  deleteInfo: PropTypes.string.isRequired,
};

export default ModalDelete;
