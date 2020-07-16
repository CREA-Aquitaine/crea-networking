import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';

const host = process.env.REACT_APP_HOST;

function UserName({ id, token }) {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');

  const getUser = async () => {
    try {
      const res = await Axios.get(`${host}/api/v1/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(res.data);
      return user;
    } catch (err) {
      setError(err);
      return error;
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <td>
      {user.lastName} {user.firstName}
    </td>
  );
}

UserName.propTypes = {
  id: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};

export default UserName;
