/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Container } from 'reactstrap';
import ModalDashboard from './ModalDashboard';

import styles from './User_Infos.module.css';

function UserInfos({ userInfos, activityFields, userTypes }) {
  return (
    <Container>
      {userTypes.label === 'Chomeur' ? (
        <Row className={styles.userInfosCss}>
          <Col xs="4" sm="4" className={styles.logoSection}>
            <h4 style={{ color: 'white' }}>Mon profil</h4>
          </Col>
          <Col className={styles.contact} xs="3" sm="3">
            <ul>
              <li>
                <p>Nom: {userInfos[0].firstName}</p>
              </li>
              <li>
                <p>Prenom: {userInfos[0].lastName} </p>
              </li>
              <li>
                <p>Email: {userInfos[0].email}</p>
              </li>
              <li>
                <p>Téléphone: {userInfos[0].phone_number}</p>
              </li>
            </ul>
          </Col>
          <Col className={styles.contact} xs="3" sm="3">
            <ul>
              <li>
                <p>Localisation: {userInfos[0].localisation}</p>
              </li>
              <li>
                <p>Mobility: {userInfos[0].mobility} </p>
              </li>
              <li>
                <p>Qualification: {userInfos[0].qualification}</p>
              </li>
              <li>
                <p>Téléphone: {userInfos[0].phone_number}</p>
              </li>
            </ul>
          </Col>
          <Col xs="1" sm="1">
            <ModalDashboard />
          </Col>
        </Row>
      ) : userTypes.label === 'Entreprise' ? (
        <Row className={styles.userInfosCss}>
          <Col xs="4" sm="4" className={styles.logoSection}>
            <h4 style={{ color: 'white' }}>Mon profil</h4>
          </Col>
          <Col className={styles.userInfos} xs="4" sm="4">
            <ul>
              <li>
                <h4>Informations entreprise</h4>
              </li>
              <li>
                <p>Entreprise: {userInfos[0].companyName}</p>
              </li>
              <li>
                <p>Localisation: {userInfos[0].localisation}</p>
              </li>
              <li>
                <p>N° de siret: {userInfos[0].siret}</p>
              </li>
              <li>
                <p>Secteur d&lsquo;activité: {activityFields.labelFr} </p>
              </li>
            </ul>
          </Col>
          <Col className={styles.contact} xs="3" sm="3">
            <ul>
              <li>
                <h4>Contact entreprise</h4>
              </li>
              <li>
                <p>Nom: {userInfos[0].firstName}</p>
              </li>
              <li>
                <p>Prenom: {userInfos[0].lastName} </p>
              </li>
              <li>
                <p>Email: {userInfos[0].email}</p>
              </li>
              <li>
                <p>Téléphone: {userInfos[0].phone_number}</p>
              </li>
            </ul>
          </Col>
          <Col xs="1" sm="1">
            <ModalDashboard />
          </Col>
        </Row>
      ) : userTypes.label === 'Etudiant' ? (
        <Row className={styles.userInfosCss}>
          <Col xs="4" sm="4" className={styles.logoSection}>
            <h4 style={{ color: 'white' }}>Mon profil</h4>
          </Col>
          <Col className={styles.userInfos} xs="4" sm="4">
            <ul>
              <li>
                <p>Nom: {userInfos[0].firstName}</p>
              </li>
              <li>
                <p>Prenom: {userInfos[0].lastName} </p>
              </li>
              <li>
                <p>Email: {userInfos[0].email}</p>
              </li>
              <li>
                <p>Téléphone: {userInfos[0].phone_number}</p>
              </li>
            </ul>
          </Col>
          <Col className={styles.contact} xs="3" sm="3">
            <ul>
              <li>
                <p>Ecole: {userInfos[0].schoolName}</p>
              </li>
              <li>
                <p>Lsocalisation: {userInfos[0].localisation} </p>
              </li>
            </ul>
          </Col>
          <Col xs="1" sm="1">
            <ModalDashboard />
          </Col>
        </Row>
      ) : (
        <>jesaispas</>
      )}
    </Container>
  );
}
UserInfos.propTypes = {
  userTypes: PropTypes.arrayOf().isRequired,
  activityFields: PropTypes.arrayOf().isRequired,
  userInfos: PropTypes.arrayOf(
    PropTypes.shape({
      uuid: PropTypes.string,
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string,
      phone_number: PropTypes.string,
      localisation: PropTypes.string,
      mobility: PropTypes.string,
      qualification: PropTypes.string,
      siret: PropTypes.string,
      companyName: PropTypes.string,
      schoolName: PropTypes.string,
    })
  ).isRequired,
};

export default UserInfos;
