import React from 'react';
import { Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import PropTypes from 'prop-types';

import styles from './UserTypes.module.css';
import UserTypesModal from './UserTypesModal';

function UserTypeList({ getUserTypes, userTypes }) {
  return (
    <>
      <Row className={styles.containerList}>
        {userTypes.map((item) => (
          <Col xs="4" className={styles.card}>
            <Card>
              <CardBody>
                <CardTitle>Type d&apos;utilisateur : {item.label}</CardTitle>
                <UserTypesModal
                  getUserTypes={getUserTypes}
                  labelf={item.label}
                  id={item.id}
                />
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

UserTypeList.propTypes = {
  userTypes: PropTypes.string.isRequired,
  getUserTypes: PropTypes.string.isRequired,
};

export default UserTypeList;
