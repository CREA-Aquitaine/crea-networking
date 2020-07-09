import React from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import PropTypes from 'prop-types';

import styles from './JobCategory.module.css';
import JobCategoryModal from './JobCategoryModal';

function JobCategoryList({ getCategories, jobCategory }) {
  return (
    <>
      <Row className={styles.containerList}>
        {jobCategory.map((item) => (
          <Col xs="4" className={styles.card}>
            <Card>
              <CardBody>
                <CardTitle>Catégorie d&apos;emploi : {item.labelFr}</CardTitle>
                <CardText>
                  <p className={styles.textCard}>LabelFr : {item.labelFr}</p>
                  <p className={styles.textCard}>LabelEs : {item.labelEs}</p>
                  <p className={styles.textCard}>LabelEus: {item.labelEus}</p>
                </CardText>
                <JobCategoryModal
                  getCategories={getCategories}
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

JobCategoryList.propTypes = {
  jobCategory: PropTypes.string.isRequired,
  getCategories: PropTypes.string.isRequired,
};

export default JobCategoryList;
