import React from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import PropTypes from 'prop-types';

import styles from './ActivityFields.module.css';
import ActivityModal from './ActivityModal';

function ActivityFieldsList({ getActivity, activityFields }) {
  return (
    <>
      <Row className={styles.containerList}>
        {activityFields.map((item) => (
          <Col xs="4" className={styles.card}>
            <Card>
              <CardBody>
                <CardTitle>Secteur d&apos;activité : {item.labelFr}</CardTitle>
                <CardText>
                  <p className={styles.textCard}>LabelFr : {item.labelFr}</p>
                  <p className={styles.textCard}>LabelEs : {item.labelEs}</p>
                  <p className={styles.textCard}>LabelEus: {item.labelEus}</p>
                </CardText>
                <ActivityModal
                  getActivity={getActivity}
                  labelEu={item.labelEus}
                  labelF={item.labelFr}
                  labelE={item.labelEs}
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

ActivityFieldsList.propTypes = {
  activityFields: PropTypes.string.isRequired,
  getActivity: PropTypes.string.isRequired,
};

export default ActivityFieldsList;
