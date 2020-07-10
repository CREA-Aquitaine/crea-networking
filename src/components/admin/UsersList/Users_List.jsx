import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Button,
  Breadcrumb,
  Container,
  Row,
  Col,
  BreadcrumbItem,
} from 'reactstrap';

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
          return user.UserType.label === "Chercheur d'emploi";
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
        <Breadcrumb>
          <BreadcrumbItem tag={Link} to="/">
            Accueil
          </BreadcrumbItem>
          <BreadcrumbItem active tag={Link} to="/users">
            Mes Utilisateurs
          </BreadcrumbItem>
        </Breadcrumb>
        <Container fluid className={styles.containerCadre}>
          <Row className={styles.usersListTitle}>
            <Col xs="3" className={styles.usersListTitleMargin}>
              Gestion des utilisateurs
            </Col>
          </Row>
          <Row className={styles.usersListPage}>
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
              Chercheurs d&apos;emploi
            </button>
          </Row>
          <Row>
            <UsersListTable usersList={usersList} />
          </Row>
          <Row>
            <Col xs="3" className={styles.UsersListExportButton}>
              <Link className={styles.UsersListExportLink} to="/">
                Exporter la liste{' '}
              </Link>
            </Col>
            <Col
              xs={{ size: '3', offset: '6' }}
              className={styles.UsersListExportButton}
            >
              <Button className="button">Supprimer</Button>
            </Col>
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
