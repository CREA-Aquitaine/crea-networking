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
import { withNamespaces } from 'react-i18next';

import styles from './Partners.module.css';

const ModalPartners = ({
  toggle,
  isModalOpen,
  label,
  url,
  description,
  logo,
  t,
}) => {
  return (
    <Modal isOpen={isModalOpen} toggle={toggle}>
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
        <Button className="button" onClick={toggle}>
          {t('Annuler')}
        </Button>
        <a href={url} target="blanck">
          <Button className="button" onClick={toggle}>
            {t('Web')}
          </Button>
        </a>
      </ModalFooter>
    </Modal>
  );
};

ModalPartners.propTypes = {
  toggle: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(ModalPartners);
