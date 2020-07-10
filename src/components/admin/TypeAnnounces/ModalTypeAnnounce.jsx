import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from 'reactstrap';
import PropTypes from 'prop-types';

import styles from './TypeAnnounce.module.css';

function ModalType({ className }) {
  const [modal, setModal] = useState(false);
  const [labelFr, setLabelFr] = useState('');
  const [labelEs, setLabelEs] = useState('');

  const toggle = () => setModal(!modal);
  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Modifier
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Input
            className={styles.input}
            type="text"
            value={labelFr}
            onChange={(e) => setLabelFr(e.target.value)}
          />
          <Input
            className={styles.input}
            type="textarea"
            value={labelEs}
            onChange={(e) => setLabelEs(e.target.value)}
          />
          <Input
            className={styles.input}
            type="text"
            onChange={(e) => setLabelEs(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Non
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Oui
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

ModalType.propTypes = {
  className: PropTypes.string.isRequired,
};

export default ModalType;
