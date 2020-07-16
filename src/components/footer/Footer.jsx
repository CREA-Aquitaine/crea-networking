import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';

// eslint-disable-next-line import/no-unresolved
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import styles from './footer.module.css';
import LogoCrea from '../image/logo-crea_2015.png';
import LogoNetworking from '../image/logo_netWorking.png';

function footer({ t }) {
  return (
    <>
      <Container fluid className={`${styles.bkgFooter} py-5 mt-5`}>
        <Row>
          <Col className="align-self-center">
            <Container>
              <Row>
                <Col md="3" xs="12" className="align-self-center">
                  <Row>
                    <Col className="p-3">
                      <img
                        className={styles.imgWidth}
                        src={LogoCrea}
                        alt="logo"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col className="p-3">
                      <img
                        className={styles.imgWidth}
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
                  <p>
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
                    <Col className={styles.iconFooter} md="2">
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
                  <Row>
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
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="p-3">
          <Col>
            <a href="$" className={styles.tagMl}>
              {t('Mention')}
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}
footer.propTypes = {
  t: PropTypes.string.isRequired,
};

export default withNamespaces()(footer);
