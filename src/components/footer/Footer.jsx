import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// eslint-disable-next-line import/no-unresolved
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import styles from './footer.module.css';
import LogoCrea from '../image/logo_Crea.png';
import LogoNetworking from '../image/logo_netWorking.png';

export default function footer() {
  return (
    <>
      <Container fluid className={styles.bkgFooter}>
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
              Mentions Légales
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}
