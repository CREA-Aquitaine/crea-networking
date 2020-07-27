import React, { useState } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { IoMdClose } from 'react-icons/io';

import styles from './Dashboard_table.module.css';

const host = process.env.REACT_APP_HOST;

function CrossDelete({ id, token, getDatas }) {
  const [error, setError] = useState(false);

  const deletePost = async () => {
    try {
      await Axios.delete(`${host}/api/v1/posts/${id}`, {
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
    <IoMdClose onClick={deletePost} fill="#dd2b25" className={styles.cross} />
  );
}

CrossDelete.propTypes = {
  token: PropTypes.string.isRequired,
  getDatas: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CrossDelete;
