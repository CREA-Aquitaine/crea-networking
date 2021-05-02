import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { compose } from 'redux';
import { withNamespaces } from 'react-i18next';

import styles from './Dashboard.module.css';
import UserInfos from './User_Infos';
import DashboardTable from './Dashboard_table';

const host = process.env.REACT_APP_HOST;

function Dashboard({ token, userInfos, t }) {
  const [userInformations, setUserInfos] = useState([]);
  const [userTypes, setUserTypes] = useState([]);
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
      setUserTypes(resType.data);
      if (res.data.ActivityFieldId) {
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
      }
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
          <h2>{t('monCompte')}</h2>
          <Container className={styles.userInfos}>
            <UserInfos
              userInfos={userInformations}
              activityFields={activityFields}
              userTypes={userTypes}
            />
          </Container>
          <Container className={styles.dashboardTable}>
            <DashboardTable />
          </Container>
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
  t: PropTypes.func.isRequired,
};

export default compose(connect(mapStateToProps), withNamespaces())(Dashboard);
