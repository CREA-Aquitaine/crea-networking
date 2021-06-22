import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalBody } from 'reactstrap';
import { withNamespaces } from 'react-i18next';
import styles from './Dashboard_table.module.css';

function Comment({ comment, title, t }) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className="mt-1">
      <button type="button" onClick={toggle} className={styles.modalComment}>
        {t('voirMessage')}
      </button>

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
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(Comment);
