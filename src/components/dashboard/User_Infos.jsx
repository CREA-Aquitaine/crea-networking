/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

import styles from './User_Infos.module.css';
import pen from '../image/pen.png';

function UserInfos({ userInfos, activityFields, userTypes }) {
  return (
    <Container>
      {userTypes.label === 'Demandeur emploi' ? (
        <Row className={styles.userInfosCss}>
          <Col xs="4" sm="2" className={styles.logoSection}>
            <h4 style={{ color: 'white' }}>Mon profil</h4>
          </Col>
          <Col className={styles.contact} xs="3" sm="5">
            <ul>
              <li>
                <p>Nom: {userInfos.firstName}</p>
              </li>
              <li>
                <p>Prenom: {userInfos.lastName} </p>
              </li>
              <li>
                <p>Email: {userInfos.email}</p>
              </li>
              <li>
                <p>Téléphone: {userInfos.phone_number}</p>
              </li>
            </ul>
          </Col>
          <Col className={styles.contact} xs="3" sm="4">
            <ul>
              <li>
                <p>Localisation: {userInfos.localisation}</p>
              </li>
              <li>
                <p>Pays: {userInfos.country}</p>
              </li>
              <li>
                <p>Téléphone2: {userInfos.phone_number2}</p>
              </li>
            </ul>
          </Col>
          <Col xs="1" sm="1">
            <Link to="/settings">
              <img src={pen} alt="stylo" className={styles.pen} />
            </Link>
          </Col>
        </Row>
      ) : userTypes.label === 'Entreprise' ? (
        <Row className={styles.userInfosCss}>
          <Col xs="4" sm="2" className={styles.logoSection}>
            <h4 style={{ color: 'white' }}>Mon profil</h4>
          </Col>
          <Col className={styles.userInfos} xs="4" sm="5">
            <ul>
              <li>
                <h4>Informations entreprise</h4>
              </li>
              <li>
                <p>Entreprise: {userInfos.companyName}</p>
              </li>
              <li>
                <p>Localisation: {userInfos.localisation}</p>
              </li>
              <li>
                <p>Pays: {userInfos.country}</p>
              </li>
              <li>
                <p>N° de siret: {userInfos.siret}</p>
              </li>
              <li>
                <p>Secteur d&lsquo;activité: {activityFields.labelFr} </p>
              </li>
            </ul>
          </Col>
          <Col className={styles.contact} xs="3" sm="4">
            <ul>
              <li>
                <h4>Contact entreprise</h4>
              </li>
              <li>
                <p>Nom: {userInfos.firstName}</p>
              </li>
              <li>
                <p>Prenom: {userInfos.lastName} </p>
              </li>
              <li>
                <p>Email: {userInfos.email}</p>
              </li>
              <li>
                <p>Téléphone: {userInfos.phone_number}</p>
              </li>
              <li>
                <p>Téléphone2: {userInfos.phone_number2}</p>
              </li>
            </ul>
          </Col>
          <Col xs="1" sm="1">
            <Link to="/settings">
              <img src={pen} alt="stylo" className={styles.pen} />
            </Link>
          </Col>
        </Row>
      ) : userTypes.label === 'Ecole' ? (
        <Row className={styles.userInfosCss}>
          <Col xs="4" sm="2" className={styles.logoSection}>
            <h4 style={{ color: 'white' }}>Mon profil</h4>
          </Col>
          <Col className={styles.userInfos} xs="4" sm="5">
            <ul>
              <li>
                <p>Nom: {userInfos.firstName}</p>
              </li>
              <li>
                <p>Prenom: {userInfos.lastName} </p>
              </li>
              <li>
                <p>Email: {userInfos.email}</p>
              </li>
              <li>
                <p>Téléphone: {userInfos.phone_number}</p>
              </li>
            </ul>
          </Col>
          <Col className={styles.contact} xs="3" sm="4">
            <ul>
              <li>
                <p>Etablissement: {userInfos.schoolName}</p>
              </li>
              <li>
                <p>Localisation: {userInfos.localisation} </p>
              </li>
              <li>
                <p>Pays: {userInfos.country}</p>
              </li>
              <li>
                <p>Téléphone2: {userInfos.phone_number2}</p>
              </li>
            </ul>
          </Col>
          <Col xs="1" sm="1">
            <Link to="/settings">
              <img src={pen} alt="stylo" className={styles.pen} />
            </Link>
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
