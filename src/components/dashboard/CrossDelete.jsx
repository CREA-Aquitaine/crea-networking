import React, { useState } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';

import styles from './Dashboard_table.module.css';
import cross from './img/cross.png';

const host = process.env.REACT_APP_HOST;

function CrossDelete({ id, token, getDatas, route }) {
  const [error, setError] = useState('');

  const deletePost = async () => {
    try {
      await Axios.delete(`${host}/api/v1/${route}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getDatas();
      return '';
    } catch (err) {
      setError(err);
      return error;
    }
  };
  return (
    <button type="button" className={styles.deleteButton} onClick={deletePost}>
      <img className={styles.cross} src={cross} alt="croix" />
    </button>
  );
}

CrossDelete.propTypes = {
  token: PropTypes.string.isRequired,
  getDatas: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default CrossDelete;
