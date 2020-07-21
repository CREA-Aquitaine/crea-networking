/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

import { FaPen } from 'react-icons/fa';
import styles from './User_Infos.module.css';

function UserInfos({ userInfos, activityFields, userTypes }) {
  return (
    <Container className={styles.blocInfos}>
      <div className={styles.widthInnerContainer}>
        {userTypes.label === 'Demandeur emploi' ? (
          <>
            <Row className="align-items-center">
              <Col xs="10">
                <h3>Mon profil</h3>
              </Col>
              <Col xs="2">
                <Link to="/settings">
                  <FaPen fill="white" />
                </Link>
              </Col>
            </Row>
            <Row>
              <Col xs="6" md="4">
                <p>
                  <b>Nom:</b> {userInfos.firstName}
                </p>
              </Col>
              <Col xs="6" md="4">
                <p>
                  <b>Prenom:</b> {userInfos.lastName}
                </p>
              </Col>
              <Col xs="6" md="4">
                <p>
                  <b>Email:</b> {userInfos.email}
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs="6" md="4">
                <p>
                  <b>Localisation:</b> {userInfos.localisation}
                </p>
              </Col>
              <Col xs="6" md="4">
                <p>
                  <b>Pays:</b> {userInfos.country}
                </p>
              </Col>
              <Col xs="6" md="4">
                <p>
                  <b>Téléphone:</b> {userInfos.phone_number}
                </p>
              </Col>
              {/* <Col xs="6" md="3">
              <p>
                <b>Téléphone2:</b> {userInfos.phone_number2}
              </p>
            </Col> */}
            </Row>
          </>
        ) : userTypes.label === 'Entreprise' ? (
          <>
            <Row className="align-items-center">
              <Col xs="10">
                <h3 className={styles.myProfile}>Mon profil</h3>
              </Col>
              <Col xs="2">
                <Link to="/settings">
                  <FaPen className={styles.pen} fill="white" />
                </Link>
              </Col>
            </Row>
            <Row>
              <Col xs="6" md="3">
                <p>
                  <b>Entreprise:</b> {userInfos.companyName}
                </p>
              </Col>
              <Col xs="6" md="3">
                <p>
                  <b>Localisation:</b> {userInfos.localisation}
                </p>
              </Col>
              <Col xs="6" md="3">
                <p>
                  <b>Pays:</b> {userInfos.country}
                </p>
              </Col>
              <Col xs="6" md="3">
                <p>
                  <b>N° de siret:</b> {userInfos.siret}
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs="6" sm="3">
                <p>
                  <b>Nom:</b> {userInfos.firstName}
                </p>
              </Col>
              <Col xs="6" sm="3">
                <p>
                  <b>Prenom:</b> {userInfos.lastName}
                </p>
              </Col>
              <Col xs="6" sm="3">
                <p>
                  <b>Email:</b> {userInfos.email}
                </p>
              </Col>
              <Col xs="6" sm="3">
                <p>
                  <b>Secteur d&lsquo;activité:</b> {activityFields.labelFr}{' '}
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs="6">
                <p>
                  <b>Téléphone:</b> {userInfos.phone_number}
                </p>
              </Col>

              <Col xs="6">
                <p>
                  <b>Téléphone2:</b> {userInfos.phone_number2}
                </p>
              </Col>
            </Row>
          </>
        ) : userTypes.label === 'Ecole' ? (
          <>
            <Row className="align-items-center">
              <Col xs="10">
                <h3 className={styles.myProfile}>Mon profil</h3>
              </Col>
              <Col xs="2">
                <Link to="/settings">
                  <FaPen className={styles.pen} fill="white" />
                </Link>
              </Col>
            </Row>
            <Row>
              <Col xs="6" sm="3">
                <p>
                  <b>Nom:</b> {userInfos.firstName}
                </p>
              </Col>
              <Col xs="6" sm="3">
                <p>
                  <b>Prenom:</b> {userInfos.lastName}{' '}
                </p>
              </Col>
              <Col xs="6" sm="3">
                <p>
                  <b>Email:</b> {userInfos.email}
                </p>
              </Col>
              <Col xs="6" sm="3">
                <p>
                  <b>Etablissement:</b> {userInfos.schoolName}
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs="6" sm="3">
                <p>
                  <b>Localisation:</b> {userInfos.localisation}{' '}
                </p>
              </Col>
              <Col xs="6" sm="3">
                <p>
                  <b>Pays:</b> {userInfos.country}
                </p>
              </Col>
              <Col xs="6" sm="3">
                <p>
                  <b>Téléphone:</b> {userInfos.phone_number}
                </p>
              </Col>
              <Col xs="6" sm="3">
                <p>
                  <b>Téléphone2:</b> {userInfos.phone_number2}
                </p>
              </Col>
            </Row>
          </>
        ) : (
          <>jesaispas</>
        )}
      </div>
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
