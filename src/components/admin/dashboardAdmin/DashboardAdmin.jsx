import React from 'react';
import { Breadcrumb, BreadcrumbItem, Container, Row, Col } from 'reactstrap';
import { Pie } from 'react-chartjs-2';

import styles from './DashboardAdmin.module.css';
// import BarStat from './BarStat';
import LineInscription from './LineInscription';

function HomeAdmin() {
  return (
    <Container className={styles.containerGeneral}>
      <Breadcrumb>
        <BreadcrumbItem>Accueil</BreadcrumbItem>
        <BreadcrumbItem active>Dashboard</BreadcrumbItem>
      </Breadcrumb>
      <Row>
        <Col xs="6">
          <Container Fluid className={styles.pie}>
            <p className={styles.userTypes}>Types d&apos;utilisateurs</p>
            <Pie
              data={{
                datasets: [
                  {
                    data: [10, 20, 30],
                    backgroundColor: ['#ffa500', '#ff4500', '#ffff00'],
                  },
                ],
                labels: ['Demandeurs emploi', 'Ecoles', 'Entreprises'],
              }}
            />
            <p className={styles.nbtotal}>
              Nombres total d&apos;utilisateurs : 258
            </p>
          </Container>
        </Col>
        <Col>
          <LineInscription />
          {/* <BarStat /> */}
        </Col>
      </Row>
    </Container>
  );
}

export default HomeAdmin;
