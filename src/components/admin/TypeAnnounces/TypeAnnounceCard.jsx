import React from 'react';

import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Row,
} from 'reactstrap';
import PropTypes from 'prop-types';
import announce from './img/announce.png';
import styles from './TypeAnnounce.module.css';

function TypeAnnounceCard({ french, euskara, castillan }) {
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
          <CardTitle>Card title</CardTitle>
          <CardText>
            <Row>Français: {french}</Row>
            <Row>Euskara: {euskara}</Row>
            <Row>Castillan: {castillan}</Row>
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
}

TypeAnnounceCard.propTypes = {
  french: PropTypes.string.isRequired,
  euskara: PropTypes.string.isRequired,
  castillan: PropTypes.string.isRequired,
};
export default TypeAnnounceCard;
