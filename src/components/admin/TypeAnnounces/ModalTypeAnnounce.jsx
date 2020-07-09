import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from 'reactstrap';
import Axios from 'axios';
import PropTypes from 'prop-types';

import styles from './TypeAnnounce.module.css';

function ModalType({ className, getType }) {
  const [modal, setModal] = useState(false);
  const [labelFr, setLabelFr] = useState('');
  const [labelEs, setLabelEs] = useState('');
  const [labelEus, setLabelEus] = useState('');
  const [errorPut, setErrorPut] = useState('');

  const putType = async () => {
    try {
      await Axios.put(
        `${host}/api/v1/postTypes`,
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
    } catch (err) {
      setErrorPut(err);
    }
  };

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
            value={labelEus}
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
  buttonLabel: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(ModalType);
