import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalBody } from 'reactstrap';
import styles from './Dashboard_table.module.css';

function Comment({ comment, title }) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <a href={toggle} onClick={toggle} className={styles.modalComment}>
        voir message
      </a>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <h5>{title}</h5>
          <p>{comment}</p>
        </ModalBody>
      </Modal>
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Comment;
