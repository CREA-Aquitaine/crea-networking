import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';

// eslint-disable-next-line import/no-unresolved
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaLink } from 'react-icons/fa';
import styles from './footer.module.css';
import LogoCrea from '../image/logo-crea_2015.png';
import LogoNetworking from '../image/logo_netWorking.png';
import LegalMentions from './LegalMentions';
import PersonalData from './PersonalData';

function Footer({ t }) {
  const [isModalMentionsOpen, setIsModalMentionsOpen] = useState(false);
  const toggleMentions = () => setIsModalMentionsOpen((state) => !state);

  const [isModalDataOpen, setIsModalDataOpen] = useState(false);
  const toggleData = () => setIsModalDataOpen((state) => !state);

  return (
    <>
      <Container fluid className={`${styles.bkgFooter} py-5 mt-5`}>
        <Row>
          <Col className="align-self-center">
            <Container>
              <Row>
                <Col md="3" xs="12" className="align-self-center">
                  <Row>
                    <Col xs="6" md="12" className="p-3">
                      <img
                        className={styles.imgWidthCrea}
                        src={LogoCrea}
                        alt="logo"
                      />
                    </Col>
                    <Col xs="6" md="12" className="p-3">
                      <img
                        className={styles.imgWidthNetworking}
                        src={LogoNetworking}
                        alt="logo"
                      />
                    </Col>
                  </Row>
                </Col>

                <Col
                  className="align-self-center"
                  md={{ size: 4, offset: 1 }}
                  xs="12"
                >
                  <p
                    style={{
                      fontSize: '1.3rem',
                      textAlign: 'center',
                      color: '#4C4647',
                      fontWeight: '700',
                    }}
                  >
                    Nous sommes persuadés que la réussite de tout projet
                    s’inscrit dans la valeur qu’incarne son porteur. La recette
                    du succès passe par le partage d’expériences, de savoirs et
                    la confrontation d’idées.
                  </p>
                </Col>
                <Col
                  className="align-self-center"
                  md={{ size: 3, offset: 1 }}
                  xs="12"
                >
                  <Row>
                    <Col className={`${styles.iconFooter} mb-3`} md="2">
                      <FaPhoneAlt />
                    </Col>
                    <Col>+33 5 64 11 52 36</Col>
                  </Row>
                  <Row>
                    <Col className={styles.iconFooter} md="2">
                      <FaMapMarkerAlt />
                    </Col>
                    <Col>
                      <address>
                        CREA Aquitaine 1 rue Donzacq, 64100 Bayonne
                      </address>
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col className={styles.iconFooter} md="2">
                      <FaEnvelope />
                    </Col>
                    <Col>
                      <a
                        className={styles.colorLink}
                        href="mailto:contact@crea-aquitaine.org"
                      >
                        contact@crea-aquitaine.org
                      </a>
                    </Col>
                  </Row>
                  <Row>
                    <Col className={styles.iconFooter} md="2">
                      <FaLink />
                    </Col>
                    <Col>
                      <a
                        className={styles.colorLink}
                        href="https://www.crea-aquitaine.org/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Site du Club CREA
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="p-3">
          <Col>
            <Button
              color="link"
              style={{ width: '200px' }}
              onClick={toggleMentions}
            >
              {t('Mention')}
            </Button>

            <Button
              style={{ width: '200px' }}
              color="link"
              onClick={toggleData}
            >
              {t('Personal data')}
            </Button>
          </Col>
        </Row>
      </Container>
      <LegalMentions isOpen={isModalMentionsOpen} toggle={toggleMentions} />
      <PersonalData isOpen={isModalDataOpen} toggle={toggleData} />
    </>
  );
}

Footer.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(Footer);
