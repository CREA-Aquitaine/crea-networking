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

  // const getCompanies = async () => {
  //   try {
  //     const res = await Axios.get('http://localhost:8080/api/v1/users', {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     if (res.data.UserTypeId === 'e3b1e7b9-d001-470d-8438-695ebcea6e3a') {
  //       const companiesList = usersList.filter(
  //         (user) =>
  //           user.res.data.UserTypeId === 'e3b1e7b9-d001-470d-8438-695ebcea6e3a '
  //       );
  //       setUserslist(companiesList);
  //     }
  //   } catch (err) {
  //     setError(error);
  //   }
  //   // const companiesList = usersList.filter(
  //   //   (user) => user.UserTypeId === 'e3b1e7b9-d001-470d-8438-695ebcea6e3a '
  //   // );
  //   // setUserslist(companiesList);
  // };

  // const getSchools = () => {
  //   const schoolsList = usersList.filter(
  //     (user) => user.UserTypeId === 'b20f4062-d8bf-4de5-8aeb-e0a78a043f64'
  //   );
  //   setUserslist(schoolsList);
  // };

  // const getJobSeekers = () => {
  //   const jobSeekersList = usersList.filter(
  //     (user) => user.UserTypeId === '63ed81f1-b684-4c1d-ad00-c77f5c9df11a'
  //   );
  //   setUserslist(jobSeekersList);
  // };

  useEffect(() => {
    getAllUsers();
    // getSchools();
    // getJobSeekers();
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
                <option>Ecoles/Etudiants</option>
                <option>Entreprises</option>
                <option>Chercheurs d&apos;emploi</option>
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
