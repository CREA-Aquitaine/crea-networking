import React from 'react';

import { Col, Row } from 'reactstrap';
import styles from './User_Infos.module.css';

function UserInfos() {
  return (
    <Row className={styles.userInfosCss}>
      <Col xs="4" sm="4" className={styles.logoSection}>
        <img
          className={styles.userLogo}
          src="http://www.aquitaineonline.com/images/stories/Sud_Ouest/Logo_Nouvelle_Region_Aquitaine_2016_01.jpg"
          alt="logoText"
        />
      </Col>
      <Col className={styles.userInfos} xs="4" sm="4">
        <ul>
          <li>
            {' '}
            <h4>Information entreprise</h4>
          </li>
          <li>
            <p>Entreprise: </p>
          </li>
          <li>
            <p>Localisation: </p>
          </li>
          <li>
            <p>N° de siret: </p>
          </li>
          <li>
            <p>Secteur d&lsquo;activité: </p>
          </li>
        </ul>
      </Col>
      <Col className={styles.contact} xs="4" sm="4">
        <ul>
          <li>
            {' '}
            <h4>Contact entreprise</h4>
          </li>
          <li>
            <p>Nom: </p>
          </li>
          <li>
            <p>Prenom: </p>
          </li>
          <li>
            <p>Email: </p>
          </li>
          <li>
            <p>Téléphone: </p>
          </li>
        </ul>
      </Col>
    </Row>
  );
}

export default UserInfos;
