import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import styles from './Dashboard.module.css';
import UserInfos from './User_Infos';
import DashboardTable from './Dashboard_table';
import DashboardBreadcrumb from './DashboardBreadcrumb';

function Dashboard() {
  const [userInfos, setUserInfos] = useState([]);
  const [userTypes, setUserTypes] = useState([]);
  const [activityFields, setActivityFields] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const getUserInfos = async () => {
    try {
      const id = '53ed22b3-91f3-45b9-a7f3-69d71f799d7e';
      const res = await Axios.get(`http://localhost:8080/api/v1/users/${id}`);
      setUserInfos(res.data);

      const userTypeId = res.data[0].UserTypeId;
      const resType = await Axios.get(
        `http://localhost:8080/api/v1/userTypes/${userTypeId}`
      );
      setUserTypes(resType.data);

      const activityFieldId = res.data[0].ActivityFieldId;
      const resActivity = await Axios.get(
        `http://localhost:8080/api/v1/activityFields/${activityFieldId}`
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

export default Dashboard;
