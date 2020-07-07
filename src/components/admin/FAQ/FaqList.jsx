import React from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

import styles from './Faq_List.module.css';
import FaqModal from './FaqModal';

function FaqList({ faq, getFaq }) {
  return (
    <>
      {/* {error ? 'Les données n&apos;ont pas pu être récupérées' : ''} */}
      <div Fluid className={styles.container}>
        {faq.map((item) => (
          <>
            <p className={styles.checkbox}>{item.question}</p>
            <p className={styles.response}>{item.answer}</p>
            <p className={styles.checkbox}>{item.language}</p>
            <Row className="mb-5">
              <Col xs={{ size: 2, offset: 10 }}>
                <FaqModal
                  request={item.question}
                  id={item.id}
                  response={item.answer}
                  country={item.language}
                  getFaq={getFaq}
                />
              </Col>
            </Row>
          </>
        ))}
      </div>
    </>
  );
}

FaqList.propTypes = {
  faq: PropTypes.string.isRequired,
  getFaq: PropTypes.string.isRequired,
};

export default FaqList;
