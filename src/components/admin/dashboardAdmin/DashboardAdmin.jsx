import React from 'react';
import { Breadcrumb, BreadcrumbItem, Container } from 'reactstrap';

import graph from '../../image/dashboardAdmin_placeholder.png';

import styles from './DashboardAdmin.module.css';

function HomeAdmin() {
  return (
    <Container>
      <Breadcrumb>
        <BreadcrumbItem>Accueil</BreadcrumbItem>
        <BreadcrumbItem active>Dashboard</BreadcrumbItem>
      </Breadcrumb>
      <img src={graph} className={styles.graph} alt="graph" />
    </Container>
  );
}

export default HomeAdmin;
