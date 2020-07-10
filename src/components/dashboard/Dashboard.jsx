import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './Dashboard.module.css';
import UserInfos from './User_Infos';
import DashboardTable from './Dashboard_table';
import DashboardBreadcrumb from './DashboardBreadcrumb';

const host = process.env.REACT_APP_HOST;

function Dashboard({ token }) {
  const [userInfos, setUserInfos] = useState([]);
  const [userTypes, setUserTypes] = useState([]);
  const [activityFields, setActivityFields] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState('');

  const getUserInfos = async () => {
    try {
      const id = '53ed22b3-91f3-45b9-a7f3-69d71f799d7e';
      const res = await Axios.get(`${host}/api/v1/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserInfos(res.data);

      const userTypeId = res.data[0].UserTypeId;
      const resType = await Axios.get(
        `${host}/api/v1/userTypes/${userTypeId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUserTypes(resType.data);

      const activityFieldId = res.data[0].ActivityFieldId;
      const resActivity = await Axios.get(
        `${host}/api/v1/activityFields/${activityFieldId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setActivityFields(resActivity.data);

      setisLoading(false);
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
              userInfos={userInfos}
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
});

Dashboard.propTypes = {
  token: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Dashboard);
