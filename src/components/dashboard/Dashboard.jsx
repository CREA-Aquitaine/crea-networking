import React from 'react';
import { Container, Row } from 'reactstrap';
import styles from './Dashboard.module.css';

function Dashboard() {
  return (
    <Container className={styles.dashboard}>
      <Row>.row</Row>
      <Row>.row</Row>
      <Row>.row</Row>
    </Container>
  );
}

export default Dashboard;
