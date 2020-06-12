import React from 'react';
import { Container, Row } from 'reactstrap';

import styles from './Dashboard.module.css';
import UserInfos from './User_Infos';
import DashboardTable from './Dashboard_table';

function Dashboard() {
  return (
    <Container className={styles.dashboard}>
      <Row className={styles.userInfos}>
        <UserInfos />
      </Row>
      <Row>
        <DashboardTable />
      </Row>
      <Row>FOOTER</Row>
    </Container>
  );
}

export default Dashboard;
