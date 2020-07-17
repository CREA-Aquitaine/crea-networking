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
        <>
          <Row>
            <Col xs="11">
              <h3 className={styles.myProfile}>Mon profil</h3>
            </Col>
            <Col>
              <Link to="/settings">
                <img src={pen} alt="stylo" className={styles.pen} />
              </Link>
            </Col>
          </Row>
          <Row className={styles.userInfosCss}>
            <Col className={styles.contact} xs="3" sm="4">
              <ul>
                <li>
                  <p>
                    <b>Nom:</b> {userInfos.firstName}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Prenom:</b> {userInfos.lastName}{' '}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Email:</b> {userInfos.email}
                  </p>
                </li>
              </ul>
            </Col>
            <Col className={styles.contact} xs="3" sm="4">
              <ul>
                <li>
                  <p>
                    <b>Localisation:</b> {userInfos.localisation}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Pays:</b> {userInfos.country}
                  </p>
                </li>
              </ul>
            </Col>
            <Col className={styles.contact} xs="3" sm="4">
              <ul>
                <li>
                  <p>
                    <b>Téléphone:</b> {userInfos.phone_number}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Téléphone2:</b> {userInfos.phone_number2}
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </>
      ) : userTypes.label === 'Entreprise' ? (
        <>
          {' '}
          <Row>
            <Col xs="11">
              <h3 className={styles.myProfile}>Mon profil</h3>
            </Col>
            <Col>
              <Link to="/settings">
                <img src={pen} alt="stylo" className={styles.pen} />
              </Link>
            </Col>
          </Row>
          <Row className={styles.userInfosCss}>
            <Col className={styles.contact} xs="4" sm="4">
              <ul>
                <li>
                  <p>
                    <b>Entreprise:</b> {userInfos.companyName}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Localisation:</b> {userInfos.localisation}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Pays:</b> {userInfos.country}
                  </p>
                </li>
                <li>
                  <p>
                    <b>N° de siret:</b> {userInfos.siret}
                  </p>
                </li>
              </ul>
            </Col>
            <Col className={styles.contact} xs="4" sm="4">
              <ul>
                <li>
                  <p>
                    <b>Nom:</b> {userInfos.firstName}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Prenom:</b> {userInfos.lastName}{' '}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Email:</b> {userInfos.email}
                  </p>
                </li>
              </ul>
            </Col>
            <Col className={styles.contact} xs="4" sm="4">
              <ul>
                <li>
                  <p>
                    <b>Secteur d&lsquo;activité:</b> {activityFields.labelFr}{' '}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Téléphone:</b> {userInfos.phone_number}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Téléphone2:</b> {userInfos.phone_number2}
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </>
      ) : userTypes.label === 'Ecole' ? (
        <>
          {' '}
          <Row>
            <Col xs="11">
              <h3 className={styles.myProfile}>Mon profil</h3>
            </Col>
            <Col>
              <Link to="/settings">
                <img src={pen} alt="stylo" className={styles.pen} />
              </Link>
            </Col>
          </Row>
          <Row className={styles.userInfosCss}>
            <Col className={styles.contact} xs="4" sm="4">
              <ul>
                <li>
                  <p>
                    <b>Nom:</b> {userInfos.firstName}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Prenom:</b> {userInfos.lastName}{' '}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Email:</b> {userInfos.email}
                  </p>
                </li>
              </ul>
            </Col>
            <Col className={styles.contact} xs="3" sm="4">
              <ul>
                <li>
                  <p>
                    <b>Etablissement:</b> {userInfos.schoolName}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Localisation:</b> {userInfos.localisation}{' '}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Pays:</b> {userInfos.country}
                  </p>
                </li>
              </ul>
            </Col>
            <Col className={styles.contact} xs="3" sm="3">
              <ul>
                <li>
                  <p>
                    <b>Téléphone:</b> {userInfos.phone_number}
                  </p>
                </li>
                <li>
                  <p>
                    <b>Téléphone2:</b> {userInfos.phone_number2}
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </>
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
