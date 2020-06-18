import React from 'react';

import styles from './Dashboard.module.css';
import UserInfos from './User_Infos';
import DashboardTable from './Dashboard_table';

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.userInfos}>
        <UserInfos />
      </div>
      <div className={styles.dashboardTable}>
        <DashboardTable />
      </div>
    </div>
  );
}

export default Dashboard;
