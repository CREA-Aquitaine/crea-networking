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
  Input,
} from 'reactstrap';

import UsersListTable from './Users_List_Table';
import styles from './Users_List_Table.module.css';

function UsersList({ token }) {
  const [usersList, setUserslist] = useState([]);
  const [error, setError] = useState('');

  const getAllUsers = async () => {
    try {
      const res = await Axios.get('http://localhost:8080/api/v1/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserslist(res.data);
    } catch (err) {
      setError(error);
    }
  };

  const getCompanies = () => {
    const companiesList = usersList.filter(
      (user) => user.UserTypeId.label === 'Entreprises'
    );
    setUserslist(companiesList);
  };

  const getSchools = () => {
    const schoolsList = usersList.filter(
      (user) =>
        user.UserTypeId.label === 'Ecoles' && user.UserTypeId === 'Etudiants'
    );
    setUserslist(schoolsList);
  };

  const getJobSeekers = () => {
    const jobSeekersList = usersList.filter(
      (user) => user.UserTypeId.label === "Chercheurs d'emplois"
    );
    setUserslist(jobSeekersList);
  };

  useEffect(() => {
    getAllUsers();
    getCompanies();
    getSchools();
    getJobSeekers();
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
            <Col xs={{ size: '3', offset: '6' }}>
              <input
                className={styles.inputSearch}
                type="search"
                name="search"
                id="exampleSearch"
                placeholder="RECHERCHER"
              />
            </Col>
          </Row>
          <Row className={styles.usersListPage}>
            <Col xs="3">
              <Input type="select" name="Profils" id="exampleSelect">
                <option onClick={getAllUsers}> Tous </option>
                <option onClick={getSchools}>Ecoles/Etudiants</option>
                <option onClick={getCompanies}>Entreprises</option>
                <option onClick={getJobSeekers}>
                  Chercheurs d&apos;emploi
                </option>
              </Input>
            </Col>
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
