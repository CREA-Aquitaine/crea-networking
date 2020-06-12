import React from 'react';
import { Row, Col, Container } from 'reactstrap';

function Blocs() {
  return (
    <Container>
      <Row style={{ paddingTop: '20px', paddingBottom: '20px' }}>
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
          <h2>Vous êtes une entreprise ?</h2>
          <h2>Une association ?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia error
            explicabo assumenda, soluta voluptas hic necessitatibus ipsam sit
            fuga quos, eligendi
          </p>

          <button type="button">Se connecter</button>

          <button type="button" style={{ marginLeft: '10px' }}>
            S&#39;inscrire
          </button>
        </Col>
      </Row>
      <Row style={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <Col
          xs="12"
          sm="12"
          md="6"
          lg="6"
          style={{ alignSelf: 'center', textAlign: 'left' }}
        >
          <hr />
          <h2>Vous êtes un demandeur d&#39;emploi ?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia error
            explicabo assumenda, soluta voluptas hic necessitatibus ipsam sit
            fuga quos, eligendi
          </p>

          <button type="button">Se connecter</button>

          <button type="button" style={{ marginLeft: '10px' }}>
            S&#39;inscrire
          </button>
        </Col>
        <Col xs="12" sm="12" md="6" lg="6" style={{ alignSelf: 'center' }}>
          <img
            style={{ width: 'inherit' }}
            alt="logo"
            src="https://cache.marieclaire.fr/data/photo/w1000_ci/1bi/demandeuse-demploi-droit-et-devoirs.jpg"
          />
        </Col>
      </Row>
      <Row style={{ paddingTop: '20px', paddingBottom: '20px' }}>
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
          <h2>Vous êtes une école ou une université ?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia error
            explicabo assumenda, soluta voluptas hic necessitatibus ipsam sit
            fuga quos, eligendi
          </p>

          <button type="button">Se connecter</button>

          <button type="button" style={{ marginLeft: '10px' }}>
            S&#39;inscrire
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default Blocs;
