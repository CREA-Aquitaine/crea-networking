import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Pie } from 'react-chartjs-2';
import { withNamespaces } from 'react-i18next';
import { compose } from 'redux';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Axios from 'axios';

import styles from './DashboardAdmin.module.css';
import PieCountry from './PieCountry';

const host = process.env.REACT_APP_HOST;

function HomeAdmin({ token, t }) {
  const [types, setTypes] = useState([]);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);

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

  const getUsers = async () => {
    try {
      const res = await Axios.get(`${host}/api/v1/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const filteredUsers = res.data.filter((user) => user.UserType !== null);
      setUsers(filteredUsers);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    getData();
    getUsers();
  }, []);

  return (
    <Container className={styles.containerGeneral}>
      <h2 className="mt-1 mb-3">{t('monDashboard')}</h2>
      {error && <p>Erreur lors de la récupération des données</p>}
      <Row>
        <Col xs="12" md="6">
          <Container Fluid className={styles.pie}>
            <h4 className={styles.userTypes}>typeUtilisateur</h4>
            <Pie
              data={{
                datasets: [
                  {
                    data: types.map((item) => item.Users.length),
                    // TODO: bind these colors with types state
                    backgroundColor: ['#ffa500', '#ff4500', '#ffff00'],
                  },
                ],
                labels: types.map((item) => item.label),
              }}
            />
            <p className={styles.nbtotal}>
              Nombre total d&apos;utilisateurs : {users.length}
            </p>
          </Container>
        </Col>
        <Col>
          <PieCountry />
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
  t: PropTypes.func.isRequired,
};

export default compose(connect(mapStateToProps), withNamespaces())(HomeAdmin);
