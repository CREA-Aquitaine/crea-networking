import React, { useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import PopUpConnection from '../navbar/PopUpConnection';

import styles from './blocs.module.css';
import school from '../image/img_ecole.png';
import company from '../image/img_Part_ets2.png';
import jobSeeker from '../image/demandeur.jpg';

function Blocs() {
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
            Vous êtes une entreprise ?<br />
            Une association ?
          </h3>
          <p className="mb-4 text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia error
            explicabo assumenda, soluta voluptas hic necessitatibus ipsam sit
            fuga quos, eligendi
          </p>

          <button type="button" onClick={toggle2}>
            Se connecter
          </button>
          <PopUpConnection
            modal={modal2}
            toggle={toggle2}
            setModal={setModal2}
          />
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

          <button type="button" onClick={toggle2}>
            Se connecter
          </button>
          <PopUpConnection
            modal={modal2}
            toggle={toggle2}
            setModal={setModal2}
          />
          <Link to="/createAccount">
            <button type="button" className={styles.lienButton}>
              S&#39;inscrire
            </button>
          </Link>
        </Col>
        <Col xs="12" md="6">
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
          <h3>Vous êtes une école ou une université ?</h3>
          <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia error
            explicabo assumenda, soluta voluptas hic necessitatibus ipsam sit
            fuga quos, eligendi
          </p>
          <button type="button" onClick={toggle2}>
            Se connecter
          </button>
          <PopUpConnection
            modal={modal2}
            toggle={toggle2}
            setModal={setModal2}
          />
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
