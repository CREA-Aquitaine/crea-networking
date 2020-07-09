import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

import TypeAnnounceCard from './TypeAnnounceCard';

function TypeAnnounceList({ typePost }) {
  return (
    <Row>
      {typePost.map((item) => {
        return (
          <Col xs={4}>
            <TypeAnnounceCard
              french={item.labelFr}
              euskara={item.labelEus}
              castillan={item.labelEs}
            />
          </Col>
        );
      })}
    </Row>
  );
}

TypeAnnounceList.propTypes = {
  typePost: PropTypes.string.isRequired,
};
export default TypeAnnounceList;
