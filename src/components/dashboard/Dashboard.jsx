import React from 'react';
import styles from './Dashboard.module.css';
import UserInfos from './User_Infos';
import DashboardTable from './Dashboard_table';
import DashboardBreadcrumb from './DashboardBreadcrumb';

function Dashboard() {
  return (
    <div className={styles.dashboard}>
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
