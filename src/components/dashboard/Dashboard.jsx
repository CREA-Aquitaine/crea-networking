import React from 'react';
import styles from './Dashboard.module.css';
import UserInfos from './User_Infos';
import DashboardTable from './Dashboard_table';
import DashboardBreadcrumb from './DashboardBreadcrumb';
import banner from '../image/img_header_crea.png';

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <img
        src={banner}
        alt="header crea"
        className={styles.banner}
        width="100%"
        height="100%"
      />
      <DashboardBreadcrumb />
      <div className={styles.userInfos}>
        <UserInfos />
      </div>
      <div className={styles.dashboardTable}>
        <DashboardTable />
      </div>
      <hr className="hrFooter" />
    </div>
  );
}

export default Dashboard;
