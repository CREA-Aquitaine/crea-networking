import React, { useState, useEffect } from 'react';
import { Breadcrumb, BreadcrumbItem, Container, Row, Col } from 'reactstrap';
import { Pie } from 'react-chartjs-2';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Axios from 'axios';

import styles from './DashboardAdmin.module.css';
// import LineInscription from './LineInscription';
import PieCountry from './PieCountry';

const host = process.env.REACT_APP_HOST;

function HomeAdmin({ token }) {
  const [types, setTypes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const typesRes = await Axios.get(`${host}/api/v1/userTypes`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const typesWithUsersPromise = typesRes.data.map((type) => {
          return Axios.get(`${host}/api/v1/userTypes/${type.id}/users`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        });

        const res = await Promise.all(typesWithUsersPromise);

        const datas = res.map((r) => r.data);
        setTypes(datas);
      } catch (err) {
        setError(err);
      }
    };
    getData();
  }, []);

  return (
    <Container className={styles.containerGeneral}>
      <Breadcrumb>
        <BreadcrumbItem>Accueil</BreadcrumbItem>
        <BreadcrumbItem active>Dashboard</BreadcrumbItem>
      </Breadcrumb>
      {error && <p>Erreur lors de la récupération des données</p>}
      <Row>
        <Col xs="6">
          <Container Fluid className={styles.pie}>
            <h4 className={styles.userTypes}>Types d&apos;utilisateurs</h4>
            <Pie
              data={{
                datasets: [
                  {
                    data: types.map((t) => t.Users.length),
                    // TODO: bind these colors with types state
                    backgroundColor: ['#ffa500', '#ff4500', '#ffff00'],
                  },
                ],
                labels: types.map((t) => t.label),
              }}
            />
            {/* <p className={styles.nbtotal}></p> */}
            {types.map((type) => {
              return (
                <p className={styles.nb}>
                  {type.label} : {type.Users.length}
                </p>
              );
            })}
          </Container>
        </Col>
        <Col>
          <PieCountry />
          {/* TODO : connect graph to createAt */}

          {/* <LineInscription users={usersWithUserType} /> */}
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
