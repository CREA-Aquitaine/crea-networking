/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

import { FaPen } from 'react-icons/fa';
import styles from './User_Infos.module.css';

function UserInfos({ userInfos, activityFields, userTypes, t }) {
  return (
    <Container className={styles.blocInfos}>
      <div className={styles.widthInnerContainer}>
        {userTypes.label === 'Demandeur emploi' ? (
          <>
            <Row className="align-items-center">
              <Col xs="10">
                <h3>{t('profil')}</h3>
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
                  <b>{t('prenom')} :</b> {userInfos.firstName}
                </p>
              </Col>
              <Col xs="6" md="4">
                <p>
                  <b>{t('nom')} :</b> {userInfos.lastName}
                </p>
              </Col>
              <Col xs="6" md="4">
                <p>
                  <b>Email :</b> {userInfos.email}
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs="6" md="4">
                <p>
                  <b>{t('localisation')} :</b> {userInfos.localisation}
                </p>
              </Col>
              <Col xs="6" md="4">
                <p>
                  <b>{t('langue')} :</b> {userInfos.country}
                </p>
              </Col>
              <Col xs="6" md="4">
                <p>
                  <b>{t('telMobile')} :</b> {userInfos.phone_number}
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
                <h3 className={styles.myProfile}>{t('profil')}</h3>
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
                  <b>{t('entreprise')} :</b> {userInfos.companyName}
                </p>
              </Col>
              <Col xs="6" md="3">
                <p>
                  <b>{t('localisation')} :</b> {userInfos.localisation}
                </p>
              </Col>
              <Col xs="6" md="3">
                <p>
                  <b>{t('langue')} :</b> {userInfos.country}
                </p>
              </Col>
              <Col xs="6" md="3">
                <p>
                  <b>{t('siret')} :</b> {userInfos.siret}
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs="6" sm="3">
                <p>
                  <b>{t('prenom')} :</b> {userInfos.firstName}
                </p>
              </Col>
              <Col xs="6" sm="3">
                <p>
                  <b>{t('nom')} :</b> {userInfos.lastName}
                </p>
              </Col>
              <Col xs="6" sm="3">
                <p>
                  <b>Email :</b> {userInfos.email}
                </p>
              </Col>
              <Col xs="6" sm="3">
                <p>
                  <b>{t('secteurActivite')} :</b> {activityFields.labelFr}
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs="6">
                <p>
                  <b>{t('telMobile')} :</b> {userInfos.phone_number}
                </p>
              </Col>

              <Col xs="6">
                <p>
                  <b>{t('telFixe')} :</b> {userInfos.phone_number2}
                </p>
              </Col>
            </Row>
          </>
        ) : userTypes.label === 'Ecole' ? (
          <>
            <Row className="align-items-center">
              <Col xs="10">
                <h3 className={styles.myProfile}>{t('profil')}</h3>
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
                  <b>{t('prenom')} :</b> {userInfos.firstName}
                </p>
              </Col>
              <Col xs="6" sm="3">
                <p>
                  <b>{t('nom')} :</b> {userInfos.lastName}
                </p>
              </Col>
              <Col xs="6" sm="3">
                <p>
                  <b>Email :</b> {userInfos.email}
                </p>
              </Col>
              <Col xs="6" sm="3">
                <p>
                  <b>{t('ets')} :</b> {userInfos.schoolName}
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs="6" sm="3">
                <p>
                  <b>{t('localisation')} :</b> {userInfos.localisation}
                </p>
              </Col>
              <Col xs="6" sm="3">
                <p>
                  <b>{t('langue')} :</b> {userInfos.country}
                </p>
              </Col>
              <Col xs="6" sm="3">
                <p>
                  <b>{t('telMobile')} :</b> {userInfos.phone_number}
                </p>
              </Col>
              <Col xs="6" sm="3">
                <p>
                  <b>{t('telFixe')} :</b> {userInfos.phone_number2}
                </p>
              </Col>
            </Row>
          </>
        ) : (
          <></>
        )}
      </div>
    </Container>
  );
}

UserInfos.propTypes = {
  userTypes: PropTypes.string.isRequired,
  activityFields: PropTypes.string.isRequired,
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
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(UserInfos);
