import React, { useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import ModalConnection from './ModalConnection';

import styles from './blocs.module.css';

function Blocs() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <Container className="my-5 py-3">
      <Row className="my-5 py-4">
        <Col xs="12" md="6">
          <img
            alt="logo"
            width="100%"
            src="https://cache.marieclaire.fr/data/photo/w1000_ci/1bi/demandeuse-demploi-droit-et-devoirs.jpg"
          />
        </Col>
        <Col xs="12" md="6" className="text-left">
          <hr />
          <h3 className="text-left">
            Vous êtes une entreprise ?<br />
            Une association ?
          </h3>
          <p className="mb-4 text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia error
            explicabo assumenda, soluta voluptas hic necessitatibus ipsam sit
            fuga quos, eligendi
          </p>

          <button type="button" onClick={toggle}>
            Se connecter
          </button>

          <Link to="/createAccount">
            <button type="button" className={styles.lienButton}>
              S&#39;inscrire
            </button>
          </Link>
        </Col>
      </Row>
      <Row className="my-5 py-4">
        <Col xs="12" md="6" className="text-left">
          <hr />
          <h3>Vous êtes un demandeur d&#39;emploi ?</h3>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia error
            explicabo assumenda, soluta voluptas hic necessitatibus ipsam sit
            fuga quos, eligendi
          </p>

          <button type="button" onClick={toggle}>
            Se connecter
          </button>
          <ModalConnection modal={modal} toggle={toggle} />
          <Link to="/createAccount">
            <button type="button" className={styles.lienButton}>
              S&#39;inscrire
            </button>
          </Link>
        </Col>
        <Col xs="12" md="6">
          <img
            width="100%"
            alt="logo"
            src="https://cache.marieclaire.fr/data/photo/w1000_ci/1bi/demandeuse-demploi-droit-et-devoirs.jpg"
          />
        </Col>
      </Row>
      <Row className="my-5 py-4">
        <Col xs="12" md="6">
          <img
            width="100%"
            alt="logo"
            src="https://cache.marieclaire.fr/data/photo/w1000_ci/1bi/demandeuse-demploi-droit-et-devoirs.jpg"
          />
        </Col>
        <Col xs="12" md="6" className="text-left">
          <hr />
          <h3>Vous êtes une école ou une université ?</h3>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia error
            explicabo assumenda, soluta voluptas hic necessitatibus ipsam sit
            fuga quos, eligendi
          </p>
          <button type="button" onClick={toggle}>
            Se connecter
          </button>
          <Link to="/createAccount">
            <button type="button" className={styles.lienButton}>
              S&#39;inscrire
            </button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Blocs;
