import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './Dashboard.module.css';
import UserInfos from './User_Infos';
import DashboardTable from './Dashboard_table';
import DashboardBreadcrumb from './DashboardBreadcrumb';

function Dashboard({ token, userInfos }) {
  const [userInformations, setUserInfos] = useState([]);
  const [userTypes, setUserTypes] = useState([]);
  const [activityFields, setActivityFields] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const getUserInfos = async () => {
    try {
      const { id } = userInfos;
      const res = await Axios.get(`http://localhost:8080/api/v1/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserInfos(res.data);

      const userTypeId = res.data.UserTypeId;
      const resType = await Axios.get(
        `http://localhost:8080/api/v1/userTypes/${userTypeId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUserTypes(resType.data);

      const activityFieldId = res.data.ActivityFieldId;
      const resActivity = await Axios.get(
        `http://localhost:8080/api/v1/activityFields/${activityFieldId}`,
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
    <>
      {isLoading ? (
        <>
          <h1>Loading...</h1>
          <h2>{error}</h2>
        </>
      ) : (
        <div className={styles.dashboard}>
          <DashboardBreadcrumb />
          <div className={styles.userInfos}>
            <UserInfos
              userInfos={userInformations}
              activityFields={activityFields}
              userTypes={userTypes}
            />
          </div>
          <div className={styles.dashboardTable}>
            <DashboardTable />
          </div>
          <hr className="hrFooter" />
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  token: state.authenticated.token,
  userInfos: state.authenticated.userInfos,
});
Dashboard.propTypes = {
  token: PropTypes.string.isRequired,
  userInfos: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Dashboard);
