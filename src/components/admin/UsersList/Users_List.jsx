import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Row, Col, Input, Button } from 'reactstrap';
import { compose } from 'redux';
import { withNamespaces } from 'react-i18next';

import UsersListTable from './Users_List_Table';
import styles from './Users_List_Table.module.css';

const host = process.env.REACT_APP_HOST;

function UsersList({ token, t }) {
  const [usersList, setUserslist] = useState([]);
  const [error, setError] = useState('');
  const [isUserType, setUserType] = useState(false);
  const [inputSearch, setInputSearch] = useState('');

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

  useEffect(() => {
    getAllUsers();
  }, []);

  const getCompanies = async () => {
    try {
      const res = await Axios.get(`${host}/api/v1/users`, {
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
      const res = await Axios.get(`${host}/api/v1/users`, {
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
      const res = await Axios.get(`${host}/api/v1/users`, {
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

  const getByName = async () => {
    try {
      const res = await Axios.get(`${host}/api/v1/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const search = res.data.filter(
        (user) =>
          user.lastName.toLowerCase().includes(inputSearch.toLowerCase()) ||
          user.firstName.toLowerCase().includes(inputSearch.toLowerCase())
      );
      setUserslist(search);
      setUserType(true);
    } catch (err) {
      setError(error);
    }
    return isUserType;
  };

  const resetSearch = () => {
    getAllUsers();
    setInputSearch('');
  };

  return (
    <>
      <Container>
        <h2 className="mt-1 mb-3">{t('gestionUtilisateur')}</h2>
        <Container fluid className={styles.containerCadre}>
          <Row className={`mb-4 ${styles.usersListTitle}`}>
            <Col
              xs="12"
              md="6"
              className={`text-left ${styles.usersListTitleMargin}`}
            >
              {t('gestionUtilisateur')}
            </Col>
            <Col className={styles.margcol} xs="4" md="4">
              <Input
                className={styles.inputSearch}
                placeholder={t('rechercheNom')}
                value={inputSearch}
                onChange={(e) => setInputSearch(e.target.value)}
              />
            </Col>
            <Col
              className={`${styles.paddingRightNone} text-left`}
              xs="3"
              md="1"
            >
              <Button className={styles.okButton} onClick={getByName}>
                Ok
              </Button>
            </Col>
            <Col
              className={`${styles.paddingRightNone} text-left`}
              xs="1"
              md="1"
            >
              <Button className={styles.suppButton} onClick={resetSearch}>
                X
              </Button>
            </Col>
          </Row>

          <Row
            className={`${styles.usersListPage} justify-content-center mb-3`}
          >
            <button
              type="button"
              onClick={getAllUsers}
              className={styles.buttonInput}
            >
              {t('tousUtilisateurs')}
            </button>
            <button
              type="button"
              onClick={getCompanies}
              className={styles.buttonInput}
            >
              {t('entreprises')}
            </button>
            <button
              type="button"
              onClick={getSchools}
              className={styles.buttonInput}
            >
              {t('ecolesEtudiants')}
            </button>
            <button
              type="button"
              onClick={getJobSeekers}
              className={styles.buttonInput}
            >
              {t('demandeursEmplois')}
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
  t: PropTypes.func.isRequired,
};

export default compose(connect(mapStateToProps), withNamespaces())(UsersList);
