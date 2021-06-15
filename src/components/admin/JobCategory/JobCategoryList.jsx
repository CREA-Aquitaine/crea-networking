import React from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import PropTypes from 'prop-types';

import styles from './JobCategory.module.css';
import JobCategoryModal from './JobCategoryModal';

function JobCategoryList({ getCategories, jobCategory }) {
  return (
    <>
      <Row className={`m-4 ${styles.containerList}`}>
        {jobCategory.map((item) => (
          <Col md="4" xs="6" className={styles.card} key={item.id}>
            <Card>
              <CardBody>
                <CardTitle>Catégorie d&apos;emploi : {item.labelFr}</CardTitle>
                <CardText>
                  <p className={styles.textCard}>Français : {item.labelFr}</p>
                  <p className={styles.textCard}>Español : {item.labelEs}</p>
                  <p className={styles.textCard}>Euskara: {item.labelEus}</p>
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
  getCategories: PropTypes.func.isRequired,
};

export default JobCategoryList;
