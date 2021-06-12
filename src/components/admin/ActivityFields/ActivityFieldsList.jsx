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
          <Col md="4" xs="6" className={styles.card} key={item.id}>
            <Card>
              <CardBody>
                <CardTitle>Secteur d&apos;activité : {item.labelFr}</CardTitle>
                <CardText>
                  <p className={styles.textCard}>Français : {item.labelFr}</p>
                  <p className={styles.textCard}>Español : {item.labelEs}</p>
                  <p className={styles.textCard}>Euskara: {item.labelEus}</p>
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
  activityFields: PropTypes.arrayOf.isRequired,
  getActivity: PropTypes.func.isRequired,
};

export default ActivityFieldsList;
