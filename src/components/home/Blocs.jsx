import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';

import { Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import PopUpConnection from '../navbar/PopUpConnection';

import styles from './blocs.module.css';
import school from '../image/img_ecole.png';
import company from '../image/img_Part_ets2.png';
import jobSeeker from '../image/demandeur.jpg';

function Blocs({ t }) {
  const [modal2, setModal2] = useState(false);
  const toggle2 = () => setModal2(!modal2);

  return (
    <Container className="my-5 py-3">
      <Row className="my-5 py-4">
        <Col xs="12" md="6">
          <img alt="logo" width="100%" src={company} />
        </Col>
        <Col xs="12" md="6" className="text-left">
          <hr />
          <h3 className="text-left">
            {t('TitreEntreprise')} <br />
            {t('Association')}
          </h3>
          <p className="mb-4 text-left">{t('TexteBlocEntreprise')}</p>

          <button type="button" onClick={toggle2}>
            {t('Espace connexion')}
          </button>
          <PopUpConnection
            modal={modal2}
            toggle={toggle2}
            setModal={setModal2}
          />
          <Link to="/createAccount">
            <button type="button" className={styles.lienButton}>
              {t('Inscription')}
            </button>
          </Link>
        </Col>
      </Row>
      <Row className="my-5 py-4">
        <Col className={styles.blocsImgResp} xs="12" md="6">
          <img width="100%" alt="logo" src={jobSeeker} />
        </Col>
        <Col xs="12" md="6" className="text-left">
          <hr />
          <h3>{t('TitreDemandeurEmploi')} </h3>
          <p className="mb-5">{t('TexteDemandeurEmploi')}</p>

          <button type="button" onClick={toggle2}>
            {t('Espace connexion')}
          </button>
          <PopUpConnection
            modal={modal2}
            toggle={toggle2}
            setModal={setModal2}
          />
          <Link to="/createAccount">
            <button type="button" className={styles.lienButton}>
              {t('Inscription')}
            </button>
          </Link>
        </Col>
        <Col className={styles.blocsImg} xs="12" md="6">
          <img width="100%" alt="logo" src={jobSeeker} />
        </Col>
      </Row>
      <Row className="my-5 py-4">
        <Col xs="12" md="6">
          <img
            width="100%"
            className={styles.imgSchool}
            alt="logo"
            src={school}
          />
        </Col>
        <Col xs="12" md="6" className="text-left">
          <hr />
          <h3>{t('TitreUniversite')}</h3>
          <p className="mb-5">{t('TexteUniversite')}</p>
          <button type="button" onClick={toggle2}>
            {t('Espace connexion')}
          </button>
          <PopUpConnection
            modal={modal2}
            toggle={toggle2}
            setModal={setModal2}
          />
          <Link to="/createAccount">
            <button type="button" className={styles.lienButton}>
              {t('Inscription')}
            </button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

Blocs.propTypes = {
  t: PropTypes.string.isRequired,
};

export default withNamespaces()(Blocs);
