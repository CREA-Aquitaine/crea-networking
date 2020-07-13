import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

import TypeAnnounceCard from './TypeAnnounceCard';

function TypeAnnounceList({ typePost, getType }) {
  return (
    <Row>
      {typePost.map((item) => {
        return (
          <Col xs={4}>
            <TypeAnnounceCard
              getType={getType}
              french={item.labelFr}
              euskara={item.labelEus}
              castillan={item.labelEs}
              id={item.id}
            />
          </Col>
        );
      })}
    </Row>
  );
}

TypeAnnounceList.propTypes = {
  typePost: PropTypes.string.isRequired,
  getType: PropTypes.string.isRequired,
};
export default TypeAnnounceList;
