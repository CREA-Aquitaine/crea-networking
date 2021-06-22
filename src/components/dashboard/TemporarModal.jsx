import React from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';

const TemporarModal = ({ isModalVisible, handleCancel, handleOk }) => {
  return (
    <Modal
      title="Changer la langue"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      Veuillez changer la langue dans votre dashboard svp
    </Modal>
  );
};

TemporarModal.propTypes = {
  isModalVisible: PropTypes.bool.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleOk: PropTypes.func.isRequired,
};

export default TemporarModal;
