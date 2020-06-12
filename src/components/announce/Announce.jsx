import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styles from './Announce.module.css';

class Annouce extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container className={styles.zoneglobal}>
        <Row className={styles.zonetop}>
          <Col className={styles.card}>
            <p>ID:</p>
            <p>Ville:</p>
            <p>Secteur d&#39;activité:</p>
          </Col>

          <Col>
            <h3>TITRE ANNONCE</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              laborum mollitia atque reiciendis repellat saepe harum nam amet,
              odio vel unde nulla perspiciatis doloremque magnam fugiat. Non
              adipisci provident in.
            </p>
          </Col>
        </Row>
        <Row>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
          rem repudiandae voluptate animi eligendi veniam sequi. Consequuntur
          libero reiciendis quisquam ipsum soluta nemo, earum repellat quibusdam
          beatae! Doloremque, ullam inventore.
        </Row>
        <Row className={styles.btn}>
          <button type="button">Postuler</button>
        </Row>
      </Container>
    );
  }
}

export default Annouce;
