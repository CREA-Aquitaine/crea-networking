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
          <Col sm={{ size: 4 }} className={styles.card}>
            <p>ID:</p>
            <p>Ville:</p>
            <p>Secteur d&#39;activité:</p>
          </Col>

          <Col sm={{ size: 6, offset: 1 }}>
            <h3>TITRE ANNONCE</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              laborum mollitia atque reiciendis repellat saepe harum nam amet,
              odio vel unde nulla perspiciatis doloremque magnam fugiat. Non
              adipisci provident in.
            </p>
          </Col>
        </Row>
        <Row className={styles.zonebottom}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid in
          impedit placeat! Facilis magnam nam corporis, quas, possimus inventore
          quidem porro totam similique, et necessitatibus saepe? Corporis
          expedita aut velit officia cum sequi distinctio esse quibusdam
          voluptatum consequuntur debitis fuga facere quas ex vel quod modi,
          voluptas, incidunt, obcaecati quo. Perferendis, ullam fugiat? Pariatur
          beatae, voluptatem minus ullam voluptate quisquam culpa. Recusandae
          alias distinctio similique mollitia saepe quasi beatae voluptates quas
          earum delectus. Animi quae est, eligendi nam vel architecto nobis
          cumque impedit distinctio cum exercitationem, quo, sunt nesciunt
          earum.
        </Row>
        <Row className={styles.btn}>
          <button type="button">Postuler</button>
        </Row>
      </Container>
    );
  }
}

export default Annouce;
