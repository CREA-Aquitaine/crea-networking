import React from 'react';
import { Container, Row } from 'reactstrap';
import styles from './Dashboard.module.css';
import userInfos from './User_Infos';
import DashboardTable from './Dashboard_table';

function Dashboard() {
  return (
    <Container className={styles.dashboard}>
      <Row>
        <userInfos />
      </Row>
      <Row>
        <DashboardTable />
      </Row>
      <Row>.row</Row>
    </Container>
  );
}

export default Dashboard;
