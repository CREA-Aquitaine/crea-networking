import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
} from 'reactstrap';
import PropTypes from 'prop-types';

import styles from './Partners.module.css';

const ModalPartners = (props) => {
  const {
    className,
    toggle,
    isModalOpen,
    label,
    url,
    description,
    logo,
  } = props;

  return (
    <Modal isOpen={isModalOpen} toggle={toggle} className={className}>
      <ModalHeader>
        <Row className={styles.rowHeaders}>
          <Col xs="9">{label}</Col>
          <Col className={styles.logo}>
            <img className={styles.logo} src={logo} alt={label} />
          </Col>
        </Row>
      </ModalHeader>
      <ModalBody>{description}</ModalBody>
      <ModalFooter>
        <a href={url} target="blanck">
          <Button className="button" onClick={toggle}>
            Site Web
          </Button>
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
  logo: PropTypes.string.isRequired,
};

export default ModalPartners;
