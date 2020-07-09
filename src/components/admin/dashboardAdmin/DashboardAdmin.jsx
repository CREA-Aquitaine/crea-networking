import React, { useState, useEffect } from 'react';
import { Breadcrumb, BreadcrumbItem, Container, Row, Col } from 'reactstrap';
import { Pie } from 'react-chartjs-2';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Axios from 'axios';

import styles from './DashboardAdmin.module.css';
import LineInscription from './LineInscription';
import PieCountry from './PieCountry';

const host = process.env.REACT_APP_HOST;

function HomeAdmin({ token }) {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  const getUsers = async () => {
    try {
      const res = await Axios.get(`${host}/api/v1/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(res.data);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const usersWithUserType = users.filter((item) => item.UserType !== null);
  const jobSeeker = usersWithUserType.filter(
    (item) => item.UserType.label === "Demandeur d'emploi"
  );
  const company = usersWithUserType.filter(
    (item) => item.UserType.label === 'Entreprise'
  );
  const school = usersWithUserType.filter(
    (item) => item.UserType.label === 'Ecoles'
  );

  return (
    <Container className={styles.containerGeneral}>
      <Breadcrumb>
        <BreadcrumbItem>Accueil</BreadcrumbItem>
        <BreadcrumbItem active>Dashboard</BreadcrumbItem>
      </Breadcrumb>
      <Row>
        <Col xs="6">
          <Container Fluid className={styles.pie}>
            <h4 className={styles.userTypes}>Types d&apos;utilisateurs</h4>
            <Pie
              data={{
                datasets: [
                  {
                    data: [jobSeeker.length, school.length, company.length],
                    backgroundColor: ['#ffa500', '#ff4500', '#ffff00'],
                  },
                ],
                labels: ['Demandeurs emploi', 'Ecoles', 'Entreprises'],
              }}
            />
            <p className={styles.nbtotal}>
              Nombre total d&apos;utilisateurs : {usersWithUserType.length}
            </p>
            <p className={styles.nb}>Nb entreprises : {company.length}</p>
            <p className={styles.nb}>Nb Ecoles/Etudiants : {school.length}</p>
            <p className={styles.nb}>
              Nb de demandeurs d&apos;emploi : {jobSeeker.length}
            </p>
          </Container>
        </Col>
        <Col>
          <PieCountry />
          <LineInscription users={usersWithUserType} />
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  token: state.authenticated.token,
});

HomeAdmin.propTypes = {
  token: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(HomeAdmin);
