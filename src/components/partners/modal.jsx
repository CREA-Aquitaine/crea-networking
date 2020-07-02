import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';

const ModalPartners = (props) => {
  const { className, toggle, isModalOpen, label, url, description } = props;

  return (
    <Modal isOpen={isModalOpen} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle}>{label}</ModalHeader>
      <ModalBody>{description}</ModalBody>
      <ModalFooter>
        <a href={url} target="blanck">
          <Button color="danger" onClick={toggle}>
            Site Web
          </Button>{' '}
        </a>
      </ModalFooter>
    </Modal>
  );
};

ModalPartners.propTypes = {
  className: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
  isModalOpen: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ModalPartners;
