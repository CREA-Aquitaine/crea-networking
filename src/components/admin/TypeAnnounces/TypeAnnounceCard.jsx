import React from 'react';

import { Card, CardImg, CardBody, CardTitle, CardText, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import announce from './img/announce.png';
import styles from './TypeAnnounce.module.css';
import ModalTypeAnnounce from './ModalTypeAnnounce';

function TypeAnnounceCard({ french, euskara, castillan, id, getType }) {
  return (
    <div className={`${styles.card}  mt-5 mr-5`}>
      <Card>
        <CardImg
          className={styles.imgCard}
          top
          width="100%"
          src={announce}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Type D&apos;annonce</CardTitle>
          <CardText>
            <Row>Français: {french}</Row>
            <Row>Euskara: {euskara}</Row>
            <Row>Castillan: {castillan}</Row>
          </CardText>
          <ModalTypeAnnounce
            french={french}
            euskara={euskara}
            castillan={castillan}
            getType={getType}
            id={id}
          />
        </CardBody>
      </Card>
    </div>
  );
}

TypeAnnounceCard.propTypes = {
  id: PropTypes.string.isRequired,
  french: PropTypes.string.isRequired,
  euskara: PropTypes.string.isRequired,
  castillan: PropTypes.string.isRequired,
  getType: PropTypes.func.isRequired,
};
export default TypeAnnounceCard;
