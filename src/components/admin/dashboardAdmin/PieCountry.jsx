import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import { Pie } from 'react-chartjs-2';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Axios from 'axios';

import styles from './DashboardAdmin.module.css';

const host = process.env.REACT_APP_HOST;

function PieCountry({ token }) {
  const [error, setError] = useState('');
  const [france, setFrance] = useState([]);
  const [espagne, setEspagne] = useState([]);

  const getUsers = async () => {
    try {
      const res = await Axios.get(`${host}/api/v1/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const francais = res.data.filter((item) => item.country === 'France');
      const espagnol = res.data.filter((item) => item.country === 'Espagne');
      const filteredFrancais = francais.filter(
        (item) => item.UserType !== null
      );
      setFrance(filteredFrancais);
      setEspagne(espagnol);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container className={styles.pie}>
      {error ? "Impossible d'afficher les données" : ''}
      <h4 className={styles.userTypes}>Nombre d&apos;utilisateurs par pays</h4>
      <Pie
        data={{
          datasets: [
            {
              data: [france.length, espagne.length],
              backgroundColor: ['#ffa500', '#ffff00'],
            },
          ],
          labels: ['France', 'Espagne'],
        }}
      />
      <p className={styles.nbtotal}>
        Nombre d&apos;utilisateurs en France: {france.length}
      </p>
      <p className={styles.nbtotal2}>
        Nombre d&apos;utilisateurs en Espagne: {espagne.length}
      </p>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  token: state.authenticated.token,
});

PieCountry.propTypes = {
  token: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(PieCountry);
