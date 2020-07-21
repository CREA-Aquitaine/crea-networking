import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Row } from 'reactstrap';

import UsersListTable from './Users_List_Table';
import styles from './Users_List_Table.module.css';

const host = process.env.REACT_APP_HOST;

function UsersList({ token }) {
  const [usersList, setUserslist] = useState([]);
  const [error, setError] = useState('');
  const [isUserType, setUserType] = useState(false);

  const getAllUsers = async () => {
    try {
      const res = await Axios.get(`${host}/api/v1/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserslist(res.data);
      setUserType(true);
    } catch (err) {
      setError(error);
    }
    return isUserType;
  };

  const getCompanies = async () => {
    try {
      const res = await Axios.get('http://localhost:8080/api/v1/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const companies = res.data.filter((user) => {
        if (user.UserType) {
          return user.UserType.label === 'Entreprise';
        }
        return '';
      });
      setUserslist(companies);
      setUserType(true);
    } catch (err) {
      setError(error);
    }
    return isUserType;
  };

  const getSchools = async () => {
    try {
      const res = await Axios.get('http://localhost:8080/api/v1/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const schools = res.data.filter((user) => {
        if (user.UserType) {
          return user.UserType.label === 'Ecole';
        }
        return '';
      });
      setUserslist(schools);
      setUserType(true);
    } catch (err) {
      setError(error);
    }
    return isUserType;
  };

  const getJobSeekers = async () => {
    try {
      const res = await Axios.get('http://localhost:8080/api/v1/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const jobSeeker = res.data.filter((user) => {
        if (user.UserType) {
          return user.UserType.label === 'Demandeur emploi';
        }
        return '';
      });
      setUserslist(jobSeeker);
      setUserType(true);
    } catch (err) {
      setError(error);
    }
    return isUserType;
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <Container>
        <h2 className="mt-1 mb-3">Gestion des utilisateurs</h2>
        <Container fluid className={styles.containerCadre}>
          <Row
            className={`${styles.usersListPage} justify-content-center mb-3`}
          >
            <button
              type="button"
              onClick={getAllUsers}
              className={styles.buttonInput}
            >
              Tous les utilisateurs
            </button>
            <button
              type="button"
              onClick={getCompanies}
              className={styles.buttonInput}
            >
              Entreprises
            </button>
            <button
              type="button"
              onClick={getSchools}
              className={styles.buttonInput}
            >
              Ecoles/Etudiants
            </button>
            <button
              type="button"
              onClick={getJobSeekers}
              className={styles.buttonInput}
            >
              Demandeurs d&apos;emploi
            </button>
          </Row>
          <Row>
            <UsersListTable usersList={usersList} getAllUsers={getAllUsers} />
          </Row>
        </Container>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => ({
  token: state.authenticated.token,
});

UsersList.propTypes = {
  token: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(UsersList);
