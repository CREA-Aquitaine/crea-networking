import React, { useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import ModalConnection from './ModalConnection';

function Blocs() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <Container>
      <Row
        style={{
          paddingTop: '20px',
          paddingBottom: '20px',
          marginBottom: '20px',
        }}
      >
        <Col xs="12" sm="12" md="6" lg="6" style={{ alignSelf: 'center' }}>
          <img
            style={{ width: 'inherit' }}
            alt="logo"
            src="https://cache.marieclaire.fr/data/photo/w1000_ci/1bi/demandeuse-demploi-droit-et-devoirs.jpg"
          />
        </Col>
        <Col
          xs="12"
          sm="12"
          md="6"
          lg="6"
          style={{ alignSelf: 'center', textAlign: 'left' }}
        >
          <hr />
          <h3>Vous êtes une entreprise ?</h3>
          <h3>Une association ?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia error
            explicabo assumenda, soluta voluptas hic necessitatibus ipsam sit
            fuga quos, eligendi
          </p>

          <button type="button" onClick={toggle}>
            Se connecter
          </button>

          <Link to="/createAccount">
            <button type="button" style={{ marginLeft: '10px' }}>
              S&#39;inscrire
            </button>
          </Link>
        </Col>
      </Row>
      <Row
        style={{
          paddingTop: '20px',
          paddingBottom: '20px',
          marginBottom: '20px',
        }}
      >
        <Col
          xs="12"
          sm="12"
          md="6"
          lg="6"
          style={{ alignSelf: 'center', textAlign: 'left' }}
        >
          <hr />
          <h3>Vous êtes un demandeur d&#39;emploi ?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia error
            explicabo assumenda, soluta voluptas hic necessitatibus ipsam sit
            fuga quos, eligendi
          </p>

          <button type="button" onClick={toggle}>
            Se connecter
          </button>
          <ModalConnection modal={modal} toggle={toggle} />
          <Link to="/createAccount">
            <button type="button" style={{ marginLeft: '10px' }}>
              S&#39;inscrire
            </button>
          </Link>
        </Col>
        <Col xs="12" sm="12" md="6" lg="6" style={{ alignSelf: 'center' }}>
          <img
            style={{ width: 'inherit' }}
            alt="logo"
            src="https://cache.marieclaire.fr/data/photo/w1000_ci/1bi/demandeuse-demploi-droit-et-devoirs.jpg"
          />
        </Col>
      </Row>
      <Row
        style={{
          paddingTop: '20px',
          paddingBottom: '20px',
          marginBottom: '20px',
        }}
      >
        <Col xs="12" sm="12" md="6" lg="6" style={{ alignSelf: 'center' }}>
          <img
            style={{ width: 'inherit' }}
            alt="logo"
            src="https://cache.marieclaire.fr/data/photo/w1000_ci/1bi/demandeuse-demploi-droit-et-devoirs.jpg"
          />
        </Col>
        <Col
          xs="12"
          sm="12"
          md="6"
          lg="6"
          style={{ alignSelf: 'center', textAlign: 'left' }}
        >
          <hr />
          <h3>Vous êtes une école ou une université ?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia error
            explicabo assumenda, soluta voluptas hic necessitatibus ipsam sit
            fuga quos, eligendi
          </p>
          <button type="button" onClick={toggle}>
            Se connecter
          </button>
          <Link to="/createAccount">
            <button type="button" style={{ marginLeft: '10px' }}>
              S&#39;inscrire
            </button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Blocs;
