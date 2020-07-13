import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Axios from 'axios';

import PutCompany from './PutCompany';
import PutUserInfo from './PutUserInfo';
import PutSchool from './PutSchool';

const host = process.env.REACT_APP_HOST;

function Put({ token, userInfos }) {
  const [userInformations, setUserInfos] = useState([]);
  const [userType, setUserType] = useState([]);
  const [activityFields, setActivityFields] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const getUserInfos = async () => {
    try {
      const { id } = userInfos;
      const res = await Axios.get(`${host}/api/v1/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserInfos(res.data);

      const userTypeId = res.data.UserTypeId;
      const resType = await Axios.get(
        `${host}/api/v1/userTypes/${userTypeId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUserType(resType.data);

      const activityFieldId = res.data.ActivityFieldId;
      const resActivity = await Axios.get(
        `${host}/api/v1/activityFields/${activityFieldId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setActivityFields(resActivity.data);

      setIsLoading(false);
    } catch (err) {
      setError(err);
    }
  };
  useEffect(() => {
    getUserInfos();
  }, []);

  return (
    <div>
      {userType === 'Entreprise' ? (
        <PutCompany />
      ) : userType === 'Demandeur emploi' ? (
        <PutUserInfo />
      ) : userType === 'Ecole' ? (
        <PutSchool />
      ) : (
        ''
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  token: state.authenticated.token,
  userInfos: state.authenticated.userInfos,
});

Put.propTypes = {
  token: PropTypes.string.isRequired,
  userInfos: PropTypes.string.isRequired,
};
export default connect(mapStateToProps)(Put);
