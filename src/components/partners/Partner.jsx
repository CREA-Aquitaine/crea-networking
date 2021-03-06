/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { Col } from 'reactstrap';
import PropTypes from 'prop-types';

import styles from './Partners.module.css';
import ModalPartners from './modal';

function Partner(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggle = () => setIsModalOpen(!isModalOpen);
  const { label, url, description, logo } = props;
  return (
    <Col className="py-3">
      <img
        onClick={toggle}
        className={styles.logoPartner}
        onKeyDown={toggle}
        src={logo}
        alt="blabla"
      />
      <ModalPartners
        toggle={toggle}
        isModalOpen={isModalOpen}
        label={label}
        url={url}
        description={description}
        logo={logo}
      />
    </Col>
  );
}

Partner.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

export default Partner;
